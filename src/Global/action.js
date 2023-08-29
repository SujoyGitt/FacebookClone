import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "./actionType";
import axios from "axios";
const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

const fetchUserData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    fetch("https://randomuser.me/api/?results=40")
      .then((response) => response.json())
      .then((data) => dispatch(fetchDataSuccess(data.results)))
      .catch((error) => dispatch(fetchDataFailure(error.message)));
  };
};

export { fetchUserData };

// FECTH PRODUCTS for market place page

const fetchProductDataRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};
const fetchProductDataSuccess = (data) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: data,
  };
};
const fetchProductDataFail = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const fetchProductData = () => {
  return (dispatch) => {
    dispatch(fetchProductDataRequest());
    axios
      .get("https://dummyjson.com/products?skip=30&limit=12")
      .then((data) => dispatch(fetchProductDataSuccess(data.data.products)))
      .catch((error) => dispatch(fetchProductDataFail(error.message)));
  };
};
