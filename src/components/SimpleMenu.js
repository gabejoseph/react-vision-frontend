import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Avatar } from "@material-ui/core"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from '../containers/Login';


class SimpleMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null
    }

  }

  handleClick(event) {
    this.setState({
      anchorEl: event.currentTarget
    })
  }

  handleClose() {
    this.setState({
      anchorEl: null
    })
  };

  handleLogout() {
    this.props.logout();
  }


  render() {
    const user = JSON.parse(localStorage.user)

    return (
      <div>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => this.handleClick}>
              <Avatar />
          </Button>
          <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={() => this.handleClose}
          >
            {user ? <MenuItem onClick={() => this.handleLogout}>Logout</MenuItem> : 
              <>
                <Link to='/login' ><MenuItem onClick={() => this.handleClose}>Login</MenuItem></Link>
                <MenuItem onClick={() => this.handleLogout}>Logout</MenuItem>   
              </>
            }
          </Menu>
      </div>
    );
  }
}

export default SimpleMenu