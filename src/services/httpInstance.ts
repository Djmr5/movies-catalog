import axios from "axios";
import Config from "../config";

const httpInstance = axios.create({
    baseURL: Config.API_URL,
});

httpInstance.interceptors.request.use(
    async ( config ) => {
        const newConfig = {...config};
        return newConfig;
    },
    ( error ) => {
        return Promise.reject(error);
    }
);

httpInstance.interceptors.response.use(
    async ( response ) => {
        return response;
    },
    ( error ) => {
        return Promise.reject(error);
    }
);

export default httpInstance;
