import _ from "lodash";
import { createContext, useEffect, useReducer } from "react";
import { auth } from "../../db/config";


//@ts-ignore
export const AuthContext = createContext()


export const authReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                sidebar: "standard",
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                sidebar: "non-user",
            }
        case 'AUTH_IS_READY':
            return {
                ...state,
                user: action.payload,
                authIsReady: true,
                sidebar: !!_.get(action, "payload.email") ? "standard" : "non-user",
            }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        authIsReady: false,
        sidebar: "non-user",
    });

    useEffect(() => {
        const unsub = auth.onAuthStateChanged((user) => {
            dispatch({ type: 'AUTH_IS_READY', payload: user })
            unsub()
        })
    }, [])

    console.log('AuthContext', state)

    return (
        <AuthContext.Provider value={{ ...state, dispatch }} >
            {children}
        </AuthContext.Provider>
    )
}