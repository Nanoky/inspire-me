import axios from "axios"
import { log } from "./logger"

const successHandler = (result) => {
    log(`Success : `);
    const data = result.data;
    log(data);
    return data;
}

const errorHandler = (error) => {
    log(`Error : `);
    log(error);
}

const handle = (promise) => {
    return promise.then(successHandler).catch(errorHandler);
}

const RESPONSE_FORMAT = "json"

const config = {

}

export const get = (url) => handle(axios.get(`${url}&format=${RESPONSE_FORMAT}&nojsoncallback=1`));

export const post = (url, data) => handle(axios.post(`${url}&format=${RESPONSE_FORMAT}&nojsoncallback=1`, data));
