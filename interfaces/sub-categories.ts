export interface data{
    id: number;
    createdAt: string;
    lastUpdatedAt: string;
    name: string;
    parent_category_id: string
}


export interface request_subcategory{
    subcategories: data[];
    getSubCategories: (id:number) => any;
    getSubCategoryById: (id: number) => any;
}