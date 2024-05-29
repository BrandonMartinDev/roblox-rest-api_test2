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

// Validates request body has 'newShout' value
const ValidateGroupShoutBody = (req: Request): ValidatorReturnTupleValue => {

    const reqBody = req.body;

    if (!(reqBody.newShout)) return ["newShout does not exist on the request's body!", 400]

    return [true, 200];

}

const ValidateGroupShoutAll = (req: Request): ValidatorReturnTupleValue => {

    const requestValidation = ValidateRequestAll(req);
    const bodyValidation = ValidateGroupShoutBody(req);

    const rateLimitValidation = IPCanRequest(req.ip, "groupshout");    

    const validations = [requestValidation, bodyValidation, rateLimitValidation];

    for (const validation of validations) {
        if (typeof validation[0] === 'string') return validation;
    }

    return [true, 200];

}



// -- == [[ EXPORT VALIDATOR METHODS ]] == -- \\

export { ValidateGroupShoutAll }