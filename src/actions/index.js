import * as c from './ActionTypes';

export const getParksSuccess = (park) => ({
  type: c.GET_PARKS_SUCCESS,
  park
});

export const getParksFailure = (error) => ({
  type: c.GET_PARKS_FAILURE,
  error
});