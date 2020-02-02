import { useReducer } from 'react'

const axios = { post: (url, data) => data }  // Mock axios p a linha 26

const reducer = (state, action) => {
    if (action.type === 'REQUEST') return {...state, posting: true}

    if (action.type === 'SUCCESS') {
        return {posting: false, name: action.data}
    }

    if (action.type === 'CLEAN') return {...state, name: ''}

    return state
}

const INITIAL_STATE = {
    posting: false,
    name: ''
}

export const usePost = baseURL => {
    const [data, dispatch] = useReducer(reducer, INITIAL_STATE)
    const post = async data => {
        dispatch({type: 'REQUEST'})
        axios.post(baseURL, data)
        dispatch({type: 'SUCCESS', data: data.name})
    }
    const clean = () => dispatch({type: 'CLEAN'})
    return [data, post, clean]
}