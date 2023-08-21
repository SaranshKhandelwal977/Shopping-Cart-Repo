import { toast } from "react-hot-toast";
import {MdOutlineDelete} from "react-icons/md"
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice"


const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id))
    toast.error("Item removed from cart")
  }
  return (
    <div className="mt-10">
      <div className="flex gap-10 w-11/12">
        <div className=" w-1/4">
          <img className="h-full" src={item.image}></img>
        </div>
        <div className="w-3/4">
          <h1 className="text-slate-700 text-xl font-semibold mb-5">{item.title}</h1>
          <p className='text-slate-600'>{item.description.split(" ").slice(0,15).join(" ") + "..."}</p>
          <div className="flex justify-between my-10">
            <p className="text-green-600 font-bold text-lg">$ {item.price}</p>
            <div onClick={removeFromCart} className="bg-red-200 p-3 rounded-full cursor-pointer"   >
              <MdOutlineDelete fontSize="1.5rem" color="red" ></MdOutlineDelete>
            </div>
          </div>
        </div>
      </div>
        <div className="border-y-2 bg-slate-800 my-16"></div>
    </div>
  );
};

export default CartItem;
