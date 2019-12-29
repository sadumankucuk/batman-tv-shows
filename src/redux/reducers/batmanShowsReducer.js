import * as actionTypes from '../actions/actionTypes';

const BatmanShowListInitialState = {
  loadingShowList: false,
  shows: [],
  errorShowList: false
};

const BatmanShowInitialState = {
  loadingShow: false,
  show: {},
  errorShow: false
};

export const batmanShowListReducers = (
  state = BatmanShowListInitialState,
  action
) => {
  switch (action.type) {
    case actionTypes.FETCH_BATMAN_SHOWS_PENDING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_BATMAN_SHOWS_FULFILLED:
      return {
        ...state,
        loading: false,
        shows: action.payload
      };
    case actionTypes.FETCH_BATMAN_SHOWS_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export const batmanShowReducers = (state = BatmanShowInitialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BATMAN_SHOW_PENDING:
      return {
        ...state,
        loadingShow: true
      };
    case actionTypes.FETCH_BATMAN_SHOW_FULFILLED:
      return {
        ...state,
        loadingShow: false,
        show: action.payload
      };
    case actionTypes.FETCH_BATMAN_SHOW_REJECTED:
      return {
        ...state,
        loadingShow: false,
        errorShow: action.error
      };
    default:
      return state;
  }
};
