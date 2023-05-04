import {createContext, useEffect, useState} from "react";
import {loginUser} from "../util/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
    token: null,
    isAuth: false,
    login: (token, userId, tokenExpiration) => {},
    logout: () => {}
})

export const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState(null)

    const login = async (token) => {
        AsyncStorage.setItem('token', token)
        setToken(token)
    }

    const logout = () => {
        setToken(null)
        AsyncStorage.removeItem('token')
    }

    const value = {
        token,
        isAuth: !!token,
        logout,
        login
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}