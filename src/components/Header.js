import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"

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
        </div>

    )
}

export default Header
