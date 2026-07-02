import React from "react";

const ZomatoCards = ({ item, del }) => {
  return (
    <div className="w-72 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>

          <div className="bg-green-600 text-white px-2 py-1 rounded-md text-xs font-semibold flex-shrink-0">
            ★ {item.rating}
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-1">
          {item.category.substring(0, 10)}
        </p>

        <div className="flex justify-between items-center mt-4">
          <p className="text-2xl font-bold text-green-600">₹{item.price}</p>

          <span className="text-sm text-gray-400">25-30 min</span>
        </div>

        <button
          onClick={() => del(item.id)}
          className="w-full mt-5 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ZomatoCards;
