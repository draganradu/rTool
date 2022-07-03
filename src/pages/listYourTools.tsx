import React from "react";
import { Link } from "react-router-dom";
import { Li, Ul } from "../components/list";
import { Container, Narrow } from "../components/scaffolding/container";
import { toolDb } from "../db/config";
import { fireStoreDB } from "../db/enums";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
import { useFirestare } from "../hooks/useFirestore";

export const YourToolsList: React.FC = () => {
    const { user } = useAuthContext() as any

    // const { documents, error } = useCollection(fireStoreDB.userTools, ["uid", "==", user.uid], ["a", "desc"])
    const { documents, error } = useCollection(fireStoreDB.userTools, ["uid", "==", user.uid])
    const { deleteDocument } = useFirestare(fireStoreDB.userTools)

    console.log(documents)
    return (
        <Container type="fluid" title="List your Tools">
            <Narrow>
                <Ul>
                    {error && <li>{error}</li>}
                    {documents.map((i: toolDb, key: number) => (
                        <Li key={key}>
                            <Link to={`/tool/${i.id}`} className="a-clean">{i.id}</Link>
                            <i className="bi bi-file-x" onClick={() => {
                                 deleteDocument(i.id)
                                console.log(i.id)
                            }} />
                        </Li>
                    ))}
                    {documents.length === 0 ? (
                        <Li>
                            0 items found, let`s a one from our list
                            <i className="bi bi-file-plus" />
                        </Li>
                    ) : <Li>
                        <Link to={"/t/add/"} className="a-clean">
                            <i className="bi bi-file-plus" /> AddTool
                        </Link>
                    </Li>
                    }
                </Ul>
            </Narrow>
        </Container>
    )

}