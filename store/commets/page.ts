import { create } from "zustand";
import http from "../../api/interseptor";
import { Commets_request } from "@/interfaces/commets";

const useCommentStore = create <Commets_request> ((set) => ({
    commets: [],
    getCommets: async ({id}) => {
        try{
            const response = await http.get(`/comment/product/${id}`);
            set({ commets: response?.data?.data?.comment});
        }catch(err){
            console.log(err);
        }
    },
    postCommets: async (data) => {
        try{
            const response = await http.post(`/comment/create`, data);
            console.log(response);
            set((state) => {
                return {
                    commets: [...state.commets, response?.data?.data],
                }
            })
            return response
        }catch(err){
            console.log(err);
        }
    }
}));




export default useCommentStore;