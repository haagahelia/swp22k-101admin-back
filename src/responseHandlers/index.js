import { logger } from "../utils/Logger.js";


// Error messages 
const SERVER_ERROR_MESSAGE = "Server error";
const DB_ERROR_MESSAGE = SERVER_ERROR_MESSAGE;
const REQUEST_BASED_ERROR_MESSAGE = "Request error";

// Messages to log
const SERVER_ERROR_MESSAGE_TO_LOG = "Server error";
const DB_ERROR_MESSAGE_TO_LOG = "Database error";
const REQUEST_BASED_ERROR_MESSAGE_TO_LOG = "Request error";
const SUCCESS_MESSAGE_TO_LOG = "Operation successful";


export const databaseErrorHandler = (res, dbErr, message) => {
    if (!message) {
        message = DB_ERROR_MESSAGE_TO_LOG;
    }
    message += " Db error code: " + dbErr.errno;
    message += " Db error message: " + dbErr.message;

    logger.log({
        level: 'error',
        message: message
    });
    res.status(500).send(DB_ERROR_MESSAGE).end();
}

export const serverErrorHandler = (res, message) => {
    if (!message) {
        message = SERVER_ERROR_MESSAGE_TO_LOG;
    }
    logger.log({
        level: 'error',
        message: message
    });
    res.status(500).send(SERVER_ERROR_MESSAGE).end();
}

export const requestErrorHandler = (res, message) => {
    if (!message) {
        message = REQUEST_BASED_ERROR_MESSAGE_TO_LOG;
    }
    logger.log({
        level: 'error',
        message: message
    });
    res.status(400).send(REQUEST_BASED_ERROR_MESSAGE).end();
}

export const successHandler = (res, message) => {
    if (!message) {
        message = SUCCESS_MESSAGE_TO_LOG;
    }
    logger.log({
        level: 'verbose',
        message: message
    });
    res.status(200).send(data).end();
}

