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
import { ValidateApiKey } from './apiKeyValidator.js';



// -- == [[ VALIDATOR METHODS ]] == -- \\

// Validates whether the req has headers and has 'content-type' set to 'application/json'
const ValidateRequestHeaders = (req: Request): ValidatorReturnTupleValue => {

    const reqHeaders = req.headers;

    if (!reqHeaders) return ["There was a problem getting the request's headers.", 500];
    if (!(reqHeaders['content-type'] === 'application/json')) return ["Request header did not have its 'content-type' set to 'application/json'", 406];

    return [true, 200];

}

// Validates whether the req has a body
const ValidateRequestBody = (req: Request): ValidatorReturnTupleValue => {

    const reqBody = req.body;

    if (!reqBody) return ["There was a problem getting the request's body", 500];

    return [true, 200];

}


const ValidateRequestAll = (req: Request): ValidatorReturnTupleValue => {

    const headerValidation = ValidateRequestHeaders(req);
    const bodyValidation = ValidateRequestBody(req);
    const apiKeyValidation = ValidateApiKey(req.headers.authorization || "");

    const validations = [headerValidation, bodyValidation, apiKeyValidation];

    for (const validationData of validations) {
        if (typeof validationData[0] === 'string') return validationData;
    }

    return [true, 200];

}



// -- == [[ EXPORT VALIDATOR METHODS ]] == -- \\

export {
    ValidateRequestHeaders,
    ValidateRequestBody,
    ValidateRequestAll
}