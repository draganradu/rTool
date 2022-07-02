import { useState } from "react";
import { auth } from "../db/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState<string | false>(false);
    const [isPending, setIsPending] = useState<boolean>(false);
    const { dispatch } = useAuthContext() as any;

    const login = async (email: string, password: string) => {
        setError(false)
        setIsPending(true)

        try {
            const res = await auth.signInWithEmailAndPassword(email, password)
            dispatch({ type: 'LOGIN', payload: res.user })
            setError(false)
            setIsPending(false)
        } catch (err) {
            //@ts-ignore
            const errorMessage = err?.message
            setError(errorMessage)
            console.log(error)
            setIsPending(false)
        }
    }

    return { error, isPending, login }
}