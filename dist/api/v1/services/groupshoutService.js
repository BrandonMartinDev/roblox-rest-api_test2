import noblox from 'noblox.js';
import { loggedInUser } from "../models/noblox.js";
const GROUP_ID = parseInt(process.env.GROUP_ID || "0");
export const SetGroupShout = (newShout) => {
    if (!loggedInUser)
        throw new Error('SERVER IS NOT LOGGED IN');
    noblox.shout(GROUP_ID, newShout);
};
