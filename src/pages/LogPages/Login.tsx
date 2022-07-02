import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "../../hooks/useLogin";

export const LoginForm: React.FC<{ show?: boolean }> = ({ show = false }) => {
    const { login, error, isPending } = useLogin();
    // const [login, setLogin] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data: any) => {

        try {
            login(data.email, data.password)
            console.log("data login", data)
            // db.collection("toolTest").add(data)
            // setLogin(true)
        } catch {
            console.log("data not login", data)
        }

    };

    if (!show) {
        return null
    } else {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('email', { required: true })} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" {...register('password', { required: true })} />
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label">Check me out</label>
                </div> */}

                {isPending ? 
                    <button type="submit" disabled className="btn btn-primary">Submit</button> : 
                    <button type="submit" className="btn btn-primary">Submit</button> }
                {error && (<>{error}</>)}
            </form>
        )
    }

}
