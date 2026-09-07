import { useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const URL = `https://v6.exchangerate-api.com/v6/0fdba23198a91533a9eb96f6/latest/${currency}`;

    fetch(URL)
      .then((res) => res.json())
      .then((res) => setData(res.conversion_rates || {}));

    console.log(data);
  }, [currency]);
  console.log(data);

  return data;
};

export default useCurrencyInfo;
