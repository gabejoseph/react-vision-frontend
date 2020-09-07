import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import LanguageIcon from "@material-ui/icons/Language"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { Link } from 'react-router-dom'
import SimpleMenu from './SimpleMenu'
import { Button } from '@material-ui/core'

function Header() {
    return (
        <div className="header" >
            <Link to='/' >
                <img 
                    className="header_icon"
                    src="https://www.creativefabrica.com/wp-content/uploads/2019/05/Silhouette-of-a-modern-city-by-AlexZel-580x387.jpg"
                    alt=""
                />
            </Link>
            <div className="header_center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className='header_right'>
                <Button >Become a host</ Button >
                <LanguageIcon />
                <ExpandMoreIcon />
                <SimpleMenu />
            </div>
        </div>

    )
}

export default Header
