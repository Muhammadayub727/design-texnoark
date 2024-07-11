import { create } from "zustand";
import http from "../../api/interseptor";
import { liked_request } from "@/interfaces/likes";

const uselikedtore = create <liked_request> ((set) => ({
    liked: [],
    count: 0,
    getliked: async ({id}) => {
        try{
            const response = await http.get(`/liked/user/liked/${id}`);
            set({ liked: response?.data?.data?.liked});
            set({ count: response?.data?.data?.count})
            // console.log("res",response)
        }catch(err){
            console.log(err);
        }
    },
    postliked: async ({ product_id }) => {
        try{
            const response = await http.post(`/liked/create`, { product_id });
            console.log({ product_id })
            return response
        }catch(err){
            console.log(err);
        }
    }
}));

export default uselikedtore;
