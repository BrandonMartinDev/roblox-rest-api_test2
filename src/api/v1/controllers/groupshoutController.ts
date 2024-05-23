import {
    type Request,
    type Response
} from "express";

import {
    RespondWithError,
    RespondWithSuccess
} from '@v1services/respondService.js'

import { SetGroupShout } from "@v1services/groupshoutService.js";

export const GetGroupShout = (req: Request, res: Response) => {
    return RespondWithSuccess(res, `${req.originalUrl} is OK`, 200);
}

export const ChangeGroupShout = (req: Request, res: Response) => {

    const reqBody = req.body;
    const newShout = reqBody?.newShout

    if (!reqBody) return RespondWithError(res, "Something went wrong with getting the request body", 500)
    if (!newShout) return RespondWithError(res, "newShout is missing on request body", 400)

    try {

        SetGroupShout(newShout);

        console.log(`${req.ip} successfully changed the group shout to: '${newShout}'`);

        return RespondWithSuccess(res, `Successfully changed group shout to ${newShout}`, 200);

    } catch (error) {
        return RespondWithError(res, `There was an error setting the group shout to ${newShout}`, 500);
    }

}