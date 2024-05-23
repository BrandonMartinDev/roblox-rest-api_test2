var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const ROBLOX_COOKIE = process.env.ROBLOX_COOKIE;
import noblox from 'noblox.js';
function loginUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const loggedInUser = yield noblox.setCookie(ROBLOX_COOKIE || "");
            console.log(`SERVER HAS LOGGED IN AS USER: ${loggedInUser.UserName} - [${loggedInUser.UserID}]`);
            return loggedInUser;
        }
        catch (err) {
            if (err instanceof Error) {
                console.warn(`SERVER COULD NOT LOG IN: ${err.message}`);
            }
        }
    });
}
export const loggedInUser = loginUser();
