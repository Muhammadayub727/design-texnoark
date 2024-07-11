import { create } from "zustand";
import http from "../../api/interseptor";
import { likes_request } from "@/interfaces/likes";

const uselikestore = create <likes_request> ((set) => ({
    likes: [],
    count: 0,
    getlikes: async ({id}) => {
        try{
            const response = await http.get(`/likes/user/likes/${id}`);
            set({ likes: response?.data?.data?.likes});
            set({ count: response?.data?.data?.count})
            // console.log("res",response)
        }catch(err){
            console.log(err);
        }
    },
    postlikes: async ({ product_id }) => {
        try{
            const response = await http.post(`/likes/create`, { product_id });
            // console.log({ product_id })
            return response
        }catch(err){
            console.log(err);
        }
    }
}));

export default uselikestore;
