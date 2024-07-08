interface commets_Data{
    id: number
    createdAt: string
    lastUpdatedAt: string
    comment: string
    user_id: number
    product_id: number
}

interface getCommets{
    id: number
}

interface createCommets{
    comment: string
    product_id: number
}


export interface Commets_request{
    commets: commets_Data[]
    getCommets: (data: getCommets) => any
    postCommets: (data: createCommets) => any
}