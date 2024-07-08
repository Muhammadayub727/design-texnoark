export interface data_product{
    id: number
    brand_id: number
    createdAt: string
    lastUpdateAt: string
    name: string
    price: string
}

interface getId {
    id: number;
}

export interface request_products{
    products: data_product[];
    getProducts: () => any;
    getProductsId: (id: getId) => any
}