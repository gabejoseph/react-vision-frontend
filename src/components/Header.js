import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import LanguageIcon from "@material-ui/icons/Language"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { Avatar } from "@material-ui/core"

function Header() {
    return (
        <div className="header" >
            <img 
                className="header_icon"
                src="https://allpointsco.com/apm/wp-content/uploads/2016/09/icon-sight.png"
                alt=""
            />
            <div className="header_center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className='header_right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>

    )
}

export default Header
