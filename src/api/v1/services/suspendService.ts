import noblox from 'noblox.js'
import { loggedInUser } from "@v1models/noblox.js";

import { SUSPENDED_RANK } from "@v1config/defaults.js";
import { GetRankInGroup } from "@v1services/groupRankService.js";

const GROUP_ID = parseInt(process.env.GROUP_ID || "0");

export const SuspendUserProvided = async (userId: number) => {

    if (!loggedInUser) throw new Error('SERVER IS NOT LOGGED IN');

    const rankInGroup = await GetRankInGroup(userId);

    if (!rankInGroup || rankInGroup <= 0) throw new Error(`${userId} is not in the group!`)
    
    noblox.setRank(GROUP_ID, userId, SUSPENDED_RANK);

}