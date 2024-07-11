import { create } from "zustand";
import http from "../../api/interseptor";
import { Auth_request } from "@/interfaces/auth";

const AuthStore = create <Auth_request> ((set) => ({
    login: async (data) => {
        try{
            const response = await http.post("/auth/sign-in", data);
            return response
        }catch(err){
            console.log(err);
        }
    },
    signup: async (data) => {
        try{
            const response = await http.post("/auth/user/sign-up", data);
            return response
        }catch(err){
            console.log(err);
        }
    }
}));




export default AuthStore;