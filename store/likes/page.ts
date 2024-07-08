import { create } from "zustand";
import http from "../../api/interseptor";
import { Likes_request } from "@/interfaces/likes";

const useLikeStore = create <Likes_request> ((set) => ({
    Likes: [],
    count: 0,
    getLikes: async ({id}) => {
        try{
            const response = await http.get(`/likes/user/likes/${id}`);
            set({ Likes: response?.data?.data?.likes});
            set({ count: response?.data?.data?.count})
        }catch(err){
            console.log(err);
        }
    },
    postLikes: async (id) => {
        try{
            const response = await http.post(`/likes/create`, id);
            return response
        }catch(err){
            console.log(err);
        }
    }
}));




export default useLikeStore;