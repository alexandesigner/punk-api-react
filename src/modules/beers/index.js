
import axios from "axios"
import {
  FETCH_BEERS,
  FETCH_BEER_DETAILS,
  FETCH_BEERS_FAILED
} from './actionTypes'

// Set up ROOT_URL API
const ROOT_URL = "https://api.punkapi.com/v2/";

// Create a state in store
const initialState = {
  beersList: [],
  beerDetails: {},
  isLoading: true
}

// Reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEERS:
      return {
        ...state,
        beersList: action.payload.data,
        isLoading: !state.isLoading
      }

    case FETCH_BEER_DETAILS:
      return {
        ...state,
        beerDetails: action.payload,
        isLoading: !state.isLoading
      }

    case FETCH_BEERS_FAILED:
      return {
        ...state,
        isLoading: true
      }

    default:
      return state
  }

}

// Actions

// Get All Beers
export const fetchBeers = () => {
  return dispatch => {
    axios.get(`${ROOT_URL}beers`)
      .then(result => dispatch({
        type: FETCH_BEERS,
        payload: result
       }))
      .catch(error => dispatch({
        type: FETCH_BEERS_FAILED, 
        payload: error
      }))
  }
}

// Get Beer Details
export const fetchBeerDetails = (id) => {
  return dispatch => {
    axios.get(`${ROOT_URL}beers/${id}`)
      .then(result => dispatch({
        type: FETCH_BEER_DETAILS,
        payload: result.data
       }))
      .catch(error => dispatch({
        type: FETCH_BEERS_FAILED, 
        payload: error
      }))
  }
}