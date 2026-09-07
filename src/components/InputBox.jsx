function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
}) {
  return (
    <div className="bg-white/30 flex w-full h-29 justify-between p-5 rounded-2xl">
      <div className="flex flex-col">
        <label className="mb-2">{label}</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          className="bg-black/40 rounded-2xl p-2 outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-2">Currency Type</label>
        <select
          className="bg-black/40 rounded-2xl h-10 outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((curr) => (
            <option value={curr} key={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;