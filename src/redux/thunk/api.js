import axios from "axios";

import {
    fetchGreetingSuccess,
    fetchGreetingFailure
} from '../actions/action';

const baseURL = 'http://127.0.0.1:3000/api/v1/greetings'

export const fetchGreetings = () => (dispatch) => {
    axios
    .get(baseURL)
    .then((res) => {
        const greet = res.data;
        dispatch(fetchGreetingSuccess(greet))
    })
    .catch((err) => {
        dispatch(fetchGreetingFailure(err.message))
    })
}