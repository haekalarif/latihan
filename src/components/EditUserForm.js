import React, {useState} from 'react';
import '../../node_modules/uikit/dist/css/uikit.min.css'

const EditUserForm = (props) => {


    const [user, setUser] = useState(props.currentUser);

    const handleChange = (e)=>{
        const {name,value} = e.target
        setUser({...user,[name]:value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if (user.name && user.username)props.updateUser(user)
        props.setEditing(false)

    }

    return (
        <div className="mt-5">
            <form onSubmit={handleSubmit}>
                <input className="uk-input mb-4" type="text" name="name" value={user.name} onChange={handleChange} />
                <input className="uk-input mb-3" type="text" name="username" value={user.username} onChange={handleChange} />
                <button className="uk-button uk-button-primary mx-1" type="submit" onClick={handleSubmit} >Edit user</button>
                <button className="uk-button uk-button-secondary mx-1" type="submit" onClick={() => props.setEditing(false)}  >Cancel</button>
            </form>
        </div>
    )
}

export default EditUserForm;