interface data{
    name: string
    id: number
    createdAt: string
    lastUpdatedAt: string
}

export interface request_brands{
    brands: data[];
    getBrands: () => any;
    getBrandsId: (id: number) => any;
}