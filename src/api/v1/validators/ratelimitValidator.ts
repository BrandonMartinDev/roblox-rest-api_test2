import { RATE_LIMIT } from "@v1config/defaults.js";
import { RateLimitType } from "@/api/v1/types/union-types.js";

let RATE_LIMIT_CACHE: any = {};

function addRequestToIPRateLimit(ip: string, typeOfRequest: RateLimitType) {

    let RATE_LIMIT_CACHE_FOR_REQUEST = RATE_LIMIT_CACHE[typeOfRequest];

    if (!RATE_LIMIT_CACHE[typeOfRequest]) {
        RATE_LIMIT_CACHE[typeOfRequest] = {};
        RATE_LIMIT_CACHE_FOR_REQUEST = RATE_LIMIT_CACHE[typeOfRequest]
    }

    if (!RATE_LIMIT_CACHE_FOR_REQUEST[ip]) {
        RATE_LIMIT_CACHE_FOR_REQUEST[ip] = 1;
    } else {
        RATE_LIMIT_CACHE_FOR_REQUEST[ip]++;
    }

    setTimeout(() => {
        if (RATE_LIMIT_CACHE_FOR_REQUEST[ip] > 0) {
            RATE_LIMIT_CACHE_FOR_REQUEST[ip]--
        };
        console.log(`Lowered ${ip}'s ${typeOfRequest} rate to: ${RATE_LIMIT_CACHE_FOR_REQUEST[ip]}`)
    }, 60 * 1000)

}

function IPCanRequest(ip: string | undefined, typeOfRequest: RateLimitType): string | boolean {

    if (!ip) return false;

    addRequestToIPRateLimit(ip, typeOfRequest);

    let RATE_LIMIT_CACHE_FOR_REQUEST: any = RATE_LIMIT_CACHE[typeOfRequest];

    if (!RATE_LIMIT_CACHE[typeOfRequest]) {
        RATE_LIMIT_CACHE[typeOfRequest] = {};
        RATE_LIMIT_CACHE_FOR_REQUEST = RATE_LIMIT_CACHE[typeOfRequest];
    }

    if (!RATE_LIMIT_CACHE_FOR_REQUEST[ip]) {
        return true;
    }

    if (RATE_LIMIT_CACHE_FOR_REQUEST[ip] <= RATE_LIMIT) {
        return true;
    }

    return `${ip} has requested over the ${typeOfRequest} rate limit: ${RATE_LIMIT_CACHE_FOR_REQUEST[ip]} requests`;

}

export default IPCanRequest;
