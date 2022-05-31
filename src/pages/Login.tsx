import { useState } from "react"
import { Container, Narrow } from "../components/scaffolding/container"

enum LoginState {
    "LoginForm",
    "ResetPass",
    "CreateAccount",
}

const LoginForm: React.FC<{ show?: boolean }> = ({ show = false }) => {
    if (!show) {
        return null
    } else {
        return (
            <form>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }

}

const ResetPass: React.FC<{ show?: boolean }> = ({ show = false }) => {
    if (!show) {
        return null
    } else {
        return (
            <form>
                <div className="mb-3">
                    <label className="form-label">Reset Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>


                <button type="submit" className="btn btn-primary">Reset</button>
            </form>
        )
    }
}

const CreateAccount: React.FC<{ show?: boolean }> = ({ show = false }) => {
    if (!show) {
        return null
    } else {
        return (<>CreateAccount</>)
    }
}

export const Login: React.FC = () => {
    const [pageState, setPageState] = useState<LoginState>(LoginState.LoginForm)

    return (
        <Container type="fluid">
            <Narrow>
                <div className="card form-a mt-5">
                    <div className="card-body">
                        <LoginForm show={pageState === LoginState.LoginForm} />
                        <ResetPass show={pageState === LoginState.ResetPass} />
                        <CreateAccount show={pageState === LoginState.CreateAccount} />
                    </div>
                </div>
            </Narrow>
            <Narrow>
                <span onClick={() => { setPageState(LoginState.LoginForm) }}>Login</span>
                &nbsp;|&nbsp;
                <span onClick={() => { setPageState(LoginState.ResetPass) }}>ResetPass</span>
                &nbsp;|&nbsp;
                <span onClick={() => { setPageState(LoginState.CreateAccount) }}>CreateAccount</span>
            </Narrow>

        </Container>
    )
}