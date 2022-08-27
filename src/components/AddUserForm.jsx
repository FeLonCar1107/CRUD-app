import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {

    const {register, formState: {errors}, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        console.log(data)

        props.addUser(data)

        // clear data
        e.target.reset();
    }

    return(
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
            <button>Add New User</button>
        </form>
    );
}
export default AddUserForm;