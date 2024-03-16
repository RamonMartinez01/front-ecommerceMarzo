import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth"

const FormRegister = () => {

    const { register, handleSubmit, reset } = useForm()

    const { registerUser } = useAuth() 

    const submit = data => {
        registerUser(data)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label >
                <span>First Name</span>
                <input {...register('firstName')} type="text" />
            </label>
            <label>
                <span>Last Name</span>
                <input {...register('lastName')} type="text" />
            </label>
            <label>
                <span>Email</span>
                <input {...register('email')} type="text" />
            </label>
            <label>
                <span>Password</span>
                <input {...register('password')} type="text" />
            </label>
            <label>
                <span>Phone</span>
                <input {...register('phone')} type="text" />
            </label>
            <button >Rregister</button>
        </form>
    )
}

export default FormRegister