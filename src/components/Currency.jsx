import axios from "axios";
import React, { useState } from "react";
import { LuArrowRightLeft } from "react-icons/lu";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

const Currency = () => {
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");

  const exchange = async () => {
    const promise = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const r = (promise.data.data[toCurrency] * amount).toFixed(2);
    setResult(r);
  };

  return (
    <div className="border w-2/4 mx-auto rounded-lg">
      <div className="flex flex-row flex-shrink-0 justify-center align-baseline bg-black text-white p-5 text-2xl mt-5 rounded-t-lg">
        <h3>Döviz Kuru Hesaplama</h3>
      </div>
      <div className="flex flex-row flex-shrink-0 justify-center align-baseline my-5">
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="border rounded w-32 h-10 text-center font-semibold text-xl text-gray-500 focus:outline-none"
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="border rounded w-16 h-10 mx-5 text-center"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <LuArrowRightLeft className="text-4xl rounded-lg text-white" />
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="border rounded w-16 h-10 mx-5 text-center"
        >
          <option>TRY</option>
          <option>EUR</option>
          <option>USD</option>
        </select>
        <input
          value={result}
          onChange={(e) => setResult(e.target.value)}
          type="number"
          className="border rounded w-32 h-10 text-center font-semibold text-xl text-gray-500 focus:outline-none"
        />
      </div>
      <div className="text-center">
        <button
          onClick={exchange}
          className="bg-blue-500 text-white font-semibold text-2xl p-2 rounded border border-gray-300 m-2 hover:bg-blue-700"
        >
          Hesapla
        </button>
      </div>
    </div>
  );
};

export default Currency;
