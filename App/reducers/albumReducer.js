import {
  LOAD_PHOTOS_START,
  LOAD_PHOTOS_FAILURE,
  LOAD_PHOTOS_SUCCESS,
} from '../constants/Keys';

const initialState = {
  photos: [],
  isLoading: false,
  error: null,
};

export const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PHOTOS_START:
      return Object.assign({}, state, {isLoading: true});
    case LOAD_PHOTOS_SUCCESS:
      return Object.assign({}, state, {
        photos: action.payload,
        isLoading: false,
      });
    case LOAD_PHOTOS_FAILURE:
      return Object.assign({}, state, {
        error: action.payload,
        isLoading: false,
      });
    default:
      return state;
  }
};
