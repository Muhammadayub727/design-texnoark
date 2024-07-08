import Cookies from "js-cookie"


export const saveAccessToken = (accessToken: string) => {
    Cookies.set("access_token", accessToken)
}

export const getAccessToken = () => {
    return Cookies.get("access_token")
}

export const removeAccessToken = () => {
    Cookies.remove("access_token")
}
