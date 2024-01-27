import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import Avatar from '@mui/material/Avatar';
import ComapanyLogo from "./image/logo.webp"

const Header = () => {
  return (
    <>
      <header>
        <nav className='nav-ul'>
          <img src={ComapanyLogo} alt="Arhas Technologies Logo" className="logo" />
          <ul>
            <li> <Link to='/dashboard'> Our Products </Link></li>
            <li> <Link to='/'> Logout </Link></li>
            <li> <Link to='/profile'> Profile </Link></li>
          </ul>
          <Avatar style={{ background: "orange" }}>H</Avatar>
        </nav>
      </header>
    </>
  )
}

export default Header
