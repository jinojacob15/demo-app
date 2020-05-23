


import {  SET_USER} from 'constants/config'

export const setUser = text => dispatch => {

  dispatch({
    type: SET_USER,
    payload: text
  });
};

