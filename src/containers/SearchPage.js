import React from 'react'
import '../components/SearchResult.css'
import SearchResult from '../components/SearchResult'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux';
import { listingActions } from '../actions/listing.actions';


class SearchPage extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            listings: []
        }

    }

    componentDidMount() {
        this.props.getListings()

    }

    handleSort() {
        const listings = [ ...this.props.listing ]
        listings.sort( (a, b) => {
            let priceA = a.price // ignore upper and lowercase
            let priceB = b.price // ignore upper and lowercase
                if (priceA < priceB) {
                    return -1;
                }
                if (priceA > priceB) {
                    return 1;
                }
            
        })

        this.setState({ 
            listings
        })
    }


    render() {
        const loading = this.props.loading

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
                        variant="outlined" onClick={() => {this.handleSort()}} >Price
                    </Button>
                    <Button 
                        variant="outlined">Rooms and beds
                    </Button>
                    <Button 
                        variant="outlined">More filters
                    </Button>
                </div>
                {loading ? <h1>loading...</h1>  :
                
                    (this.state.listings.length > 0 ? 
                        this.state.listings.map(result =>
                            <SearchResult 
                                key = {result.id}
                                img = {result.img}
                                location= {result.location}
                                title= {result.title}
                                description= {result.description}
                                star= {result.star}
                                price= {result.price}
                                total= {result.total}
                            />
                        )
                    
                    :
                    this.props.listing.map(result =>
                        <SearchResult 
                            key = {result.id}
                            img = {result.img}
                            location= {result.location}
                            title= {result.title}
                            description= {result.description}
                            star= {result.star}
                            price= {result.price}
                            total= {result.total}
                        />
                    ))
                }
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

