import { useState } from "react"
import { auth } from "../db/config";
import { useAuthContext } from "./useAuthContext";

export const useSignUp = () => {
    const [error, setError] = useState<string | false>(false);
    const [isPending, setIsPending] = useState<boolean>(false);
    const { dispatch } = useAuthContext() as any;

    const signUp = async (email: string, password: string, displayName: string) => {
        setError(false)
        setIsPending(true)


        try {
            const res = await auth.createUserWithEmailAndPassword(email, password);
            // console.log(res, email, password, displayName)

            if (!res) {
                throw new Error('Could not signUP')
            }

            await res.user?.updateProfile({ displayName })

            // dispatch login login action
            dispatch({ type: 'LOGIN', payload: res.user })

            setIsPending(false)
            setError(false)
        } catch (err) {
            //@ts-ignore
            const errorMessage = err?.message
            setError(errorMessage)
            console.log(error)
            setIsPending(false)
        }
    }

    return { error, isPending, signUp }
}