import { Link } from "react-router-dom"

const Sep: React.FC = () => {
    return <span>&nbsp;|&nbsp;</span>
}

export const Footer: React.FC = () => {
    return (
        <footer className="p-2">
            <Link to="/" className="a-clean">Login</Link> 
            <Sep />
            <Link to="/list" className="a-clean">List</Link> 
            <Sep />
            <Link to="/create" className="a-clean">Create</Link> 
        </footer>
    )
}