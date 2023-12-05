import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/users")
            .then((request) => request.json())
            .then(response => setUsers(response))
    }, [users])
    const handleDelete = async(id) =>{
            await fetch(`http://localhost:8080/user/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(() => {
                console.log("User is deleted!");
            })
            navigate("/");
    }
    return (
        <div className='container'>
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) =>
                            (<tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td><Link to={`/viewuser/${user.id}`} className='btn btn-primary mx-2'>
                                    View</Link>
                                    <Link to={`/edituser/${user.id}`} className='btn btn-outline-primary mx-2'>
                                        Edit</Link>
                                    <button onClick={() => handleDelete(user.id)} className='btn btn-danger mx-2'>
                                        Delete</button></td>
                            </tr>)
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home