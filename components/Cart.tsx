import React from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "@/redux/cart.slice";

function Cart() {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="flex">
      {cart.length === 0 ? (
        <p className="text-lg font-bold">Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item: any, i: number) => (
            <div
              key={i}
              className="flex justify-between items-center border-b-2 border-slate-400"
            >
              <div className="cursor-pointer absolute -mt-20">
                <Image
                  onClick={() => dispatch(removeFromCart(item.id))}
                  src={"./x.svg"}
                  alt={"x"}
                  width={20}
                  height={20}
                />
              </div>
              <div className="p-2">
                <p className="font-bold text-xl">{item.name}</p>
                <p className="font-bold text-lg text-slate-600 ">
                  ${item.price}
                </p>
              </div>
              <div className="mt-5 m-2 relative w-fit sm:h-20 h-24 aspect-square fill-current overflow-hidden ">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className="object-cover "
                />
              </div>
            </div>
          ))}

          <div
            onClick={() => dispatch(clearCart(cart))}
            className="cursor-pointer flex border-2 border-black mt-2 justify-center p-1 text-center"
          >
            <p className="w-full  text-lg font-bold">CLEAR</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
