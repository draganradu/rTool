import { Footer } from "../footer"
import { Header } from "../header"
import { Sidebar } from "../sidebar"

interface ContainerType {
    type?: "fixed" | "fluid",
    footer?: boolean,
    header?: boolean,
    children?: React.ReactNode
}

export const Container: React.FC<ContainerType> = (props) => {
    const { type = "fluid", footer, header, children } = props
    return (
        <div className="page-layout">
            <Sidebar />
            <Header />
            <div className={`grow container${type === "fixed" ? "" : "-fluid"}`}>
                <div className="row">
                    <div className="col">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export const Narrow: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <div className="form-center justify-content-center d-flex">
            {children}
        </div>
    )
}