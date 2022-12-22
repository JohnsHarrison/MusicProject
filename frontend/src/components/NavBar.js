import { NavLink } from "react-router-dom"

function NavBar(){
    return(
         <div className="NavBar">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={'/register'}k>Register</NavLink>
            <NavLink to={'Login'}>Login</NavLink>

            
         </div>
    )
}

export default NavBar