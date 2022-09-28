import React, { useEffect, useReducer } from 'react';
import parksReducer from '../reducers/parks-reducer';
import { getParksFailure, getParksSuccess } from '../actions/index';

const initialState = {
  isLoaded: false,
  allParks: [],
  error: null
};

function ParkList() {
  const [state, dispatch] = useReducer(parksReducer, initialState);

  useEffect(() => {
    fetch(`https://localhost:5001/api/Parks`)
      .then(response => {
          if(!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
          } else {
            return response.json()
            console.log(response);
          }
        })
        
      .then((jsonifiedResponse) => {
        const action = getParksSuccess(jsonifiedResponse)
        dispatch(action);
      })
      .catch((error) => {
        const action = getParksFailure(error.message)
        dispatch(action);
      });
    }, [])
 
  const { error, isLoaded, allParks } = state;
  if(error) {
    return <h1>Error: {error}</h1>;
  } else if (!isLoaded) {
    return <h1>...Loading...</h1>;
  } else {
    return (
      <React.Fragment>
        <h1>Parks</h1>
        <ul> 
      
          {allParks.map((park, index) =>
          <li key={index}>
            <h3>{park.name}</h3>
          </li>
          )}
        </ul>
      </React.Fragment>
    );
  }
}

export default ParkList;