import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "./actionType";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
export default dataReducer;

// fetchproductdata
const productsinitialState = {
  Productdata: [],
  isLoading: false,
  error: null,
};
export const ProductReducer = (state = productsinitialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, isLoading: true, error: null };

    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, Productdata: action.payload };

    case FETCH_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
