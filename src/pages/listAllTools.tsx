import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Li, Ul } from "../components/list";
import { Container, Narrow } from "../components/scaffolding/container";
import { toolDb } from "../db/config";
import { fireStoreDB } from "../db/enums";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
import { useFirestare } from "../hooks/useFirestore";

export const AllToolsList: React.FC = () => {
    const { documents, error } = useCollection(fireStoreDB.allTools)
    const { addDocument, response } = useFirestare(fireStoreDB.userTools)

    const { user } = useAuthContext() as any
    const navigate = useNavigate(); 
    
    return (
        <Container type="fluid" title="List All tools">
            <Narrow>
                <Ul>
                    {error && <li>{error}</li>}
                    {documents.map((i: toolDb, key: number) => (
                        <Li>
                            <Link to={`/tool/${i.id}`} key={key} className="a-clean">{i.id}</Link>
                            <i className="bi bi-file-plus" onClick={()=> {
                                navigate("/t/tool/")
                                addDocument({
                                    toolName: "radu",
                                    description: "super",
                                    refTool: i.id,
                                    uid: user.uid
                                });
                            }}/>
                        </Li>
                    ))}
                    {documents.length === 0 && (
                        <li className="list-group-item">0 items found, let`s a one from our list <i className="bi bi-file-plus"/></li>
                    )}
                </Ul>
            </Narrow>
        </Container>
    )

}