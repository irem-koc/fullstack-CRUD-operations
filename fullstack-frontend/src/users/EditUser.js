import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {

    const {id} = useParams()
    let navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""

    })
    const { name, username, email } = user;
    const handleChange = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [key]: value })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:8080/user/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        }).then(() => {
            console.log("New user is added!");
        })
        navigate("/");
    }
    const loadUser = async() => {
        await fetch(`http://localhost:8080/user/${id}`)
            .then((request) => request.json())
            .then(response => setUser(response))
    }
    useEffect(() => {
        loadUser();
    }, [])
    
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded shadow p-4 mt-4">
                    <h2 className='text-center m-4'>
                        Edit User
                    </h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className='form-label'>Name</label>
                            <input onChange={(e) => handleChange(e)} value={name} type="text" className='form-control' name='name' placeholder='Enter your name' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Username" className='form-label'>Username</label>
                            <input onChange={(e) => handleChange(e)} value={username} type="text" className='form-control' name='username' placeholder='Enter your username' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className='form-label'>Email Address</label>
                            <input onChange={(e) => handleChange(e)} value={email} type="mail" className='form-control' name='email' placeholder='Enter your email' />
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                        <Link type='submit' className='btn btn-outline-danger mx-2' to={"/"}>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditUser