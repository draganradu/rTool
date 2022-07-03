import { useEffect, useRef, useState } from "react";
import { db, toolDb } from "../db/config";
import { fireStoreDB } from "../db/enums";

export const useCollection = (collection: fireStoreDB, _query?: [string, string, string], _orderBy?: [string, string]) => {
    const [documents, setDocuments] = useState<toolDb[] | []>([])
    const [error, setError] = useState<string | null>(null)

    const query = useRef(_query).current
    const orderBy = useRef(_orderBy).current

    useEffect(() => {
        let ref = db.collection(collection) as any

        if (query) {
            ref = ref.where(...query)
        }
        if (orderBy) {
            ref = ref.orderBy(...orderBy)
        }

        const unsubscribe = ref.onSnapshot((snapshot: any) => {
            let results = [] as any
            snapshot.docs.forEach((doc: any) => {
                results.push({ ...doc.data(), id: doc.id })
            })

            setDocuments(results)
            setError(null)
        }, (error: any) => {

            console.log(error)
            setError('could not fetch the data')
        })

        return () => unsubscribe()
    }, [collection])

    return { documents, error }
}