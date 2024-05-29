// Import defaults
import { RATE_LIMIT } from "@v1config/defaults.js";
import {type ValidatorReturnTupleValue} from "@v1types/main-types.js"
import { RateLimitType } from "@v1types/union-types.js";

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

function IPCanRequest(ip: string | undefined, typeOfRequest: RateLimitType): ValidatorReturnTupleValue {

    if (!ip) return [`Ip does not exist!`, 400];

    addRequestToIPRateLimit(ip, typeOfRequest);

    let RATE_LIMIT_CACHE_FOR_REQUEST: any = RATE_LIMIT_CACHE[typeOfRequest];

    if (!RATE_LIMIT_CACHE[typeOfRequest]) {
        RATE_LIMIT_CACHE[typeOfRequest] = {};
        RATE_LIMIT_CACHE_FOR_REQUEST = RATE_LIMIT_CACHE[typeOfRequest];
    }

    if (!RATE_LIMIT_CACHE_FOR_REQUEST[ip]) {
        return [true, 200];
    }

    if (RATE_LIMIT_CACHE_FOR_REQUEST[ip] <= RATE_LIMIT) {
        return [true, 200];
    }

    return [`${ip} has requested over the ${typeOfRequest} rate limit: ${RATE_LIMIT_CACHE_FOR_REQUEST[ip]} requests`, 429];

}

export default IPCanRequest;
