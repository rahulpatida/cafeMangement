import axios from 'axios';
import { useEffect } from "react";
import { categoryDelete, categoryLoad, categorySave, categoryUpdate, categoryView } from '../../redux/reducers/category';
import clientConfig from '../../confing';

export const addedcategory = (data) => {
    return function (dispatch) {
        axios.post(`${clientConfig.siteUrl}/add-category`, data).then((resp) => {
            console.log("resp add", resp);
            dispatch(categorySave(resp.data));
            loadcategory()

        }).catch(error => console.log(error));
    }
}

export const loadcategory = () => {
    return function (dispatch) {
        axios.get(`${clientConfig.siteUrl}/display-product-category`).then((resp) => {
            console.log("res", resp.data)
            dispatch(categoryLoad(resp.data));
        }).catch(error => console.log(error));
    }
}

export const deletcategory = (id) => {
    return function (dispatch) {
        axios.delete(`${clientConfig.siteUrl}/delete-category/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(categoryDelete(resp.data));

        }).catch(error => console.log(error));
    }
}
export const viewcategory = (id) => {
    return function (dispatch) {
        axios.get(`${clientConfig.siteUrl}/display-product-category/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(categoryView(resp.data));

        }).catch(error => console.log(error));
    }
}
export const updatcategory = (id, product) => {
    return function (dispatch) {
        axios.put(`${clientConfig.siteUrl}/${id}`, product).then((resp) => {
            console.log("resp", resp);
            dispatch(categoryUpdate(resp.data));
        }).catch(error => console.log(error));
    }
}
