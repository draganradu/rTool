import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Container, Narrow } from "../components/scaffolding/container";
import { db, toolDb } from "../db/config";
import { fireStoreDB } from "../db/enums";

export const TestId: React.FC = () => {
    const { id } = useParams();

    const [data, setData] = useState<toolDb>({} as toolDb)
    const [isPendint, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsPending(true)
        const sub = db.collection(fireStoreDB.test).doc(id).onSnapshot((doc) => {
            if (doc.exists) {
                setData(doc.data() as toolDb)
            }
        })

        return () => sub()
    }, [id])

    const updateOnClick = () => {
        console.log("fire")
        db.collection(fireStoreDB.test).doc(id).update(
            { title: "Ana are mere" }
        )
    }
    return (
        <Container type="fluid">
            <Narrow>
                {Object.keys(data).map((i: any, key: number) => (
                    //@ts-ignore
                    <>{i}:{JSON.stringify(data[i])}<br /></>
                ))}

            </Narrow>
            <Narrow>
                <span onClick={() => { updateOnClick() }}>Buton</span>
            </Narrow>
        </Container>
    )
}