import axios from 'axios';
import { useEffect } from "react";
import { menuDelete, menuLoad, menuSave, menuUpdate, menuView } from '../../redux/reducers/Menuproduct';
import clientConfig from '../../confing';
export const addedMenu = (data) => {
    return function (dispatch) {
        axios.post(`${clientConfig.siteUrl}/add-product-menu`, data).then((resp) => {
            console.log("resp add", resp);
            dispatch(menuSave(resp.data));
            loadMenu()

        }).catch(error => console.log(error));
    }
}

export const loadMenu = () => {
    return function (dispatch) {
        axios.get(`${clientConfig.siteUrl}/display-product-menu`).then((resp) => {
            console.log("res", resp.data)
            dispatch(menuLoad(resp.data));
        }).catch(error => console.log(error));
    }
}

export const deletMenu = (id) => {
    return function (dispatch) {
        axios.delete(`${clientConfig.siteUrl}/display-product-menu/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(menuDelete(resp.data));

        }).catch(error => console.log(error));
    }
}
export const viewMenu = (id) => {
    return function (dispatch) {
        axios.get(`${clientConfig.siteUrl}/display-product-menu/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(menuView(resp.data));

        }).catch(error => console.log(error));
    }
}
export const updatMenu = (id, product) => {
    return function (dispatch) {
        axios.put(`${clientConfig.siteUrl}/Product/${id}`, product).then((resp) => {
            console.log("resp", resp);
            dispatch(menuUpdate(resp.data));
        }).catch(error => console.log(error));
    }
}
