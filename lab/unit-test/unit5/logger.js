'use strict';

const Level = {
    TRACE: { priority: 0, outputString: 'TRACE' },
    DEBUG: { priority: 100, outputString: 'DEBUG' },
    INFO: { priority: 200, outputString: 'INFO' },
    WARN: { priority: 300, outputString: 'WARN' },
    ERROR: { priority: 400, outputString: 'ERROR' },
    FATAL: { priority: 500, outputString: 'FATAL' },
    OFF: { priority: 1000, outputString: 'OFF' },
};
// The default log level
const DEFAULT_LOG_LEVEL = Level.INFO;
// The current Log level
let logLevel = DEFAULT_LOG_LEVEL;

function log(messageLogLevel, message, source, logFunction) {
    let computedMessage = null;
    if (messageLogLevel.priority >= logLevel.priority) {
        let now = Date.now();
        let outputString = now.toString() + ':' + messageLogLevel.outputString;
        computedMessage = outputString + ': ' + ((source) ? source + ': ' : '') + message;
        (logFunction) ? logFunction(computedMessage) : logMessage(computedMessage);
    }
    return computedMessage;
}

module.exports.Level = Level;
module.exports.DEFAULT_LOG_LEVEL = DEFAULT_LOG_LEVEL;
