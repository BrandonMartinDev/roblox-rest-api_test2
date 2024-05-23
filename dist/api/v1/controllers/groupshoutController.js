import { RespondWithError, RespondWithSuccess } from '../services/respondService.js';
import { SetGroupShout } from "../services/groupshoutService.js";
export const GetGroupShout = (req, res) => {
    return RespondWithSuccess(res, `${req.originalUrl} is OK`, 200);
};
export const ChangeGroupShout = (req, res) => {
    const reqBody = req.body;
    const newShout = reqBody === null || reqBody === void 0 ? void 0 : reqBody.newShout;
    if (!reqBody)
        return RespondWithError(res, "Something went wrong with getting the request body", 500);
    if (!newShout)
        return RespondWithError(res, "newShout is missing on request body", 400);
    try {
        SetGroupShout(newShout);
        console.log(`${req.ip} successfully changed the group shout to: '${newShout}'`);
        return RespondWithSuccess(res, `Successfully changed group shout to ${newShout}`, 200);
    }
    catch (error) {
        return RespondWithError(res, `There was an error setting the group shout to ${newShout}`, 500);
    }
};
