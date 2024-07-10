interface signin{
    phone_number: string
    password: string
}

interface signup extends signin{
    first_name: string
    last_name: string
    email: string
}

export interface Auth_request{
    signin: (data:signin) => any
    signup: (data: signup) => any
}