import React from "react"
import {NavLink} from 'react-router-dom'

const Header = () => {
    return(
        <div>
            <h1>Favorite authors</h1>
            <NavLink to="/" className="m-3" end>Home</NavLink>
            <NavLink to="/new" end>Add an author</NavLink>
        </div>
    )
}

export default Header