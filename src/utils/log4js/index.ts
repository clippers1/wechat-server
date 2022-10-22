import log4js from "log4js";
import type { Express } from "express";


log4js.configure({
  "appenders": {
    "access": {
      "type": "dateFile",
      "filename": "logs/access.log",
      "pattern": "-yyyy-MM-dd",
      "category": "http"
    },
    "app": {
      "type": "dateFile",
      "filename": "logs/app.log",
      "maxLogSize": 10485760,
      "pattern": "-yyyy-MM-dd",
      "numBackups": 3
    },
    "errorFile": {
      "type": "file",
      "filename": "logs/errors.log"
    },
    "errors": {
      "type": "logLevelFilter",
      "level": "ERROR",
      "appender": "errorFile"
    }
  },
  "categories": {
    "default": {
      "appenders": [
        "app",
        "errors"
      ],
      "level": "INFO"
    },
    "http": {
      "appenders": [
        "access"
      ],
      "level": "DEBUG"
    }
  }
})


export default (app: Express) => {
  app.use(log4js.connectLogger(
    log4js.getLogger('http'),
    {
      level: 'auto'
    }))
} 