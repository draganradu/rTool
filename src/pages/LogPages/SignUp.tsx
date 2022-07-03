import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSignUp } from "../../hooks/useSignUp";

export const SignUp: React.FC<{ show?: boolean }> = ({ show = false }) => {
    const { signUp, isPending, error } = useSignUp();
    const [login, setLogin] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data: any) => {

        try {
            console.log("data login", data)
            signUp(data.email, data.password, data.displayName);
            // db.collection(fireStoreDB.test).add(data)
            setLogin(true)
        } catch {
            console.log("data not login", data)
        }

    };

    if (!show) {
        return null
    } else {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-label">Create Account</label>
                <div className="mb-3">
                    <label className="form-label">Display Name</label>
                    <input type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('displayName', { required: true })} />
                    <div id="emailHelp" className="form-text">This is your user Name</div>
                </div>
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
                <button type="submit" className="btn btn-primary">Submit</button>
                {error && <p>error: {error}</p>}
                {isPending && <p>isPending: {isPending}</p>}
            </form>
        )
    }

}
