import "./App.css";

import useApi from "./hooks/useApi";
import { CheeseItem } from "./components/CheeseItem";
import { Cheese } from "../definitions/swagger";

function App() {
  const { loading, data } = useApi<Cheese[]>("/cheeses", []);

  if (loading)
    return <p>Loading...</p>

  return (
    <div className="App">
      <div className="flex flex-wrap mb-4">
        {data.map((cheese, index) => <CheeseItem key={index} cheese={cheese} />)}
      </div>
    </div>
  );
}

export default App;
