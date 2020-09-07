import { history } from '../helpers/history';
import constants from '../constants/listing.constants'
import service from '../services/listing.service'

export const listingActions = { 
    getListings
}



function getListings() {
    return dispatch => {
        dispatch(request());
        service.getAll()
            .then(
                listings => { 
                    dispatch(success(listings));
                    history.push('/');
                },
            );
    };

    function request() { return { type: constants.GETALL_REQUEST } }
    function success(listing) { return { type: constants.GETALL_SUCCESS, listing } }

}

