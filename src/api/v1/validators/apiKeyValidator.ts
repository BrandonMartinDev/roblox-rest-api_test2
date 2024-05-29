// -- == [[ CONFIG ]] == -- \\

// Import types from express
import {
    type Request,
    type Response,
} from 'express';



// -- == [[ VALIDATOR METHODS ]] == -- \\

// Validates whether the api key is the correct api key
const ValidateApiKey = (apiKeyProvided: string): [boolean | string, number] => {

    if (!(apiKeyProvided === process.env.API_KEY)) return ['Invalid apiKey provided. Please make sure you have set the authorization header to a valid api key.', 401];

    return [true, 200];

}



// -- == [[ EXPORT VALIDATOR METHODS ]] == -- \\

export { ValidateApiKey }