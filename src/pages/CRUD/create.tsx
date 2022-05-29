import { useForm } from 'react-hook-form';

export const Create: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data:any) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First</label><br/>
            <input {...register('firstName')} /><br/>

            <label>Last</label><br/>
            <input {...register('lastName', { required: true })} /><br/>
            {errors.lastName && <p>Last name is required.</p>}

            <label>Age</label><br/>
            <input {...register('age', { pattern: /\d+/ })} /><br/>
            {errors.age && <p>Please enter number for age.</p>}
            <input type="submit" />
        </form>
    )
}