import { Footer } from "../footer"
import { Header } from "../header"
import { Sidebar } from "../sidebar"

interface ContainerType {
    type?: "fixed" | "fluid",
    footer?: boolean,
    header?: boolean,
    children?: React.ReactNode,
    title?: string,
}

export const Container: React.FC<ContainerType> = (props) => {
    const { type = "fluid", footer, header, children, title = "rTools" } = props
    document.title = title;

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

export const Narrow: React.FC<{ children?: React.ReactNode, sansCard?: boolean }> = ({ children, sansCard }) => {
    return (
        <div className="form-center justify-content-center d-flex mt-4">
            {sansCard ? (
                <>{children}</>
            ) : (
                <div className="card form-a mt-5">
                    <div className="card-body">
                        {children}
                    </div>
                </div>
            )}

        </div>
    )
}