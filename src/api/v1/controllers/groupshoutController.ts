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

import { SetGroupShout } from "@v1services/groupshoutService.js";



// -- == [[ CONTROLLER METHODS ]] == -- \\

// GET /api/v1/groupshout
export const GetGroupShout = (req: Request, res: Response) => {
    return RespondWithSuccess(res, `${req.originalUrl} is OK`, 200);
}

// POST /api/v1/groupshout
export const ChangeGroupShout = (req: Request, res: Response) => {

    const groupShoutValidation = ValidateGroupShoutAll(req);

    if (typeof groupShoutValidation === 'string') return RespondWithError(res, groupShoutValidation, 400);

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