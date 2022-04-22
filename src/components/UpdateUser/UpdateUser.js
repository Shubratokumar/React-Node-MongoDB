import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [id])

    const handleUpdateUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const updatedUser = {name, email};

        // send data to the server
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
        .then(res => res.json())
        .then(data =>{
            console.log('Success', data);
            alert("User updated successfully !!!");
            // reset the form value or input
            event.target.reset()
        })
    }
    return (
        <div>
            <h2>Updating user name : {user.name}</h2>
            <h2>Updating user email : {user.email}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name='name' placeholder='Name' required />
                <br />
                <input type="email" name='email' placeholder='Email' required />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUser;