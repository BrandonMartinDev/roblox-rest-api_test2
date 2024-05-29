// -- == [[ CONFIG ]] == -- \\

// Import types from express
import {
    type Request,
    type Response
} from "express";

// Import services methods
import {
    RespondWithError,
    RespondWithSuccess
} from '@v1services/respondService.js'

// Import validator methods
import { ValidateGroupShoutAll } from "@v1validators/groupshoutValidator.js";
import IPCanRequest from "@v1validators/ratelimitValidator.js";


// Import services methods
import { SetGroupShout } from "@v1services/groupshoutService.js";



// -- == [[ CONTROLLER METHODS ]] == -- \\

// GET /api/v1/groupshout
export const GetGroupShout = (req: Request, res: Response) => {
    
    const rateLimitValidation = IPCanRequest(req.ip, "groupshout");    
    if (typeof rateLimitValidation[0] === 'string') return RespondWithError(res, rateLimitValidation[0], rateLimitValidation[1]);

    return RespondWithSuccess(res, `${req.originalUrl} is OK`, 200);
    
}

// POST /api/v1/groupshout
export const ChangeGroupShout = (req: Request, res: Response) => {

    const groupShoutValidation = ValidateGroupShoutAll(req);

    if (typeof groupShoutValidation[0] === 'string') return RespondWithError(res, groupShoutValidation[0], groupShoutValidation[1]);

    const reqBody = req.body;
    const newShout = reqBody?.newShout;

    try {

        SetGroupShout(newShout);

        console.log(`groupShoutController (ChangeGroupShout) | ${req.ip} successfully changed the group shout to: '${newShout}'`);

        return RespondWithSuccess(res, `Successfully changed group shout to '${newShout}'`, 200);

    } catch (error) {
        return RespondWithError(res, `There was an error setting the group shout to '${newShout}'`, 500);
    }

}