import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import './sidebar.scss';


export const Sidebar: React.FC<{ comp?: string }> = ({ comp }) => {
    
    const { logout } = useLogout()
    const { sidebar } = useAuthContext() as any

    switch (sidebar) {
        case "standard":
            return <div id="side-bar">
                <span onClick={() => { logout() }}>
                    <i className="bi bi-file-minus"></i>
                </span>
            </div>

        default:
            return <div id="side-bar">
                <span>
                    <i className="bi bi-file-person"></i>
                </span>
            </div>
    }

} 