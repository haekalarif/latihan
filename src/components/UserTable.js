import '../../node_modules/uikit/dist/css/uikit.min.css'


const UserTable = (props) =>{
    const userList = props.users; //data users didalam state users
    const deleteUser = props.deleteUser //fungsi deleteUser()
    const editUser = props.editUser //fungsi editUser()
    return(
        <div className="uk-overflow-auto">
            <table className="uk-table uk-table-divider">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList.map((user)=>(
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td className="text-center">
                                        <button type="submit" onClick={()=>deleteUser(user.id)} className="uk-button uk-button-danger uk-button-small mx-1">Delete</button>
                                        {/*ambil id*/}
                                        <button type="submit" onClick={()=>editUser(user.id,user)} className="uk-button uk-button-primary uk-button-small mx-1">Edit</button>
                                        {/*ambil id dan objek usernya*/}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
            </table>
        </div>
    )
}


export default UserTable
