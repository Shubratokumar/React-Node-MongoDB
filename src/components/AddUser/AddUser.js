import React from 'react';

const AddUser = () => {

    const handleFormSubmit = (event) =>{
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = {name, email};

        // send data to the server
        fetch('http://localhost:5000/user', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json())
        .then(data =>{
            console.log('Success', data);
            alert("User added successfully !!!");
            // reset the form value or input
            event.target.reset()
        })

    }
    return (
        <div>
            <h1>Adding users from Client side to DB.</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name='name' placeholder='Name' required />
                <br />
                <input type="email" name='email' placeholder='Email' required />
                <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;