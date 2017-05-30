const initialState = {
  currentUser: null
}

export const sessionReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'TEST': {
      return state;
    }

    default: {
      return state;
    }
  }
}



export default sessionReducer;
