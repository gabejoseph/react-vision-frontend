import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makestyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { userActions } from '../actions/user.actions'

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // name, email, username and password
            user: {
                name: '',
                email: '',
                username: '',
                password: ''
            },
            submitted: false
        };

    }


    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        // user.name user.email user.username user.password
        if (user.name && user.email && user.username && user.password) {
            this.props.register(user);
        }
    }




    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;

        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={(event) => this.handleSubmit(event)}>
                    <div className={'form-group' + (submitted && !user.name ? ' has-error' : '')}>
                        <TextField label="Name" htmlFor="name" type="text" className="form-control" name="name" value={user.name} onChange={(event) => this.handleChange(event)} />
                        {submitted && !user.name &&
                            <div className="help-block">Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                        <TextField type="text" label="Email" htmlFor="email" className="form-control" name="email" value={user.email} onChange={(event) => this.handleChange(event)} />
                        {submitted && !user.email &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                        <TextField htmlFor="username" label="Username" type="text" className="form-control" name="username" value={user.username} onChange={(event) => this.handleChange(event)} />
                        {submitted && !user.username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <TextField htmlFor="password" label="Password" type="password" className="form-control" name="password" value={user.password} onChange={(event) => this.handleChange(event)} />
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <Button className="btn btn-primary">Register</Button>
                        {registering && <strong>Loading ... </strong>}
                        <Button><Link to="/" >Cancel</Link></Button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

export default connect(mapState, actionCreators)(Register);