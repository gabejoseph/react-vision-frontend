import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import LanguageIcon from "@material-ui/icons/Language"
import { Link } from 'react-router-dom'
import SimpleMenu from '../containers/SimpleMenu'
import CreateListing from '../containers/CreateListing'

class Header extends React.Component {
    
    constructor () {
        super()

        let user = localStorage.user ? JSON.parse(localStorage.user) : ""

        this.state = {
            user: user
        }
    }

    handleClick = () => {
        
    }

    render () {
        return(
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
                {this.state.user
                ? 
                <>
                <LanguageIcon />
                <CreateListing 
                    onClick={this.handleClick}
                ></CreateListing>
                </>
                :
                <></>
                }
                <SimpleMenu />
            </div>
        </div>
        
    )}
}

export default Header
