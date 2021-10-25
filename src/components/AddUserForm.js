import React, {useState} from 'react';
// import { TextField } from '@fluentui/react/lib/TextField';
// import { PrimaryButton } from '@fluentui/react';
import '../../node_modules/uikit/dist/css/uikit.min.css'

const AddUserForm = (props) => {

    const initUser = {id: null, name: '', username: ''};

    const [user, setUser] = useState(initUser);

    const handleChange = (e)=>{
        const {name,value} = e.target
        setUser({...user,[name]:value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if (user.name && user.username) {
            handleChange(e, props.addUser(user));
        }
    }

    return (
        <div className="mt-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input className="uk-input" type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name"/>
                </div>
                <div className="mb-2">
                    <input className="uk-input mb-3" type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username"/>
                </div>
                <button type="submit" className="uk-button uk-button-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddUserForm;