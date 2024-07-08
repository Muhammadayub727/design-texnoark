interface likesData{

}

interface getCar{
    id: number
}

interface postCarts{
    product_id: number
}



export interface Carts_request{
    Cards: []
    countCarts: number
    getCards: (id: getCar) => any
    postCards: (id: postCarts) => any
    deleteCards: (id: getCar) => any
}