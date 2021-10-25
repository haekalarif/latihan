
import { useEffect, useState } from 'react'
import TodoItem from  './TodoItem'
const TodoList = (props) => {

    const userContact = {id:null,name:"",phone:""};
    const [contact,setContact] = useState(userContact);
    const addContact = contact => {
        contact.id = contact.length + 1;
        setContact([...contact, contact]);
      }

    function changeHandler(e){
        const { name, value } = e.target

        setContact({ ...contact, [name]: value })
    }
    function submitHandler(e){
        e.preventDefault();
        if (contact.name && contact.phone) {
            changeHandler(e,addContact(contact));
         }

    }

    return (    
        <div className="form">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header">Contact</div>
                            <div className="card-body">
                                <form onSubmit={submitHandler}>
                                    <div className="mb-3">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" name="name" onChange={changeHandler} value={contact.name}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="text" className="form-control" name="phone" onChange={changeHandler} value={contact.phone}/>
                                    </div>
                                    <div className="mb-3">
                                        <div className="d-grid gap-2">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <TodoItem users={contact}/>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default TodoList