import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { listingActions } from '../actions/listing.actions';

class Login extends React.Component {

    constructor(props) {
        super(props);

        // reset login status

        this.state = {
            img: '',
            location: '',
            title: '',
            description: '',
            price: ''
        };

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.setState({ submitted: true });
        const { img, location, title, description, price } = this.state;
        const user_id = JSON.parse(localStorage.user).user.id
        const listing = {img, location, title, description, price, user_id}
        if (user_id && img && location && title && description && price) {
            this.props.createListing(listing)
            this.props.history.push('/');
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { img, location, title, description, star, price, submitted } = this.state;
        return (
            <div>
                <h2>New Listing</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !img ? ' has-error' : '')}>
                        <TextField type="text" label="Img" htmlFor="img" className="form-control" name="img" value={img} onChange={this.handleChange} />
                        {submitted && !img &&
                            <div className="help-block">An Image URL is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !location ? ' has-error' : '')}>
                        <TextField type="text" htmlFor="location" label="Location" className="form-control" name="location" value={location} onChange={this.handleChange} />
                        {submitted && !location &&
                            <div className="help-block">Location is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !title ? ' has-error' : '')}>
                        <TextField type="text" htmlFor="title" label="Title" className="form-control" name="title" value={title} onChange={this.handleChange} />
                        {submitted && !title &&
                            <div className="help-block">Title is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !description ? ' has-error' : '')}>
                        <TextField type="text" htmlFor="description" label="Description" className="form-control" name="description" value={description} onChange={this.handleChange} />
                        {submitted && !description &&
                            <div className="help-block">Description is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !price ? ' has-error' : '')}>
                        <TextField type="text" htmlFor="price" label="Price" className="form-control" name="price" value={price} onChange={this.handleChange} />
                        {submitted && !price &&
                            <div className="help-block">Price is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <Button className="btn btn-primary" type="submit" >Create Listing</Button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapState(state) {
    // const { loggingIn } = state.authentication;
    // return { loggingIn };
}

const actionCreators = {
    getListings: listingActions.getListings, 
    createListing: listingActions.createListing,
    updateListings: listingActions.updateListings,
    deleteListings: listingActions.deleteListings
};

export default connect(mapState, actionCreators)(Login);