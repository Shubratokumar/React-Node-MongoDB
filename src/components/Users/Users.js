import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => setUsers(data))
        // .then(data =>console.log(data))
    },[]);

    const handleDeleteUser = id =>{
        const proceed = window.confirm("Are you sure to delete the user?");
        if(proceed){
            console.log("deleting user id :", id);
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    console.log('Deleted :',data); 
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining);
                }
            })
        } else{
            console.log("Declined!!!")
        }        
    }
    return (
        <div>
            <h3>Current total user of foodExpress : {users.length}</h3>
            {
                users.map(user => 
                    <ul>
                        <li 
                        key={user._id}
                        >{user.name} :: {user.email}
                        <Link to={`/update/${user._id}`}><button>Update</button></Link>
                        <button onClick={()=>handleDeleteUser(user._id)}>X</button>
                        </li>
                    </ul>
                )
            }
        </div>
    );
};

export default Users;