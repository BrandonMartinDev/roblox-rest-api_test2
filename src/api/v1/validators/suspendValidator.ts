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



// -- == [[ VALIDATOR METHODS ]] == -- \\

// Validates request body has 'userId' value
const ValidateSuspendBody = (req: Request): ValidatorReturnTupleValue => {

    const reqBody = req.body;

    if (!(reqBody.userId)) return ["userId does not exist on the request's body!", 400]

    return [true, 200];

}

const ValidateSuspendAll = (req: Request): ValidatorReturnTupleValue => {

    const requestValidation = ValidateRequestAll(req);
    const bodyValidation = ValidateSuspendBody(req);

    const rateLimitValidation = IPCanRequest(req.ip, "suspend");    

    const validations = [requestValidation, bodyValidation, rateLimitValidation];

    for (const validation of validations) {
        if (typeof validation[0] === 'string') return validation;
    }

    return [true, 200];

}



// -- == [[ EXPORT VALIDATOR METHODS ]] == -- \\

export { ValidateSuspendAll }