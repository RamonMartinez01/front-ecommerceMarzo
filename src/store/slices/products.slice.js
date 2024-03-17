import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import API_BASE_URL from "../../utils/apiConfig";



const productsSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers: {
        setProducts: (currentValue, action) => action.payload
    }
})

export const { setProducts } = productsSlice.actions

export default productsSlice.reducer

export const getProductsThunk = () => (dispatch) => {
    const url = `${API_BASE_URL}/products`
    axios.get(url)
    .then(res => dispatch(setProducts(res.data)))
    .catch(err => console.log(err))
}