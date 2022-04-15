
var DEBUG = true;

export const setDebug = (debug) => {
    console.log(`Debug set to ${debug}`);
    DEBUG = debug;
}

export const log = (message) => {
    if (DEBUG) {
        console.log(message);
    }
}