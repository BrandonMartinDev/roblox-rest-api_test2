export type ServerResponseSuccess = {
    message: string
}

export type ServerResponseError = {
    error: string
    code?: number
}