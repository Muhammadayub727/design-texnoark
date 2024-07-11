interface likesData{

}

interface getlikes{
    id: number
}

interface postlikes{
    product_id: number
}


export interface likes_request{
    likes: likesData[]
    count: number
    getlikes: (id: getlikes) => any
    postlikes: (id: postlikes) => any
}