import { productDelete, productLoad, productSave, productUpdate, productView } from '../../redux/reducers/product';
import axios from 'axios';
import { useEffect } from "react";

export const addedProduct = (product) => {
    return function (dispatch) {
        axios.post(`http://localhost:5000/Product`, product).then((resp) => {
            console.log("resp add", resp);
            dispatch(productSave());
            loadProduct()

        }).catch(error => console.log(error));
    }
}

export const loadProduct = () => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/Product`).then((resp) => {
            console.log("res", resp)
            dispatch(productLoad(resp.data));
        }).catch(error => console.log(error));
    }
}

export const deletProduct = (id) => {
    return function (dispatch) {
        axios.delete(`http://localhost:5000/Product/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(productDelete(resp.data));

        }).catch(error => console.log(error));
    }
}
export const viewProduct = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:5000/Product/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(productView(resp.data));

        }).catch(error => console.log(error));
    }
}
export const updatProduct = (id, product) => {
    return function (dispatch) {
        axios.put(`http://localhost:5000/Product/${id}`, product).then((resp) => {
            console.log("resp", resp);
            dispatch(productUpdate(resp.data));
        }).catch(error => console.log(error));
    }
}
