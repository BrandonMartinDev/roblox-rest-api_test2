// -- == [[ CONFIG ]] == -- \\

// Import types from express
import {
    type Request,
    type Response,
} from 'express';



// -- == [[ VALIDATOR METHODS ]] == -- \\

// Validates whether the api key is the correct api key
const ValidateApiKey = (apiKeyProvided: string): boolean | string => {

    if (!(apiKeyProvided !== process.env.API_KEY)) return 'Invalid apiKey provided';

    return true;

}



// -- == [[ EXPORT VALIDATOR METHODS ]] == -- \\

export { ValidateApiKey }