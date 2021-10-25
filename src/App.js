import './App.css';
import UserList from './components/UserList'
import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'office-ui-fabric-core/dist/css/fabric.css'
import { Text } from '@fluentui/react';
import { useEffect, useState } from 'react';
import EditUserForm from './components/EditUserForm';


function App() {
  const axios = require('axios');

  const [users,setUsers] = useState(UserList);

  const initialUser = {id: null, name: '', username: ''};

  const [currentUser, setCurrentUser] = useState(initialUser);
  
  const [editing, setEditing] = useState(false);

  const addUser = (user) => { //add user
    user.id = users.length + 1; //user.id = null + jumlah array saat ini
    // console.log(user)
    setUsers([...users, user]); //masukkan objek user baru ke state users
  }
  // console.log(users);
const deleteUser =(id)=>{//id adalah hasil pasing dari UserTable
    // console.log(id);
    setUsers(users.filter(user => user.id !== id ))//filter data user.id yang tidak sesuai dengan id paramter lalu simpan kedalam users
  }

  const editUser = (id,user) => {
    // console.log(user)

    setEditing(true);//ubah menjadi true agar menampilkan form ubah input

    setCurrentUser(user);
  }

  const updateUser = (newUser) => {
    const newData = newUser; //objek data user baru update
    setUsers(users.map(user => (user.id === currentUser.id ? newData : user)))//jika data user.id yang berada didalam users memiliki id yang sama dengan data.id yang ada didalam currentUser maka update datanya 
  }

  useEffect(()=>{//ketika komponen telah dirender
    axios.get('https://jsonplaceholder.typicode.com/users/')//fetch api objek json
    .then(function (response){
      // console.log(response)
      const sourceData = response.data;//fetch objek data yang ada didalam 

      setUsers(sourceData);//isi state users menggunakan data hasil fetch
    })
    .catch(function (error){//jika error
      console.log(error)
    })
  },[])
  return (
    <div className="app">
      <div className="container">
        <div class="ms-Grid" dir="ltr">
          <div class="ms-Grid-row">
            <div class="ms-Grid-col ms-lg5 ms-md12 ms-sm12">
              {
                editing ? (//jika button edit ditekan
                  <div>
                      <Text className="ms-fontSize-42">Edit User</Text>
                      <EditUserForm
                        currentUser={currentUser} //objek currentUser hasil pasing
                        setEditing={setEditing}
                        updateUser={updateUser} //fungsi updateUser
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
            <div class="ms-Grid-col ms-lg7 ms-md12 ms-sm12">
                <Text className="ms-fontSize-42">View User</Text>
                <UserTable users={users} deleteUser={deleteUser} editUser={editUser}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
