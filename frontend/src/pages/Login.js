import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import apiUrl from '../APIconfig';
import axios from 'axios';



function Login(){
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email:"",
        password:"",
    })

    const [loggedIn,SetLoggedIn] = useState(null)

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
          url: `${apiUrl}/login`,
          method: 'POST',
          data: user
        }).then(res => SetLoggedIn(res.data.user)).catch(console.error)
      }

      useEffect(() => {
        if (loggedIn) {
           navigate(`/`)
        }
      }, [loggedIn, navigate])

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
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

export default Login