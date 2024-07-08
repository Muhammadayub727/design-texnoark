interface Login{
    phone_number: string
    password: string
}

interface Register extends Login{
    first_name: string
    last_name: string
    email: string
}

export interface Auth_request{
    Login: (data:Login) => any
    Register: (data: Register) => any
}