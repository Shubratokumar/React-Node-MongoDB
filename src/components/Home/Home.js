import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/users'>Users</Link>
            <Link to='/user/add'>Add User</Link>
        </div>
    );
};

export default Home;