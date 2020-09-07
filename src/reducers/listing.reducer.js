import constants from '../constants/listing.constants'

export default function listing(state = {loading: false, listing: []}, action) {
    switch (action.type) {
        case constants.GETALL_REQUEST:
            return {
                loading: true,
                listing: state.listing
            }
        case constants.GETALL_SUCCESS:
            return {
                loading: false,
                listing: action.listing
            }
        default:
            return state
        }
}