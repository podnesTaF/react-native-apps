import axios from "axios";

const API_KEY = process.env.API_KEY;

export const authenticate = async (mode, email, password) => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`

    const {data} = await axios.post(url, {
        email,
        password,
        returnSecureToken: true
    })

    return data.idToken
}

export const createUser = (email, password) => {
    return authenticate('signUp', email, password)
}

export const loginUser = (email, password) => {
    return authenticate('signInWithPassword', email, password)
}