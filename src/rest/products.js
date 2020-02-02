import axios from 'axios'
import { useEffect, useReducer } from 'react'

const reducer = (state, action) => {
    if (action.type === 'REQUEST') return {...state, loading: true}

    if (action.type === 'SUCCESS') { 
        return {loading: false, products: [...state.products, ...action.data]}
    }

    if (action.type === 'FAILURE') return {...state, err: true}

    return state
}

const INITIAL_STATE = {
    loading: true,
    products: [],
    err: false
}

export const useGet = baseURL => {
    const [data, dispatch] = useReducer(reducer, INITIAL_STATE)
    const load = async (page = 1) => {
        dispatch({type: 'REQUEST'})
        const { data } = await axios.get(`${baseURL}${page}`)

        if (data.products) dispatch({type: 'SUCCESS', data: data.products})
        else dispatch({type: 'FAILURE'})
    }
    useEffect(() => {
        load()
    }, [])
    return [data, load]
}

