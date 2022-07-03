import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Narrow } from "../components/scaffolding/container";
import { db, toolDb } from "../db/config";
import { fireStoreDB } from "../db/enums";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFirestare } from "../hooks/useFirestore";

export const TestComponent: React.FC = () => {
    const [data, setData] = useState<toolDb[]>([])
    const [error, setError] = useState(false)

    const { user } = useAuthContext() as any
    const { addDocument, response } = useFirestare(fireStoreDB.allTools)

    useEffect(() => {
        const subscription = db.collection(fireStoreDB.test).onSnapshot((snapshot) => {
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

    useEffect( () => {
        if(response.success) {
            //clearForm
        }
    }, [response.success])

    console.log(data)

    if (data.length === 0) {
        return (<>Nope</>);
    } else {
        return (
            <Container type="fluid" title="List">
                <Narrow>
                    <hr />
                    <ul className="list-group list-group-flush">
                        {data.map((i: toolDb, key: number) => (
                            <li className="list-group-item">
                                <Link to={`/tool/${i.id}`} key={key} className="a-clean">{i.id}</Link>
                            </li>
                        ))}
                    </ul>
                </Narrow>

                <Narrow>
                    <h2 onClick={() => {
                        addDocument({
                            toolName: "radu",
                            description: "super",
                            uid: user.uid
                        });
                        console.log("x1s");
                        }
                    }>AddItem</h2>

                </Narrow>
            </Container>
        )

    }
}