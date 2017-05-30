// @flow

type stateType = {
  currentUser: ?Object,
};

const initialState = {
  currentUser: null
};

export const sessionReducer = (state: stateType = initialState, action: Object) => {
  switch(action.type) {
    case 'TEST': {
      return state;
    };

    default: {
      return state;
    };
  }
}



export default sessionReducer;
