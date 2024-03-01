import { FaTimes } from "react-icons/fa";
import CartProduct from "./CartProduct";
import { motion }  from "framer-motion";
import { useState } from "react";
import EmptyCart from "../../../../public/emptyCart.svg";

// import { useCartContext } from "../context/cartContext";


const Cart = ({ showCart, setShowCart }) => {
//   const { product } = useCartContext();

const sampleProducts = [
  {
    name: 'Product 1',
    img: 'https://images.unsplash.com/photo-1502236876560-243e78f715f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 20.0,
  },
  {
    name: 'Product 2',
    img: 'https://images.unsplash.com/photo-1502236876560-243e78f715f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 25.0,
  },
  {
    name: 'Product 3',
    img: 'https://images.unsplash.com/photo-1502236876560-243e78f715f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 30.0,
  },
];

// Assume you have a state for products like this:
const [product, setProduct] = useState(sampleProducts);


return (
  <div
    className={`fixed inset-0 z-20 ${showCart ? "bg-black bg-opacity-50" : "hidden"}`}
    onClick={() => setShowCart(false)}
  >
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="max-w-[400px] w-full h-full bg-white fixed right-0 top-0 p-6 transform"
      onClick={(e) => e.stopPropagation()}
    >
      <FaTimes
        className="absolute right-0 top-0 m-6 text-[24px] hover:text-gray-500 cursor-pointer"
        onClick={() => setShowCart(false)}
      />
      <h3 className="text-lg font-medium text-gray-600 uppercase">
        Your Cart
      </h3>

      <div className="mt-6">
        {product && product.length > 0 &&
          product?.map((el) => (
            <CartProduct
              key={el.name}
              img={el.img}
              name={el.name}
              price={el.price}
            />
          ))}
      </div>

      {product.length > 0 ? (
        <>
          <button className="bg-myBlue text-white text-center w-full rounded-3xl py-2 hover:bg-headersBlue mb-4 mt-4">
            View Cart
          </button>
          <button className="bg-myBlue text-white text-center w-full rounded-3xl py-2 hover:bg-headersBlue">
            CheckOut
          </button>
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart} className="w-300" alt="" />
          <p className="text-xl text-textColor font-semibold">
            Add some items to your cart
          </p>
        </div>
      )}
    </motion.div>
  </div>
  );
};

export default Cart;
