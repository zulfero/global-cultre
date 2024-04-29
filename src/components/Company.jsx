import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Company() {

  const [price1, setPrice1] = useState(0);
  const [price2, setPrice2] = useState(0);
  const [price3, setPrice3] = useState(0);

  const navigate = useNavigate();

  const handlePriceChange1 = (e) => {
    setPrice1(e.target.value);
  };

  const handlePriceChange2 = (e) => {
    setPrice2(e.target.value);
  };

  const handlePriceChange3 = (e) => {
    setPrice3(e.target.value);
  };

  const handleBookNow= () => {
    navigate("/Qustionare"); 
  };

 
  return (
    <>
      <div className="h-[80vh] bg-stone-600">
        <h2 className="text-center font-bold text-2xl py-4 text-white">Tourist Companies</h2>
        <div className="flex justify-around py-9">
        
          <div className="h-[60vh] w-[400px] bg-stone-200 border rounded-3xl shadow-lg">
            <h4 className="text-center text-2xl  mt-6">Axix Africa Expendition & safaris</h4>
            <div className="">
              <div className="flex justify-center mt-10">
                <img src="src/images/Screenshot from 2024-04-24 19-43-00.png" className="rounded-full h-32 w-32" alt="Company 1" />
              </div>
              <div className="flex justify-around mb-6 mt-5">
              <h3 className="font-bold">Price per day</h3>
                <h3>{price1 === 0 ? "Select a site" : `$${price1}`}</h3>
              </div>
              <div className="flex justify-around ">
                <h3 className="text-2xl">Sites</h3>
                <select onChange={(e) => handlePriceChange1(e)}>
                  <option selected disabled>Select a destination</option>
                  <option value={100}>Nyali Beach</option>
                  <option value={50}>Tsavo</option>
                  <option value={70}>Maasai Mara</option>
                  <option value={30}>Impala</option>
                  <option value={20}>Kit Mikayi</option>
                </select>
              </div>
              <div className="flex justify-center item-center">
                <button onClick={handleBookNow} className="border rounded-full px-[4em] font-bold p-[1.4em] bg-stone-700 text-white mt-11">
                  Book Now
                </button>
              </div>
            </div>
          </div>

        
          <div className="h-[60vh] w-[400px] bg-stone-200 border rounded-3xl shadow-lg">
            <h4 className="text-center   mt-6 text-2xl">Hyrax Safaris</h4>
            <div className="">
              <div className="flex justify-center mt-10">
                <img src="src/images/Screenshot from 2024-04-24 20-23-45.png" className="rounded-full h-32 w-32" alt="Company 2" />
              </div>
              <div className="flex justify-around mb-6 mt-5">
                <h3 className="font-bold">Price per day</h3>
                <h3>{price2 === 0 ? "Select a site" : `$${price2}`}</h3>
              </div>
              <div className="flex justify-around">
                <h3 className="text-2xl">Sites</h3>
                <select onChange={(e) => handlePriceChange2(e)}>
                  <option selected disabled>Select a destination</option>
                  <option value={100}>Nyali Beach</option>
                  <option value={50}>Tsavo</option>
                  <option value={70}>Maasai Mara</option>
                  <option value={30}>Impala</option>
                  <option value={20}>Kit Mikayi</option>
                </select>
              </div>
              <div className="flex justify-center item-center">
                <button onClick={handleBookNow} className="border rounded-full px-[4em] font-bold p-[1.4em] bg-stone-700 text-white mt-11">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          
          <div className="h-[60vh] w-[400px] bg-stone-200 border rounded-3xl shadow-lg">
            <h4 className="text-center text-2xl  mt-6">Jockey tours and safaris</h4>
            <div className="">
              <div className="flex justify-center mt-10">
                <img src="src/images/Screenshot from 2024-04-24 20-21-24.png" className="rounded-full h-32 w-32" alt="Company 3" />
              </div>
              <div className="flex justify-around mb-6 mt-5">
              <h3 className="font-bold">Price per day</h3>
                <h3>{price3 === 0 ? "Select a site" : `$${price3}`}</h3>
              </div>
              <div className="flex justify-around">
                <h3 className="text-2xl">Sites</h3>
                <select onChange={(e) => handlePriceChange3(e)}>
                  <option selected disabled>Select a destination</option>
                  <option value={100}>Nyali Beach</option>
                  <option value={50}>Tsavo</option>
                  <option value={70}>Maasai Mara</option>
                  <option value={30}>Impala</option>
                  <option value={20}>Kit Mikayi</option>
                </select>
              </div>
              <div className="flex justify-center item-center">
                <button onClick={handleBookNow} className="border rounded-full px-[4em] font-bold p-[1.4em] bg-stone-700 text-white mt-11">
                  Book Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
  }

export default Company;
