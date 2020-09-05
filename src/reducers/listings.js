export default (state = [], action ) => {

  let newState;

  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'RANK_LISTING':
      newState = state.map(listing => {
        if (listing.id === action.listingId) {
          return {...listing, star: ++listing.star}
        } else {
          return listing
        }
      })
      return newState;

      case 'DOWNVOTE_QUOTE':
        newState = state.map(quote => {
          if (quote.id === action.quoteId && quote.votes > 0) {
            return {...quote, votes: --quote.votes}
          } else {
            return quote
          }
        })
      return newState;

    default: 
      return state;
  }


}





