// -- == [[ CONFIG ]] == -- \\

// Import types from express
import {
    type Request,
    type Response,
} from 'express';

// Import validator methods
import { ValidateRequestAll } from './requestValidator.js';



// -- == [[ VALIDATOR METHODS ]] == -- \\

// Validates request body has 'newShout' value
const ValidateGroupShoutBody = (req: Request) => {

    const reqBody = req.body;

    if (!(reqBody.newShout)) return "newShout does not exist on the request's body!"

    return true;

}

const ValidateGroupShoutAll = (req: Request): boolean | string => {

    const requestValidation = ValidateRequestAll(req);
    const bodyValidation = ValidateGroupShoutBody(req);

    const validations = [requestValidation, bodyValidation];

    for (const validation of validations) {
        if (typeof validation === 'string') return validation;
    }

    return true;

}



// -- == [[ EXPORT VALIDATOR METHODS ]] == -- \\

export { ValidateGroupShoutAll }