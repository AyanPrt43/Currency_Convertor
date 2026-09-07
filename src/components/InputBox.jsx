function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
}) {
  return (
    <div className="flex w-full flex-col gap-4 rounded-2xl bg-white/30 p-4 sm:flex-row sm:items-end sm:justify-between sm:p-5">
      {/* Amount Section */}
      <div className="flex w-full flex-col sm:flex-1">
        <label className="mb-2">{label}</label>

        <input
          type="number"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className="w-full rounded-2xl bg-black/40 p-2 outline-none"
        />
      </div>

      {/* Currency Section */}
      <div className="flex w-full flex-col sm:w-auto">
        <label className="mb-2">Currency Type</label>

        <select
          className="h-10 w-full rounded-2xl bg-black/40 px-3 outline-none sm:w-32"
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
