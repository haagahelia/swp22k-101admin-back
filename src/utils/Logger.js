import winston from "winston";

const logConfig = {
    'transports': [
        new winston.transports.Console({ level: "verbose" }),
        new winston.transports.File({ filename: './logs/winstonBackendLog.log', level: "verbose" }),
        new winston.transports.Console({ level: "error" }),
        new winston.transports.File({ filename: './logs/winstonErrorLog.log', level: "error" })
    ]
};

export const logger = winston.createLogger(logConfig);
