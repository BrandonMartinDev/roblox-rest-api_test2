const ROBLOX_COOKIE = process.env.ROBLOX_COOKIE

import noblox from 'noblox.js';

async function loginUser() {

    try {

        const loggedInUser = await noblox.setCookie(ROBLOX_COOKIE || "");

        console.log(`SERVER HAS LOGGED IN AS USER: ${loggedInUser.UserName} - [${loggedInUser.UserID}]`);

        return loggedInUser;

    } catch (err) {

        if (err instanceof Error) {
            console.warn(`SERVER COULD NOT LOG IN: ${err.message}`);
        }

    }

}

export const loggedInUser = loginUser();