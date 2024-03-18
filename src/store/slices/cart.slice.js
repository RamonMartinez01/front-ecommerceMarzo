import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigToken from "../../utils/getConfigToken";
import API_BASE_URL from "../../utils/apiConfig";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (currentValue, action) => [...currentValue, action.payload],
        removeFromCart: (currentValue, action) => {
            return currentValue.filter(prod => prod.id !== action.payload)
        },
        setCart: (currentValue, action) => action.payload
    } 
})

export const { addToCart, removeFromCart, setCart } = cartSlice.actions

export default cartSlice.reducer

//baseUrl funciona para los endpoint con /productscart (sin necesiad de id) 
const baseUrl = `${API_BASE_URL}/productscart`

export const getCartThunk = () => (dispatch) => {
    const url = `${baseUrl}`
    axios.get(url, getConfigToken())
        .then(res => dispatch(setCart(res.data)))
        .catch(err => console.log(err))
}

export const addProductToCartThunk = (productId, quantity = 1) => (dispatch) => {
    const url = `${baseUrl}`
    const data = { productId, quantity }
    axios.post(url, data, getConfigToken())
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}

export const deleteProductFromCartThunk = (id) => (dispatch) => {
    const url = `${baseUrl}/${id}`
    axios.delete(url, getConfigToken())
        .then(res => {
            console.log(res.data)
            dispatch(removeFromCart(id))
        })
        .catch(err => console.log(err))
}