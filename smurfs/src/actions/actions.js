import axios from 'axios'
import { connect } from 'react-redux'

export const START_FETCHING = 'START_FETCHING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

export const START_ADDING = "START_ADDING" 
export const SMURF_ADDED = "SMURF_ADDED"
export const SMURF_FAIL = "SMURF_FAIL"

export const fetchSmurfs = () => (dispatch) => {
    axios
    .get('http://localhost:3333/smurfs')
    .then((res) => dispatch({type: FETCH_SUCCESS, payload:res.data}))
    .catch((err) => dispatch ({type:FETCH_FAILURE, payload: err.response}))
}


export const addSmurf = (smurf) => (dispatch) => {
    dispatch({type: START_FETCHING })
    axios.post('http://localhost:3333/smurfs',smurf)
    .then((res) => {
        dispatch({type: SMURF_ADDED, payload: res.data});
    })
    .catch((err) => dispatch ({type:SMURF_FAIL, payload: err.response}))

}