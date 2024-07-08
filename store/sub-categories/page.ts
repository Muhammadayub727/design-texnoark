import { create } from "zustand";
import http from "../../api/interseptor";
import { request_subcategory } from "@/interfaces/sub-categories";

const useSubCategoryStore = create <request_subcategory> ((set) => ({
    subcategories: [],
    getSubCategories: async (id) => {
        try{
            const response = await http.get(`/sub-category/search/${id}`);
            set({ subcategories: response?.data?.data?.subcategories});
        }catch(err){
            console.log(err);
        }
    },
    getSubCategoryById: async (id) => {
        try{
            const response = await http.get(`/sub-category/${id}`);
            set({ subcategories: response?.data?.data?.subcategories});
        }catch(err){
            console.log(err);
        }
    }
}));


export default useSubCategoryStore;