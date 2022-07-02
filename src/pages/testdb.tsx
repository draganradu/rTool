import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Narrow } from "../components/scaffolding/container";
import { db, toolDb } from "../db/config";

export const TestComponent: React.FC = () => {
    const [data, setData] = useState<toolDb[]>([])
    const [error, setError] = useState(false)

    useEffect(() => {
        const subscription = db.collection("toolTest").onSnapshot((snapshot) => {
            if (snapshot.empty) {
                setError(true)
            } else {
                let results: toolDb[] = []
                snapshot.docs.forEach(doc => {
                    results.push({ id: doc.id, ...doc.data() } as toolDb)
                })
                setData(results)
            }
        }, (err) => {
            setError(true)
        })

        return () => subscription()
    }, [])


    console.log(data)

    if (data.length === 0) {
        return (<>Nope</>);
    } else {
        return (
            <Container type="fluid" title="List">
                <Narrow>
                    <ul className="list-group list-group-flush">
                        {data.map((i: toolDb, key: number) => (
                            <li className="list-group-item">
                                <Link to={`/tool/${i.id}`} key={key} className="a-clean">{i.id}</Link>
                            </li>
                        ))}
                    </ul>
                </Narrow>
            </Container>
        )

    }
}