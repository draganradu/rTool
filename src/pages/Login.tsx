import { useState } from "react"
import { useForm } from "react-hook-form";
import { Container, Narrow } from "../components/scaffolding/container"
import { db } from "../db/config";
import { SignUp } from "./LogPages/SignUp";
import { LoginForm } from "./LogPages/Login";
import { useAuthContext } from "../hooks/useAuthContext";

enum LoginState {
    "LoginForm",
    "ResetPass",
    "CreateAccount",
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

export const Login: React.FC = () => {
    const [pageState, setPageState] = useState<LoginState>(LoginState.LoginForm)
    const { user } = useAuthContext() as any

    if (user) {
        return (
            <Container type="fluid" title={`logged in as ${user.displayName}`}>
                <Narrow>
                    We are logged in {user.displayName}
                </Narrow>
            </Container>
        )
    } else {
        return (
            <Container type="fluid" title="Login">
                <Narrow>

                    <LoginForm show={pageState === LoginState.LoginForm} />
                    <ResetPass show={pageState === LoginState.ResetPass} />
                    <SignUp show={pageState === LoginState.CreateAccount} />

                </Narrow>
                <Narrow sansCard>
                    <span onClick={() => { setPageState(LoginState.LoginForm) }}>Login</span>
                    &nbsp;|&nbsp;
                    <span onClick={() => { setPageState(LoginState.ResetPass) }}>ResetPass</span>
                    &nbsp;|&nbsp;
                    <span onClick={() => { setPageState(LoginState.CreateAccount) }}>CreateAccount</span>
                </Narrow>

            </Container>
        )
    }

}