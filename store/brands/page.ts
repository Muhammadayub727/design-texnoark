import { create } from "zustand";
import http from "../../api/interseptor";
import { request_brands } from "@/interfaces/brands";

const useCategoryStore = create <request_brands>((set) => ({
    brands: [],
    getBrands: async () => {
        try{
            const response = await http.get("/category/search");
            set({ brands: response?.data?.data?.brands});
        }catch(err){
            console.log(err);
        }
    },
    getBrandsId: async (id) => {
        try{
            const response = await http.get(`/category/${id}`);
            set({ brands: response?.data?.data?.brands});
        }catch(err){
            console.log(err);
        }
    },
}));




export default useCategoryStore;