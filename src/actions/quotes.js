// // TODO: Create action creators as defined in tests
// export const addQuote = quote => {
//     return {
//       type: 'ADD_QUOTE',
//       quote
//     }
//   }
  
//   export const removeQuote = quoteId => {
//     return {
//       type: 'REMOVE_QUOTE',
//       quoteId
//     }
//   }
  
//   export const upvoteQuote = quoteId => {
//     return {
//       type: 'UPVOTE_QUOTE',
//       quoteId
//     }
//   }
  
//   export const downvoteQuote = quoteId => {
//     return {
//       type: 'DOWNVOTE_QUOTE',
//       quoteId
//     }
//   }
  

// export const fetchCats = () => {
//     return (dispatch) => {
//       dispatch({ type: 'LOADING_CATS'})
//       fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
//         return response.json()
//       }).then(responseJSON => {
//         dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
//       })
//     }
//   }