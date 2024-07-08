interface likesData{

}

interface getLikes{
    id: number
}

interface postLikes{
    product_id: number
}



export interface Likes_request{
    Likes: likesData[]
    count: number
    getLikes: (id: getLikes) => any
    postLikes: (id: postLikes) => any
}