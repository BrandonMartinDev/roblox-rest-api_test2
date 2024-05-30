// -- == [[ CONFIG ]] == -- \\

// Import types from express
import {
    type Request,
    type Response,
} from 'express';


// Import default types
import {
    type ValidatorReturnTupleValue
} from "@v1types/main-types.js";


// Import validator methods
import { ValidateRequestAll } from './requestValidator.js';
import IPCanRequest from './ratelimitValidator.js';


// Import services methods
import { GetRankInGroup } from "@v1services/groupRankService.js";



// -- == [[ VALIDATOR METHODS ]] == -- \\

// Validates request body has 'userId' value
const ValidateSuspendBody = (req: Request): ValidatorReturnTupleValue => {

    const reqBody = req.body;

    if (!(reqBody.userId)) return ["userId does not exist on the request's body!", 400]

    return [true, 200];

}

const ValidateUserIsInGroup = (userId: number): ValidatorReturnTupleValue => {

    const rankInGroup = GetRankInGroup(userId);

    if (!rankInGroup || typeof (rankInGroup) !== 'number' || rankInGroup === 0) return [`UserID: ${userId} is not in group`, 400];

    return [true, 200];

}

const ValidateSuspendAll = (req: Request): ValidatorReturnTupleValue => {

    const requestValidation = ValidateRequestAll(req);
    const bodyValidation = ValidateSuspendBody(req);
    const userInGroupValidation = ValidateUserIsInGroup(req.body.userId || 0);

    const rateLimitValidation = IPCanRequest(req.ip, "suspend");

    const validations = [requestValidation, bodyValidation, userInGroupValidation, rateLimitValidation];

    for (const validation of validations) {
        if (typeof validation[0] === 'string') return validation;
    }

    return [true, 200];

}



// -- == [[ EXPORT VALIDATOR METHODS ]] == -- \\

export { ValidateSuspendAll }