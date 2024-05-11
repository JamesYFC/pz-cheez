import "./App.css";

import { useState } from "react";
import useApi from "./hooks/useApi";

function App() {
  const { loading, data } = useApi("/cheeses");

  if (loading)
    return <p>Loading...</p>


  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Fetched.</h1>
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
