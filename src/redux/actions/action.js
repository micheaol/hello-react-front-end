export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS'
export const FETCH_GREETING_FAILURE = 'FETCH_GREETING_FAILURE'


export const fetchGreetingSuccess = (payload) => ({
    type: FETCH_GREETING_SUCCESS,
    payload
});

export const fetchGreetingFailure = (payload) => ({
    type: FETCH_GREETING_FAILURE,
    payload
})