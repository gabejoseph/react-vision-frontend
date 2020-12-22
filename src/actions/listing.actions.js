import { history } from '../helpers/history';
import constants from '../constants/listing.constants'
import service from '../services/listing.service'
import { alertActions } from './alert.actions';
import listingConstants from '../constants/listing.constants';
import listingService from '../services/listing.service';

const createListing = (listing) => {
    const request = (listing) => { return { type: listingConstants.LISTING_REQUEST, listing } }
    const success = (listing) => { return { type: listingConstants.LISTING_SUCCESS, listing } }
    const failure = (error) => { return { type: listingConstants.LISTING_FAILURE, error } }
    return dispatch => {
        dispatch(request(listing));
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
    };

}

const getListings = () => {
    const request = () => { return { type: constants.GETALL_REQUEST } }
    const success = (listing) => { return { type: constants.GETALL_SUCCESS, listing } }
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
}

const updateListings = (listing) => {
    const request = () => { return { type: constants.GETALL_REQUEST } }
    const success = (listing) => { return { type: constants.GETALL_SUCCESS, listing } }
    const failure = (error) => { return { type: listingConstants.LISTING_FAILURE, error } }
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
    }
}

const deleteListings = (id) => {
    const request = (id) => { return { type: listingConstants.DELETE_REQUEST, id } }
    const success = (id) => { return { type: listingConstants.DELETE_SUCCESS, id } }
    const failure = (id, error) => { return { type: listingConstants.DELETE_ERROR, id, error } }
    return dispatch => {
        dispatch(request(id));

        listingService.delete(id)
            .then(
                id => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            )
    }
}

export const listingActions = { 
    getListings, 
    createListing,
    updateListings,
    deleteListings
}


