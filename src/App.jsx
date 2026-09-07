import { InputBox } from "./components/index.js";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");

  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      {/* Main Screen */}
      <div className="min-h-screen w-full flex items-center justify-center px-3 py-6 sm:px-6 sm:py-8">
        {/* Main Converter Box */}
        <div className="Main relative flex w-full max-w-2xl flex-col gap-4 rounded-2xl border border-white bg-white/25 p-4 sm:p-6 md:p-8">
          {/* From + To Section */}
          <div className="relative flex flex-col gap-4">
            {/* From Currency */}
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onAmountChange={(amt) => setAmount(amt)}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
            />

            {/* To Currency */}
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
            />

            {/* Swap Button */}
            <button
              onClick={swap}
              className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-2xl border bg-blue-400 px-6 py-2 cursor-pointer hover:bg-blue-300 sm:px-7"
            >
              Swap
            </button>
          </div>

          {/* Convert Button */}
          <div className="w-full">
            <button
              onClick={convert}
              className="w-full rounded-2xl border bg-blue-400 p-4 cursor-pointer hover:bg-blue-300"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
