import { StatusCodes } from 'http-status-codes';

export const BASE_URL = 'https://api.telegram.org/bot6881334638:AAHG4KdJN1hHor_pqcb5Rv2F0iHXOyPaCwU';
export const CHAT_ID = '-1002186631492';

export const USER_DATA_PARTS = ['name', 'email', 'phone', 'network', 'city', 'street', 'house', 'apartments', 'index'];

export const StatusCodeMapping: Record<number, boolean> = {
    [StatusCodes.OK]: true,
    [StatusCodes.BAD_REQUEST]: true,
    [StatusCodes.FORBIDDEN]: true,
    [StatusCodes.NOT_FOUND]: true
};