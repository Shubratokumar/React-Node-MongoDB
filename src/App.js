import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import Home from './components/Home/Home';
import UpdateUser from './components/UpdateUser/UpdateUser';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/users' element={<Users></Users>}></Route>
        <Route path='/user/add' element={<AddUser></AddUser>} ></Route>
        <Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
