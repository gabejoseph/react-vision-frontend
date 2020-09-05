// TODO: Create action creators as defined in tests
// Copied Code from older labs
export const addQuote = quote => {
    return {
      type: 'ADD_QUOTE',
      quote
    }
  }
  
export const removeQuote = quoteId => {
  return {
    type: 'REMOVE_QUOTE',
    quoteId
  }
}

export const downvoteQuote = quoteId => {
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId
  }
}

// Going to be create new user / host / listing (All of which should be async)
export const fetchCats = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS'})
    fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
    })
  }
}

// Vision Build
  
export const rankListing = listingId => {
  return {
    type: 'RANK_LISTING',
    listingId
  }
}
  

