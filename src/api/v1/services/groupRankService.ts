import noblox from 'noblox.js'
import { loggedInUser } from "@v1models/noblox.js";

const GROUP_ID = parseInt(process.env.GROUP_ID || "0");

export const GetRankInGroup = async (userId: number) => {

    if (!loggedInUser) throw new Error('SERVER IS NOT LOGGED IN');

    return await noblox.getRankInGroup(GROUP_ID, userId);

}