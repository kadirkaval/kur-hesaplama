import React from "react";
import robotFoto from "../images/robotFoto.jpg";

const ProductCart = ({ item }) => {
const {title, body, userId, id} = item
  return (
    <div className="cart border hover:bg-gray-50">
      <div className="cart-img">
        <img className="rounded border h-36 w-72" src={robotFoto} alt="" />
        <h6 className="text-xl font-semibold text-center p-1">{id}</h6>
        <h6 className="text-xl w-72 font-semibold text-center p-1">{title}</h6>
      </div>
      <div className="description">
        <p className="p-2 w-72 text-center">{body}</p>
      </div>

      <div className="price p-2 text-end">
        <span className="text-xl font-semibold">{userId} TL</span>
      </div>
      <button className="p-2 m-3 text-white bg-blue-500 hover:bg-blue-800 rounded-md">
        Sepete Ekle
      </button>
   
    </div>
  );
};

export default ProductCart;
