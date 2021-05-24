import {
  LOAD_PHOTOS_START,
  LOAD_PHOTOS_FAILURE,
  LOAD_PHOTOS_SUCCESS,
} from '../constants/Keys';

const API = 'https://jsonplaceholder.typicode.com/photos';

export const loadPhotos = () => {
  return (dispatch, getState) => {
    dispatch({type: LOAD_PHOTOS_START});
    fetch(API)
      .then(response => response.json())
      .then(responseJson => {
        dispatch({
          type: LOAD_PHOTOS_SUCCESS,
          payload: responseJson,
        });
      })
      .catch(function (error) {
        dispatch({type: LOAD_PHOTOS_FAILURE, payload: error});
      });
  };
};
