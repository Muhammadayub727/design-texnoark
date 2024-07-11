interface login{
    phone_number: string
    password: string
}

interface signup extends login{
    first_name: string
    last_name: string
    email: string
}

export interface Auth_request{
    login: (data:login) => any
    signup: (data: signup) => any
}