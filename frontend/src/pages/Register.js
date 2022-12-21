import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import apiUrl from '../APIconfig';
import axios from 'axios';




function Register(){
    const navigate = useNavigate();
    const [user, setUser] = useState({
    name:"",
    email:"",
    password:"",
})

    const [createdUser, setCreatedUser] = useState(null)

    const handleChange = (event) => {
        //created a placeholder grabbing the value from the user input form
        const updatedField = { [event.target.name] : event.target.value }
        //assigned the empty state with the updatedField into one object
        const editedUser = Object.assign(user, updatedField)
        //assigned the new object to be updated to the state
        setUser(editedUser)
      }

    const handleSubmit = (event) => {
        event.preventDefault()
    
       
        axios({
          url: `${apiUrl}/users`,
          method: 'POST',
          data: user
        }).then(res => setCreatedUser(res.data)).catch(console.error)
      }


      useEffect(() => {
        if (createdUser) {
           navigate(`/login`)
        }
      }, [createdUser, navigate])


    return(
    <div> 
        <h1>Register</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
        <label>User Name</label>
        <input
        placeholder="User Name"
        defaultValue={user.name}
        name="name"
        onChange={(e) => handleChange(e)} />

        <label>Email</label>
        <input
        placeholder="example@gmail.com"
        defaultValue={user.email}
        type="email"
        name="email"
        onChange={(e) => handleChange(e)} />

        <label>password</label>
        <input
        placeholder="Password"
        defaultValue={user.password}
        type="password"
        name="password"
        onChange={(e) => handleChange(e)} />

        <button type="submit">Submit</button>

        <Link to={"/"}>
            <button>Cancel</button>
        </Link>

    </form>
    </div>

       
    )
}

export default Register