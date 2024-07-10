interface likedData{

}

interface getliked{
    id: number
}

interface postliked{
    product_id: number
}



export interface liked_request{
    liked: likedData[]
    count: number
    getliked: (id: getliked) => any
    postliked: (id: postliked) => any
}