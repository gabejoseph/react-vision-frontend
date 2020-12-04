import { history } from '../helpers/history';
import constants from '../constants/listing.constants'
import service from '../services/listing.service'
import { alertActions } from './alert.actions';
import listingConstants from '../constants/listing.constants';

export const listingActions = { 
    getListings, 
    createListing
}

function getListings() {
    return dispatch => {
        dispatch(request());
        service.getAll()
            .then(
                listings => { 
                    dispatch(success(listings));
                    // history.push('/');
                },
            );
    };

    function request() { return { type: constants.GETALL_REQUEST } }
    function success(listing) { return { type: constants.GETALL_SUCCESS, listing } }

}

function createListing(listing) {
    return dispatch => {
        dispatch(request());
        service.newListing(listing)
            .then(
                listing => {
                    dispatch(success(listing));
                    history.push('/search');
                    dispatch(alertActions.success('Listing created'))
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error.toString());
                }
            )
        const request = (listing) => { return { type: listingConstants.LISTING_REQUEST, listing } }
        const success = (listing) => { return { type: listingConstants.LISTING_SUCCESS, listing } }
        const failure = (error) => { return { type: listingConstants.LISTING_FAILURE, error } }
    };

 
}

