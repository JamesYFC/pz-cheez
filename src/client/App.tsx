import "./App.css";

import useApi from "./hooks/useApi";
import { CheeseItem } from "./components/CheeseItem";
import { Cheese } from "../definitions/swagger";
import { useState } from "react";

function App() {
  const { loading, data: cheeseData } = useApi<Record<string, Cheese>>("/cheeses", {});
  const [priceQuantities, setPriceQuantities] = useState<Record<string, number>>({});

  if (loading)
    return <p>Loading...</p>

  // todo include subtotals in a neat way (right to left next to total price?)
  return (
    <div className="App">
      <h1 className="text-3xl font-semibold mb-4">Welcome to the PZ Cheeseria</h1>
      <div className="flex flex-wrap mb-4 text-stone-600">
        {Object.values(cheeseData).map((cheese, index) =>
          <CheeseItem
            key={index}
            cheese={cheese}
            quantity={priceQuantities[cheese.id] || 0}
            onQuantityChange={(value) => !isNaN(value)
              && setPriceQuantities({
              ...priceQuantities,
              [cheese.id]: value
            })}
          />)}
      </div>
      <div className="absolute bottom-0 right-0 p-3 bg-slate-700">
        <label>Total:</label>
        <div className="font-semibold text-xl">${Object.entries(priceQuantities)
          .reduce(
            (acc, [id, quantity]) => acc + (cheeseData[id].price ?? 0) * quantity,
            0
          ).toFixed(2)}</div>
      </div>
    </div>
  );
}

export default App;
