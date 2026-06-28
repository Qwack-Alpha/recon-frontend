import axios from "axios";

import { env } from "../config/env";

import {

TokenStorage

} from "../utils/tokenStorage";

const api=axios.create({

baseURL:env.apiBaseUrl,

headers:{

"Content-Type":"application/json"

}

});

api.interceptors.request.use(

config=>{

const token=TokenStorage.access();

if(token){

config.headers.Authorization=`Bearer ${token}`;

}

return config;

}

);

export default api;
