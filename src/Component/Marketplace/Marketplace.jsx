import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../Global/action";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Loading from "../Loading";


const Marketplace = () => {

  const dispatch = useDispatch();
  const { Productdata, isLoading ,error} = useSelector((state) => state.ProductData);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);
 console.log(error)
 
  return (
    <div className="marketPlace w-full col-lg-9 px-lg-5">
      <div className="productHeader d-flex justify-content-between align-items-center mt-2">
        <h4 className="left">Today's pics</h4>
        <NavLink>Bardhaman . 65 km</NavLink>
      </div>
      {isLoading ? (
       <Loading/>
      ):  <div className="productContainer w-full d-flex flex-wrap ">
      {Productdata?.map((e, index) => {
        return (
          <div
            className="productcard col-12 col-sm-6 col-lg-4 p-1"
            key={index}
          >
            <img src={e.thumbnail} alt="" />
            <div className="price mt-2">$ {e.price}</div>
            <div className="model">{e.brand}</div>
            <div className="address mb-2">{e.title}</div>
          </div>
        );
      })}
    </div>}
    {error&&<span style={{color:'red',padding:'14px'}}>{error}</span>}
    </div>
  );
};

export default Marketplace;
