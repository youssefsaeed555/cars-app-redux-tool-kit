import { useState } from "react";
import CarForms from "./components/CarForms";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

function App() {
  return (
    <div className="container is-fluid">
      <CarForms />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}

export default App;
