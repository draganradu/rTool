import { useState } from "react";
import { auth } from "../db/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const [error, setError] = useState<string | false>(false);
    const [isPending, setIsPending] = useState<boolean>(false);
    const { dispatch } = useAuthContext() as any;

    const logout = async () => {
        setError(false)
        setIsPending(true)

        try {
            await auth.signOut()
            dispatch({ type: 'LOGOUT' })
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

    return { error, isPending, logout }
}