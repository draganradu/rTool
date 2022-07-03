import "./list.scss";

export const Ul: React.FC<{ children?: React.ReactNode }> = (prop) => {
    return (<ul className="list-group list-group-flush">{prop.children}</ul>)
}

export const Li: React.FC<{ children?: React.ReactNode }> = (prop) => {
    return (<li className="list-group-item d-flex">{prop.children}</li>)
}
