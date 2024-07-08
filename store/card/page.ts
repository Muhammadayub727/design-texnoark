import { create } from "zustand";
import http from "../../api/interseptor";
import { Carts_request } from "@/interfaces/carts";

const useCartsStore = create <Carts_request>  ((set) => ({
    Cards: [],
    countCarts: 0,
    getCards: async ({id}) => {
        try{
            const response = await http.get(`/carts/user/${id}`);
            set({ Cards: response?.data?.data?.carts});
            set({ countCarts: response?.data?.data?.count})
        }catch(err){
            console.log(err);
        }
    },
    postCards: async (props) => {
        console.log(props);
        try{
            const response = await http.post(`/carts/create`, props);
            return response
        }catch(err){
            console.log(err);
        }
    },
    deleteCards: async ({id}) => {
        try{
            const response = await http.delete(`/carts/delete/${id}`);
            return response
        }catch(err){
            console.log(err);
        }
    }
}));




export default useCartsStore;