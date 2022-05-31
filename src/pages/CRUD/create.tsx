import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Narrow } from '../../components/scaffolding/container';
import { db } from '../../db/config'

export const Create: React.FC = () => {
    const [saved, setSaved] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data: any) => {

        try {
            console.log("data saved", data)
            db.collection("toolTest").add(data)
            setSaved(true)
        } catch {
            console.log("data not saved", data)
        }

    };
    if (saved) {
        return (<>Saved</>)
    } else {
        return (
            <Container type="fluid">
                <Narrow>
                    <div className="card form-a mt-5">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label className="form-label">First</label>
                                    <input className="form-control" {...register('firstName')} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Last</label>
                                    <input className="form-control" {...register('lastName', { required: true })} />
                                    {errors.lastName && <p>Last name is required.</p>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Age</label>
                                    <input className="form-control" {...register('age', { pattern: /\d+/ })} />
                                    {errors.age && <p>Please enter number for age.</p>}
                                </div>
                                <button type="submit" className="btn btn-primary mt-1">Submit</button>
                            </form>
                        </div>
                    </div>
                </Narrow>
            </Container>

        )
    }

}