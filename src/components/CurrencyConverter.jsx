import { useEffect, useState } from "react";

export const CurrencyConverter = ({ totalAmount }) => {
  const [currency, setCurrency] = useState("USD");
  const [rate, setRate] = useState(0);

  const currencyList = [
    "AUD",
    "BRL",
    "CAD",
    "CHF",
    "CNY",
    "CZK",
    "DKK",
    "EUR",
    "GBP",
    "HKD",
    "HUF",
    "IDR",
    "ILS",
    "USD",
    "ISK",
    "JPY",
    "KRW",
    "MXN",
    "MYR",
    "NOK",
    "NZD",
    "PHP",
    "PLN",
    "RON",
    "SEK",
    "SGD",
    "THB",
    "TRY",
    "ZAR"
  ];

  useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?from=INR&to=${currency}`)
      .then(res => res.json())
      .then(data => {
        setRate(data.rates[currency]);
      });
  }, [currency]);

  const convertedAmount = (totalAmount * rate).toFixed(2);

  return (
    <div className="border rounded-lg px-4 py-6 space-y-4 bg-blue-50">

      <h2 className="text-xl font-medium">Currency Conversion</h2>

      {/* Dropdown */}
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="border px-3 py-2 rounded-lg w-full"
      >
        {currencyList.map((cur) => (
          <option key={cur} value={cur}>{cur}</option>
        ))}
      </select>

      {/* Conversion */}
      <div className="text-center">
        <p className="text-sm text-gray-500">Converted Total</p>
        <p className="text-2xl font-bold">
          {currency} {convertedAmount}
        </p>
      </div>

    </div>
  );
};