import React, {useState} from 'react';
import '../../node_modules/uikit/dist/css/uikit.min.css'
import '../../node_modules/uikit/dist/js/uikit-icons.min.js'

const AddUserForm = (props) => {

    const initUser = {id: null, name: '', username: ''};

    const [user, setUser] = useState(initUser);

    const handleChange = (e)=>{//ketika ada event perubahan saat input data
        const {name,value} = e.target;// {e.target.name,e.target.value}
        setUser({...user,[name]:value});//setUser = {[e.target.name]:e.target.value}
    }
    const handleSubmit = (e) =>{//ketika ada event men submit data
        e.preventDefault()//agar tidak me reload page
        if (user.name && user.username) {//jika name dan username ada di state user
            handleChange(e, props.addUser(user));//jalankan fungsi addUser(user). note "user adalah objek"
        }
        setUser({...user,name:'',username:''})//mengosongkan state user
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
                <div className="text-end">
                    <button type="submit" className="uk-button uk-button-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddUserForm;