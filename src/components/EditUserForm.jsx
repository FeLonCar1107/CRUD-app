import React from "react";
import { useForm } from 'react-hook-form'

const EditUserForm = (props) => {

    const {register, formState: {errors}, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    const onSubmit = (data, e) => {
        console.log(data);

        props.updateUser(props.currentUser.id, data)

        //clean data
        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" {...register('name', {
                required: true,
                maxLength: 10
            })}/>
            <div>
                {errors.name?.type === 'required' && <p>Campo Requerido</p>}
                {errors.name?.type === 'maxLength' && <p>El nombre no puede ser mayor a 10 caracteres</p>}
            </div>
            <label>Username</label>
            <input type="text" {...register('username', {
                required: true,
                maxLength: 10,
            })}/>
            <div>
                {errors.username?.type === 'required' && <p>Campo Requerido</p>}
                {errors.username?.type === 'maxLength' && <p>El nombre no puede ser mayor a 10 caracteres</p>}
            </div>
            <button>Edit the User</button>
        </form>
    );
}
export default EditUserForm;