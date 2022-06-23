import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
      setUsers(response.data);
      
    },[]);

  });
  return (
    <div className=''>
      <h1>Home page</h1>
      <div>
        <table className='table table-stripped'>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            {users.map((user)=>
            <tr>
                <td>{user.email}</td>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td><Link to={`/user/${user.id}`} className='btn btn-dark m-2'>View</Link>
                  <Link to={`/edit/${user.id}`} className='btn btn-primary m-2'>Edit</Link>
                <Link to={`/delete/${user.id}`} className='btn btn-danger m-2'>Delete</Link></td>
              </tr>
            )}
        </table>
      </div>
    </div>
  )
}

export default Home
