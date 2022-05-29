import { useState } from 'react';
import { useForm } from 'react-hook-form';
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
    if(saved) {
        return (<>Saved</>)
    } else {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>First</label><br />
                <input {...register('firstName')} /><br />
    
                <label>Last</label><br />
                <input {...register('lastName', { required: true })} /><br />
                {errors.lastName && <p>Last name is required.</p>}
    
                <label>Age</label><br />
                <input {...register('age', { pattern: /\d+/ })} /><br />
                {errors.age && <p>Please enter number for age.</p>}
                <input type="submit" />
            </form>
        )
    }

}