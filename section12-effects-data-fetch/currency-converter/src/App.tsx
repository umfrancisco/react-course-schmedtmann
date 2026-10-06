import { useEffect, useState } from "react";

function App() {
  const [currency, setCurrency] = useState<CurrencyConverter>({ from: "EUR", to: "USD" });

  useEffect(() => {
    fetch(`https://api.frankfurter.dev/v1/latest?amount=100&from=${currency.from}&to=${currency.to}`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, [currency]);

  return (
    <div>
      <input type="text" />
      <select onChange={(e) => setCurrency({ ...currency, from: e.target.value})}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e) => setCurrency({ ...currency, to: e.target.value})}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{currency.from} : {currency.to}</p>
    </div>
  );
}

export default App;
