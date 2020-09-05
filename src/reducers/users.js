const catsReducer = (state = { users: [], loading: false }, action) => {
    switch(action.type) {
        case 'LOADING_CATS':
            return {
                ...state, 
                cats: [...state.cats],
                loading: true
            }
        case 'ADD_CATS':
            return {
                ...state, 
                cats: action.cats,
                loading: false
            }
        case 'LOGGIN_IN':
            return {
                ...state,
                
            }

        default: 
        return state;
    }
}

export default catsReducer;