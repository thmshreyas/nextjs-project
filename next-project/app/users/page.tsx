import React from 'react';
interface user{
    id:number;
    name:string;
}

const UsersPage = async() => {
    const res= await fetch('https://jsonplaceholder.typicode.com/users',{next:{revalidate:10}});
    const users:user[]= await res.json();
  return (
    <>
    <h1>Users</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    <table className='table table-zebra'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>{
            users.map(user=><tr key={user.id}><th>{user.name}</th>
            <th>{user.name} </th></tr>)
         }</tbody>
             
    </table>
    </>
        )
}

export default UsersPage;