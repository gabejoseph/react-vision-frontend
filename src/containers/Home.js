import React from 'react'
import './Home.css'
import Banner from '../components/Banner'
import Card from '../components/Card'
import { connect } from 'react-redux';
import { userActions } from '../actions/user.actions';

class Home extends React.Component {

    componentDidMount() {
        this.props.getUsers();
    }

    // handleDeleteUser(id) {
    //     return (e) => this.props.deleteUser(id);
    // }

    render () {
        return (
            <div className='home'>
                <Banner />

                <div className='home_section'>
                    <Card 
                        src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                        title="Online Experiences"
                        description="Unique activities we can do together, led by a world of hosts."
                    />
                    <Card 
                        src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                        title="Unique stays"
                        description="Spaces that are more than just a place to sleep."
                    />
                    <Card 
                        src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                        title="Entire Homes"
                        description="Comfortable private places, with room for friends or family"
                    />
                </div>
                <div className='home_section'>
                    <Card 
                        src="https://a0.muscache.com/im/pictures/38aeacb5-7e77-4bf6-a813-754605020922.jpg?im_w=720"
                        title="Allison Burke"
                        description="Day in the life of a Las Vegas Dancer"
                        price="130USD/night"
                    />
                    <Card 
                        src="https://a0.muscache.com/im/pictures/e77da774-9e72-46d6-a7fd-7d159f823046.jpg?im_w=720"
                        title="Aisha Jackson"
                        description="Share an evening of music and healing"
                        price="100USD/night"
                    />
                    <Card 
                        src="https://a0.muscache.com/im/pictures/7f607dbc-c51c-482e-8b67-55ded3e7f864.jpg?im_w=720"
                        title="Merv IVI Vera"
                        description="Night of magic and mind-reading"
                        price="50USD/night"
                    />
                </div>
            </div>
        )
    }

}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

export default connect(mapState, actionCreators)(Home);


