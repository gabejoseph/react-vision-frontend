import { history } from '../helpers/history';
import constants from '../constants/listing.constants'
import service from '../services/listing.service'
import { alertActions } from './alert.actions';
import listingConstants from '../constants/listing.constants';

const createListing = (listing) => {
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

const getListings = () => {
    return dispatch => {
        dispatch(request());
        service.getAll()
            .then(
                listings => { 
                    dispatch(success(listings));
                    // history.push('/');
                },
            );
        const request = () => { return { type: constants.GETALL_REQUEST } }
        const success = (listing) => { return { type: constants.GETALL_SUCCESS, listing } }
        
    };
}

const updateListings = (listing) => {
    return dispatch => {
        dispatch(request());
        service.update(listing)
            .then(
                listing => {
                    dispatch(success(listing));
                    history.push('/search');
                    dispatch(alertActions.success('Listing updated'))
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error.toString());
                }
            )
        const request = () => { return { type: constants.GETALL_REQUEST } }
        const success = (listing) => { return { type: constants.GETALL_SUCCESS, listing } }
        const failure = (error) => { return { type: listingConstants.LISTING_FAILURE, error } }
    }
}


export const listingActions = { 
    getListings, 
    createListing,
    updateListings
}


