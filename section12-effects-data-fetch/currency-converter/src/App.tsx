import { useEffect, useState } from "react";

const curr = ["USD", "EUR", "CAD", "INR", "BRL"];

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
function App() {
  const [amount, setAmount] = useState(1);
  const [currency, setCurrency] = useState<CurrencyConverter>({ from: "USD", to: "BRL" });
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const sorted = curr.slice().sort((a, b) => a.localeCompare(b));

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${currency.from}&to=${currency.to}`)
      .then(res => res.json())
      .then(data => setConverted(data.rates[currency.to]))
      .finally(() => setIsLoading(false));
  }, [amount, currency]);

  function handleAmount(value: string) {
    const res = Number(value);
    if (res.toString() !== "NaN") {
      setAmount(res);
    }
  }

  return (
    <div className="container">
      <input type="text" value={amount} onChange={e => handleAmount(e.target.value)} />
      <select value={currency.from} onChange={e => setCurrency({ ...currency, from: e.target.value })}>
        {sorted.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <select value={currency.to} onChange={e => setCurrency({ ...currency, to: e.target.value })}>
        {sorted.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      {isLoading && <div>Loading...</div>}
      {!isLoading && <p>OUTPUT: {converted} {currency.to}</p>}
    </div>
  );
}

export default App;
