import { create } from "zustand";
import http from "../../api/interseptor";
import { request_category } from "@/interfaces/categories";

const useCategoryStore = create <request_category> ((set) => ({
    categories: [],
    getCategories: async () => {
        try{
            const response = await http.get("/category/search");
            set({ categories: response?.data?.data?.categories});
        }catch(err){
            console.log(err);
        }
    },
    getCategoryById: async (id) => {
        try{
            const response = await http.get(`/category/${id}`);
            set({ categories: response?.data?.data?.categories});
        }catch(err){
            console.log(err);
        }
    },
}));




export default useCategoryStore;