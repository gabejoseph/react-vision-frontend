import React from 'react'
import '../components/SearchResult.css'
import SearchResult from '../components/SearchResult'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions/user.actions';
import { listingActions } from '../actions/listing.actions';


class SearchPage extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.getListings()

    }

    render() {
        return (
            // Fantastic point to implement store
            <div>
                <div 
                className='searchPage_info'>
                    <p>62 stays · 26 august to 30 august · 2 guest</p>
                    <h1>Stays Nearby</h1>
                    <Button 
                        variant="outlined">Cancellation Flexibility
                    </Button>
                    <Button 
                        variant="outlined">Type of place
                    </Button>
                    <Button 
                        variant="outlined">Price
                    </Button>
                    <Button 
                        variant="outlined">Rooms and beds
                    </Button>
                    <Button 
                        variant="outlined">More filters
                    </Button>
                </div>
                {}
                {this.props.loading ? <h1>loading...</h1> : 
                    this.props.listing.map(result =>
                        <SearchResult 
                            img = {result.img}
                            location= {result.location}
                            title= {result.title}
                            description= {result.description}
                            star= {result.star}
                            price= {result.price}
                            total= {result.total}
                        />
                    )
                }
                {this.props.listing.map(result =>
                    <SearchResult 
                        img = {result.img}
                        location= {result.location}
                        title= {result.title}
                        description= {result.description}
                        star= {result.star}
                        price= {result.price}
                        total= {result.total}
                    />
                )}
            </div>
        )
    }
}

function mapState(state) {
    const listing = state.listing.listing
    const loading = state.listing.loading
    return { listing, loading }
}

const actionCreators = {
    getListings: listingActions.getListings
}

export default connect(mapState, actionCreators)(SearchPage);

