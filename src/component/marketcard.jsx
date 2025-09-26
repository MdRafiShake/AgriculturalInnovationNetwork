import React, { useState } from "react";
import Cart from "./cart";

function MarketCard() {
  const rating = 4; // out of 5
  const [userComment, setUserComment] = useState("");
  const [comments, setComments] = useState([
    "This is a very useful product for my farm!",
  ]);

  const product = {
    name: "Product Name",
    price: 2999,
  };

  // Render stars function
  const renderStars = (count) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span
          key={i}
          className={i < count ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      ));
  };

  // Submit new comment
  const handleCommentSubmit = () => {
    if (userComment.trim() !== "") {
      setComments([userComment, ...comments]);
      setUserComment("");
    }
  };

  // ✅ Add to Cart (save in localStorage)
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const newCart = [...existingCart, product];
    localStorage.setItem("cartItems", JSON.stringify(newCart));

    window.dispatchEvent(new Event("cartUpdated")); // Refresh to update cart count
  
    
    // alert(`${product.name} added to cart!`);
  };

  // ✅ Checkout button handler
  const handleCheckout = () => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (cart.length === 0) {
      alert("Your cart is empty!");
    } else {
      // alert(`Proceeding to checkout with ${cart.length} items.`);
      // 👉 Here you can redirect to checkout page
      // e.g., navigate("/checkout")
    }
  };

  return (
    <div className="w-[92%] md:w-[95%] bg-lime-100 rounded-2xl shadow-lg border border-lime-300 overflow-hidden hover:shadow-xl transition duration-300 mt-[20px] mx-auto">
      <div className="flex flex-col md:flex-row text-black">
        {/* Product Image */}
        <div className="h-[200px] md:h-[300px] rounded-2xl m-[5px] md:w-[40%] bg-lime-200 flex justify-center items-center overflow-hidden">
          <img
            src=""
            alt="Product"
            className="w-[100%] md:w-[100%] object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-lg md:text-xl font-bold text-lime-800">
              {product.name}
            </h2>
            <p className="text-sm md:text-base text-lime-700 mt-1">
              A short description of the product goes here.
            </p>

            {/* Rating */}
            <div className="flex items-center mt-2">{renderStars(rating)}</div>
          </div>

          {/* Price and Add Button */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-semibold text-lime-900">
              ৳ {product.price}
            </span>
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 rounded-lg bg-lime-500 text-white font-medium transition transform hover:bg-lime-600 hover:scale-105 hover:shadow-lg hover:shadow-lime-400/50"
            >
              Add to Cart
            </button>
          </div>

          {/* ✅ Checkout Button */}
          <div className="mt-4">
            <button
              onClick={handleCheckout}
              className="w-full px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold transition transform hover:bg-emerald-700 hover:scale-105 shadow-lg"
            >
              Checkout
            </button>
          </div>

          {/* Comment Input Section */}
          <div className="mt-4 flex flex-col">
            <textarea
              className="w-full p-2 border border-lime-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-lime-400"
              rows={2}
              placeholder="Write a comment..."
              value={userComment}
              onChange={(e) => setUserComment(e.target.value)}
            />
            <button
              onClick={handleCommentSubmit}
              className="mt-2 self-end px-4 py-2 rounded-lg bg-lime-500 text-white font-medium transition transform hover:bg-lime-600 hover:scale-105 hover:shadow-lg hover:shadow-lime-400/50"
            >
              Submit
            </button>
          </div>

          {/* Display Comments */}
          <div className="mt-4">
            {comments.map((cmt, idx) => (
              <p
                key={idx}
                className="text-sm text-lime-700 italic mt-1 border-b border-lime-200 pb-1"
              >
                💬 {cmt}
              </p>
            ))}
          </div>
        </div>
      </div>

      <Cart/>
    </div>
  );
}

export default MarketCard;
