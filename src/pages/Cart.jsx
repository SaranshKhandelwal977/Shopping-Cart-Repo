import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const {cart} = useSelector((state) => state); 
  const [totalAmount, setTotalAmount] = useState(0); 
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc+curr.price, 0));
  },[cart])
  return(
    <div >
      {
        cart.length > 0 ? 
        ( <div className=" flex justify-between w-9/12 m-auto">
            <div className="w-2/3">
              { 
                cart.map((item,index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index}></CartItem>
                })
              }
            </div>
            <div className="w-1/3 py-10 px-4 flex flex-col justify-between">
              <div >
                <div className="text-green-700 text-xl uppercase font-semibold">Your Cart</div>
                <div className="text-green-700 text-5xl uppercase font-semibold">Summary</div>
                <p className="mt-3">
                  <span className="text-slate-600 text-lg font-semibold">Total Items: {cart.length}</span>
                </p>
              </div>
              <div>
                <p className="text-slate-600 text-lg font-semibold pb-5">Total Amount: <span className="text-black font-bold">${totalAmount}</span> </p>
                <button className="text-white bg-green-700 rounded-lg py-[14px] px-[44px] w-full text-xl font-semibold  hover:bg-white hover:border-green-700 border-2 transition duration-300 ease hover:text-green-700">Checkout Now</button>
              </div>
            </div>
          </div>
        ) : 
        ( <div className='flex flex-col items-center gap-5 mt-72'>
            <h1 className="text-xl text-slate-600 font-semibold">Your cart is empty!</h1>
            <Link to="/">
              <button className="text-white bg-green-600 rounded-lg py-[14px] px-[44px] w-full text-sm font-semibold uppercase hover:bg-white hover:border-green-600 border-2 transition duration-300 ease hover:text-green-600">Shop now</button>
            </Link>
          </div>
        )
        
    }
    </div>
  );
};

export default Cart;
