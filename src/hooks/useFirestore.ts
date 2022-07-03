import { useReducer, useEffect, useState } from "react";
import { db, timestamp } from "../db/config";


interface stateType {
    document: any,
    isPending: boolean,
    error: string | null,
    success: boolean | null
}

let initialState: stateType = {
    document: null,
    isPending: false,
    error: null,
    success: null,
}

const firestoreReducer = (state: stateType, action: any) => {
    switch (action.type) {
        case 'IS_PENDING':
            return { isPending: true, document: null, success: false }
        case 'ADDED_DOCUMENT':
            return { isPending: false, document: action.payload, error: null, success: true }
        case 'Error':
            return { isPending: false, document: null, error: action.payload }
        case 'DELETE_DOCUMENT': {
            return { isPending: false, document: null, error: null, success: true }
        }
        default:
            return state;
    }
}


export const useFirestare = (collection: any) => {
    //@ts-ignore
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    const [isCancelled, setIsCancelled] = useState(false);

    // collection ref
    const ref = db.collection(collection)

    // only dispatch is not cancelled 
    const dispatchIfNotCancelled = (action: any) => {
        if (!isCancelled) {
            //@ts-ignore
            dispatch(action)
        }
    }

    // add document
    const addDocument = async (doc: any) => {
        try {
            const createdAt = timestamp.fromDate(new Date());
            const addedDocument = await ref.add({ ...doc, createdAt })
            dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument })
            console.log("Y")
        } catch (error: any) {
            
            dispatchIfNotCancelled({ type: 'ERROR', payload: error.message })
            console.log("N", error)
        }
    }

    // delete document

    const deleteDocument = async (id: string) => {
        //@ts-ignore
        dispatch({ type: 'IS_PENDING' })

        try {
            const deleteDocument = await ref.doc(id).delete()
            dispatchIfNotCancelled({ type: 'DELETE_DOCUMENT' })
        } catch (error: any) {
            dispatchIfNotCancelled({ type: 'ERROR', payload: 'could not delete' })
        }
    }


    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { addDocument,  deleteDocument, response }
}