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
      <div className="Main flex items-center bg-white/25 h-1/3 w-1/3 rounded-2xl border border-white p-8 flex-col gap-4 relative">
        <InputBox
          label="From"
          amount={amount}
          currencyOptions={options}
          onAmountChange={(amt) => setAmount(amt)}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
        />

        <button onClick={swap} className="absolute bg-blue-400 hover:bg-blue-300 rounded-2xl px-7 py-2 cursor-pointer top-[35.5%] border">
          Swap
        </button>

        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
        />

        <div className="w-full">
          <button onClick={convert} className="bg-blue-400 rounded-2xl p-4 cursor-pointer w-full hover:bg-blue-300 border">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
