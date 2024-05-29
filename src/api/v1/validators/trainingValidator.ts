// -- == [[ CONFIG ]] == -- \\

// Import types from express
import {
    type Request,
} from 'express';

// Import validator methods
import { ValidateRequestAll } from './requestValidator.js';
import IPCanRequest from './ratelimitValidator.js';



// -- == [[ VALIDATOR METHODS ]] == -- \\


const ValidateTrainingAll = (req: Request): boolean | string => {

    const requestValidation = ValidateRequestAll(req);

    const rateLimitValidation = IPCanRequest(req.ip, "training");    

    const validations = [requestValidation, rateLimitValidation];

    for (const validation of validations) {
        if (typeof validation === 'string' || validation !== true) return validation;
    }

    return true;

}



// -- == [[ EXPORT VALIDATOR METHODS ]] == -- \\

export { ValidateTrainingAll }