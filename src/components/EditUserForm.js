import React, {useState} from 'react';
import '../../node_modules/uikit/dist/css/uikit.min.css'

const EditUserForm = (props) => {

    let userData = props.currentUser;//data objek user
    const [user, setUser] = useState(userData);
    
    // console.log(user)

    const handleChange = (e)=>{ //ketika ada event perubahan saat input data
        const {name,value} = e.target; //{e.target.name,e.target.value}
        setUser({...user,[name]:value});//setUser = {[e.target.name]:e.target.value}
    }
    const handleSubmit = (e) =>{//ketika ada event meng update dat
        e.preventDefault();//agar tidak reload
        if (user.name && user.username)props.updateUser(user);// jika name dan username ada didalam state user maka jalankan fungsi updateUser dengan parameter objek user yang sudah dirubah
        props.setEditing(false);//ubah nilai editing menjadi false

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