import './App.css';
import UserList from './components/UserList'
import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'office-ui-fabric-core/dist/css/fabric.css'
import { Text } from '@fluentui/react';
import { useState } from 'react';
import EditUserForm from './components/EditUserForm';


function App() {

  const [users,setUsers] = useState(UserList);

  const initialUser = {id: null, name: '', username: ''};

  const [currentUser, setCurrentUser] = useState(initialUser);
  
  const [editing, setEditing] = useState(false);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  const deleteUser =(id)=>{
    setUsers(users.filter(user => user.id !== id ))
  }

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  }
  const updateUser = (newUser) => {
    setUsers(users.map(user => (user.id === currentUser.id ? newUser : user)))
  }
  return (
    <div className="app">
      <div className="container">
        <div class="ms-Grid" dir="ltr">
          <div class="ms-Grid-row">
            <div class="ms-Grid-col ms-lg6">
              {
                editing ? (
                  <div>
                      <Text className="ms-fontSize-42">Edit User</Text>
                      <EditUserForm
                        currentUser={currentUser}
                        setEditing={setEditing}
                        updateUser={updateUser}
                      />
                  </div>
                ):(
                  <div>
                    <Text  className="ms-fontSize-42">Add User</Text>
                    <AddUserForm addUser={addUser} />
                  </div>
                )
              }
            </div>
            <div class="ms-Grid-col ms-lg6">
                <Text className="ms-fontSize-42">View User</Text>
                <UserTable users={users} deleteUser={deleteUser} editUser={editUser}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="todo">
    //   <div className="container">
    //     <h1 className="text-center mb-5">CRUD React App With Hooks</h1>
    //     <div className="row">
    //       <div className="col-lg-7">
    //         {
    //           editing ? (
    //             <div>
    //                 <h2>Edit User</h2>
    //                 <EditUserForm
    //                   currentUser={currentUser}
    //                   setEditing={setEditing}
    //                   updateUser={updateUser}
    //                 />
    //             </div>
    //           ):(
    //             <div>
    //               <h2>Add User</h2>
    //               <AddUserForm addUser={addUser} />
    //             </div>
    //           )
    //         }
    //       </div>
    //       <div className="col-lg-5">
    //         <h2>View User</h2>
    //         <UserTable users={users} deleteUser={deleteUser} editUser={editUser}/>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
