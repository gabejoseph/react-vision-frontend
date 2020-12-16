import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux'
import { listingActions } from '../actions/listing.actions'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { Link } from 'react-router-dom'
import { userActions } from '../actions/user.actions';

class ListingMenu extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null
    }

    // this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    // this.handleLogout = this.handleLogout.bind(this)
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

  render() {

    const local = localStorage

    return (
      <div>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => this.handleClick(event)}>
              <ExpandMoreIcon />
          </Button>
          <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={() => this.handleClose()}
          >
             {local.user 
             ? 
             <Link to='newListing'><MenuItem onClick={() => this.handleClose()}>New Listing</MenuItem></Link> 
             :
             <></>
             }
          </Menu>
      </div>
    );
  }
}

const actionCreators = {
    // login: userActions.login,
    // logout: userActions.logout
    createListing: listingActions.createListing
};

export default connect(null, actionCreators)(ListingMenu)
