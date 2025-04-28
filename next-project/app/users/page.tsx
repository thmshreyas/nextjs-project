import React from 'react';
interface user{
    id:number;
    name:string;
}

const UsersPage = async() => {
    const res= await fetch('https://jsonplaceholder.typicode.com/users');
    const users:user[]= await res.json();
  return (
    <>
    <h1>Users</h1>
    <ul>
         {
            users.map(user=><li key={user.id}>{user.name}</li>)
         }    
    </ul>
    </>
        )
}

export default UsersPage;