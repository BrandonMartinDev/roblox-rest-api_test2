import noblox from 'noblox.js'
import { loggedInUser } from "@v1models/noblox.js";

const GROUP_ID = parseInt(process.env.GROUP_ID || "0");

export const SetGroupShout = (newShout: string) => {

    if (!loggedInUser) throw new Error('SERVER IS NOT LOGGED IN');

    noblox.shout(GROUP_ID, newShout);

}