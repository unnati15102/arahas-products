import React from 'react'
import "./header.css"
import Avatar from '@mui/material/Avatar';
import ComapanyLogo from "./image/logo.webp"

const Header = () => {
  return (
    <>
    <header>
        <nav>
        <img src={ComapanyLogo} alt="Arhas Technologies Logo" className="logo" />
            <Avatar style={{background:"orange"}}>H</Avatar>
        </nav>
    </header>
      
    </>
  )
}

export default Header
