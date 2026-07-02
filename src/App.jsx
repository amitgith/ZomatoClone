import React, { useState } from "react";
import ZomatoCards from "./ZomatoCards";

const App = () => {
  const [zomatoData, setZomatoData] = useState([
    {
      id: 1,
      title: "Classic Margherita Pizza",
      category: "Italian",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      price: 249,
      rating: 4.8,
    },
    {
      id: 2,
      title: "Vegetarian Stir-Fry",
      category: "Asian",
      image: "https://cdn.dummyjson.com/recipe-images/2.webp",
      price: 189,
      rating: 4.4,
    },
    {
      id: 3,
      title: "Chocolate Chip Cookies",
      category: "American",
      image: "https://cdn.dummyjson.com/recipe-images/3.webp",
      price: 149,
      rating: 4.9,
    },
    {
      id: 4,
      title: "Chicken Alfredo Pasta",
      category: "Italian",
      image: "https://cdn.dummyjson.com/recipe-images/4.webp",
      price: 329,
      rating: 4.7,
    },
    {
      id: 5,
      title: "Mango Salsa Chicken",
      category: "Mexican",
      image: "https://cdn.dummyjson.com/recipe-images/5.webp",
      price: 299,
      rating: 4.6,
    },
    {
      id: 6,
      title: "Quinoa Salad",
      category: "Mediterranean",
      image: "https://cdn.dummyjson.com/recipe-images/6.webp",
      price: 219,
      rating: 4.3,
    },
    {
      id: 7,
      title: "Tomato Basil Bruschetta",
      category: "Italian",
      image: "https://cdn.dummyjson.com/recipe-images/7.webp",
      price: 179,
      rating: 4.5,
    },
    {
      id: 8,
      title: "Beef and Broccoli Stir-Fry",
      category: "Chinese",
      image: "https://cdn.dummyjson.com/recipe-images/8.webp",
      price: 349,
      rating: 4.8,
    },
    {
      id: 9,
      title: "Caprese Salad",
      category: "Italian",
      image: "https://cdn.dummyjson.com/recipe-images/9.webp",
      price: 199,
      rating: 4.4,
    },
    {
      id: 10,
      title: "Shrimp Scampi Pasta",
      category: "Italian",
      image: "https://cdn.dummyjson.com/recipe-images/10.webp",
      price: 389,
      rating: 4.9,
    },
    {
      id: 11,
      title: "Chicken Biryani",
      category: "Indian",
      image: "https://cdn.dummyjson.com/recipe-images/11.webp",
      price: 299,
      rating: 4.8,
    },
    {
      id: 12,
      title: "Chicken Karahi",
      category: "Pakistani",
      image: "https://cdn.dummyjson.com/recipe-images/12.webp",
      price: 279,
      rating: 4.7,
    },
    {
      id: 13,
      title: "Aloo Keema",
      category: "Pakistani",
      image: "https://cdn.dummyjson.com/recipe-images/13.webp",
      price: 259,
      rating: 4.5,
    },
    {
      id: 14,
      title: "Chapli Kebabs",
      category: "Pakistani",
      image: "https://cdn.dummyjson.com/recipe-images/14.webp",
      price: 239,
      rating: 4.6,
    },
    {
      id: 15,
      title: "Saag with Makki di Roti",
      category: "Indian",
      image: "https://cdn.dummyjson.com/recipe-images/15.webp",
      price: 189,
      rating: 4.7,
    },
    {
      id: 16,
      title: "Japanese Ramen Soup",
      category: "Japanese",
      image: "https://cdn.dummyjson.com/recipe-images/16.webp",
      price: 329,
      rating: 4.8,
    },
    {
      id: 17,
      title: "Moroccan Chickpea Tagine",
      category: "Moroccan",
      image: "https://cdn.dummyjson.com/recipe-images/17.webp",
      price: 249,
      rating: 4.5,
    },
    {
      id: 18,
      title: "Korean Bibimbap",
      category: "Korean",
      image: "https://cdn.dummyjson.com/recipe-images/18.webp",
      price: 359,
      rating: 4.9,
    },
    {
      id: 19,
      title: "Greek Moussaka",
      category: "Greek",
      image: "https://cdn.dummyjson.com/recipe-images/19.webp",
      price: 339,
      rating: 4.6,
    },
    {
      id: 20,
      title: "Butter Chicken",
      category: "Indian",
      image: "https://cdn.dummyjson.com/recipe-images/20.webp",
      price: 319,
      rating: 4.9,
    },
    {
      id: 21,
      title: "Paneer Butter Masala",
      category: "Indian",
      image: "https://cdn.dummyjson.com/recipe-images/21.webp",
      price: 269,
      rating: 4.8,
    },
    {
      id: 22,
      title: "Veg Fried Rice",
      category: "Chinese",
      image: "https://cdn.dummyjson.com/recipe-images/22.webp",
      price: 199,
      rating: 4.4,
    },
    {
      id: 23,
      title: "Hakka Noodles",
      category: "Chinese",
      image: "https://cdn.dummyjson.com/recipe-images/23.webp",
      price: 219,
      rating: 4.5,
    },
    {
      id: 24,
      title: "Masala Dosa",
      category: "South Indian",
      image: "https://cdn.dummyjson.com/recipe-images/24.webp",
      price: 179,
      rating: 4.8,
    },
    {
      id: 25,
      title: "Idli Sambar",
      category: "South Indian",
      image: "https://cdn.dummyjson.com/recipe-images/25.webp",
      price: 149,
      rating: 4.6,
    },
    {
      id: 26,
      title: "Chole Bhature",
      category: "North Indian",
      image: "https://cdn.dummyjson.com/recipe-images/26.webp",
      price: 199,
      rating: 4.7,
    },
    {
      id: 27,
      title: "Pav Bhaji",
      category: "Street Food",
      image: "https://cdn.dummyjson.com/recipe-images/27.webp",
      price: 179,
      rating: 4.5,
    },
    {
      id: 28,
      title: "Cheese Burger",
      category: "Fast Food",
      image: "https://cdn.dummyjson.com/recipe-images/28.webp",
      price: 249,
      rating: 4.4,
    },
    {
      id: 29,
      title: "French Fries",
      category: "Fast Food",
      image: "https://cdn.dummyjson.com/recipe-images/29.webp",
      price: 129,
      rating: 4.3,
    },
    {
      id: 30,
      title: "Veg Momos",
      category: "Chinese",
      image: "https://cdn.dummyjson.com/recipe-images/30.webp",
      price: 159,
      rating: 4.6,
    },
    {
      id: 31,
      title: "Chicken Momos",
      category: "Chinese",
      image: "https://cdn.dummyjson.com/recipe-images/31.webp",
      price: 199,
      rating: 4.8,
    },
    {
      id: 32,
      title: "Tandoori Chicken",
      category: "Indian",
      image: "https://cdn.dummyjson.com/recipe-images/32.webp",
      price: 379,
      rating: 4.9,
    },
    {
      id: 33,
      title: "Fish Curry",
      category: "Seafood",
      image: "https://cdn.dummyjson.com/recipe-images/33.webp",
      price: 329,
      rating: 4.7,
    },
    {
      id: 34,
      title: "Grilled Sandwich",
      category: "Snacks",
      image: "https://cdn.dummyjson.com/recipe-images/34.webp",
      price: 149,
      rating: 4.4,
    },
    {
      id: 35,
      title: "Chocolate Cake",
      category: "Dessert",
      image: "https://cdn.dummyjson.com/recipe-images/35.webp",
      price: 229,
      rating: 4.9,
    },
    {
      id: 36,
      title: "Brownie",
      category: "Dessert",
      image: "https://cdn.dummyjson.com/recipe-images/36.webp",
      price: 169,
      rating: 4.8,
    },
    {
      id: 37,
      title: "Vanilla Ice Cream",
      category: "Dessert",
      image: "https://cdn.dummyjson.com/recipe-images/37.webp",
      price: 119,
      rating: 4.6,
    },
    {
      id: 38,
      title: "Mango Shake",
      category: "Beverages",
      image: "https://cdn.dummyjson.com/recipe-images/38.webp",
      price: 139,
      rating: 4.5,
    },
    {
      id: 39,
      title: "Cold Coffee",
      category: "Beverages",
      image: "https://cdn.dummyjson.com/recipe-images/39.webp",
      price: 159,
      rating: 4.7,
    },
    {
      id: 40,
      title: "Oreo Shake",
      category: "Beverages",
      image: "https://cdn.dummyjson.com/recipe-images/40.webp",
      price: 189,
      rating: 4.8,
    },
    {
      id: 41,
      title: "Caesar Salad",
      category: "Salad",
      image: "https://cdn.dummyjson.com/recipe-images/41.webp",
      price: 239,
      rating: 4.4,
    },
    {
      id: 42,
      title: "Greek Salad",
      category: "Salad",
      image: "https://cdn.dummyjson.com/recipe-images/42.webp",
      price: 229,
      rating: 4.5,
    },
    {
      id: 43,
      title: "Butter Naan",
      category: "Bread",
      image: "https://cdn.dummyjson.com/recipe-images/43.webp",
      price: 49,
      rating: 4.7,
    },
    {
      id: 44,
      title: "Garlic Naan",
      category: "Bread",
      image: "https://cdn.dummyjson.com/recipe-images/44.webp",
      price: 69,
      rating: 4.8,
    },
    {
      id: 45,
      title: "Plain Roti",
      category: "Bread",
      image: "https://cdn.dummyjson.com/recipe-images/45.webp",
      price: 25,
      rating: 4.3,
    },
    {
      id: 46,
      title: "Dal Tadka",
      category: "Indian",
      image: "https://cdn.dummyjson.com/recipe-images/46.webp",
      price: 189,
      rating: 4.6,
    },
    {
      id: 47,
      title: "Rajma Chawal",
      category: "Indian",
      image: "https://cdn.dummyjson.com/recipe-images/47.webp",
      price: 209,
      rating: 4.7,
    },
    {
      id: 48,
      title: "Kadai Paneer",
      category: "Indian",
      image: "https://cdn.dummyjson.com/recipe-images/48.webp",
      price: 289,
      rating: 4.8,
    },
    {
      id: 49,
      title: "Malai Kofta",
      category: "Indian",
      image: "https://cdn.dummyjson.com/recipe-images/49.webp",
      price: 299,
      rating: 4.9,
    },
    {
      id: 50,
      title: "Gulab Jamun",
      category: "Dessert",
      image: "https://cdn.dummyjson.com/recipe-images/50.webp",
      price: 99,
      rating: 4.8,
    },
  ]);

  let deleteItems = (id) => {
    let cards = zomatoData.filter((elem) => elem.id !== id);
    setZomatoData(cards);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-red-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
          <h1 className="text-3xl font-bold">🍽️ Zomato Clone</h1>

          <p className="bg-white text-red-500 px-4 py-2 rounded-full font-semibold">
            Total Items: {zomatoData.length}
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto py-10 px-6">
        <div className="flex flex-wrap justify-center gap-8">
          {zomatoData.map((elem) => (
            <ZomatoCards key={elem.id} item={elem} del={deleteItems} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
