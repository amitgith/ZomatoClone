import React from "react";

const ZomatoCards = ({ item, del }) => {
  return (
    <div className="w-72 h-[430px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title & Rating */}
        <div className="flex justify-between items-start gap-2">
          <h2 className="text-lg font-bold text-gray-800 line-clamp-2 flex-1">
            {item.title}
          </h2>

          <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-md flex-shrink-0">
            ⭐ {item.rating}
          </span>
        </div>

        {/* Category */}
        <p className="text-gray-500 text-sm mt-2">{item.category}</p>

        {/* Price & Delivery */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-2xl font-bold text-green-600">₹{item.price}</p>

          <span className="text-sm text-gray-500 font-medium">
            🚴 25-30 min
          </span>
        </div>

        {/* Delete Button */}
        <button
          onClick={() => del(item.id)}
          className="mt-auto w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ZomatoCards;
