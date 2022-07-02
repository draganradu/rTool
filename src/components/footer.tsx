import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"

const Sep: React.FC = () => {
    return <span>&nbsp;|&nbsp;</span>
}

export const Footer: React.FC = () => {
    const { user } = useAuthContext() as any

    return (
        <footer className="p-2">
            {!user?.uid ? (
                <>
                    <Link to="/" className="a-clean">Login</Link>
                </>
            ) : (
                <>
                    <Link to="/list" className="a-clean">List</Link>
                    <Sep />
                    <Link to="/create" className="a-clean">Create</Link></>
            )}

        </footer>
    )
}