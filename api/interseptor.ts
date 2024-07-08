import { getAccessToken } from "@/helpers/auth-helpers";
import axios from "axios";

const http = axios.create({
    baseURL: "https://ecomapi.ilyosbekdev.uz"
})

http.interceptors.request.use((config) => {
    const token = getAccessToken()
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
})

export default http;