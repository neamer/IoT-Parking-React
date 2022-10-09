import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppHeader from "./components/header/AppHeader";
import ParkingLot from "./components/ParkingLot/ParkingLot";

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <main>
        <ParkingLot></ParkingLot>
      </main>
    </div>
  );
}

export default App;
