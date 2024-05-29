// -- == [[ CONFIG ]] == -- \\

// Import types from express
import {
    type Request,
} from 'express';


// Import default types
import { type ValidatorReturnTupleValue } from "@v1types/main-types.js";


// Import validator methods
import { ValidateRequestAll } from './requestValidator.js';
import IPCanRequest from './ratelimitValidator.js';



// -- == [[ VALIDATOR METHODS ]] == -- \\


const ValidateTrainingAll = (req: Request): ValidatorReturnTupleValue => {

    const requestValidation = ValidateRequestAll(req);

    const rateLimitValidation = IPCanRequest(req.ip, "training");

    const validations = [requestValidation, rateLimitValidation];

    for (const validation of validations) {
        if (typeof validation[0] === 'string') return validation;
    }

    return [true, 200];

}



// -- == [[ EXPORT VALIDATOR METHODS ]] == -- \\

export { ValidateTrainingAll }