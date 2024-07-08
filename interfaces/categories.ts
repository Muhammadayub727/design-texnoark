export interface data{
    id: number;
    createdAt: string;
    lastUpdatedAt: string;
    name: string;
}


export interface request_category{
    categories: data[];
    getCategories: () => any;
    getCategoryById: (id: number) => any;
}