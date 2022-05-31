import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Container, Narrow } from "../components/scaffolding/container";
import { db, toolDb } from "../db/config";

export const TestId: React.FC = () => {
    const { id } = useParams();

    const [data, setData] = useState<toolDb>({} as toolDb)
    const [isPendint, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsPending(true)
        db.collection("toolTest").doc(id).get().then((doc) => {
            if (doc.exists) {
                setData(doc.data() as toolDb)
            }

        }).catch(err => {
            setError(true)
            setIsPending(false)
        })
    }, [id])

    return (
        <Container type="fluid">
            <Narrow>
                {Object.keys(data).map((i: any, key: number) => (
                    //@ts-ignore
                <>{i}:{JSON.stringify(data[i])}<br /></>
                ))}
            </Narrow>
        </Container>
    )
}