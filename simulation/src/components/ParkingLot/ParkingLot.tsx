import React from "react";
import { AppConfig } from "../../utils/AppConfig";
import ParkingSpace from "../ParkingSpace/ParkingSpace";
import "./ParkingLot.component.css";

type Props = {};

function ParkingLot({}: Props) {
  return (
    <div className="parking-lot-wrapper">
      <div className="horizontal-row" id="parentTOP">
        {AppConfig.TopSpaces.map((value, index) => (
          <ParkingSpace number={value} key={index}></ParkingSpace>
        ))}
      </div>
      <div className="middle-grid">
        <div className="vertical-row" id="parentLEFT">
          {AppConfig.LeftSpaces.map((value, index) => (
            <ParkingSpace number={value} key={index}></ParkingSpace>
          ))}
        </div>
        <div id="parentMIDDLE">
          <div className="horizontal-row" id="parentMIDDLETOP">
            {AppConfig.MiddleTopSpaces.map((value, index) => (
              <ParkingSpace number={value} key={index}></ParkingSpace>
            ))}
          </div>
          <div className="horizontal-row" id="parentMIDDLEBOTTOM">
            {AppConfig.MiddleBottomSpaces.map((value, index) => (
              <ParkingSpace number={value} key={index}></ParkingSpace>
            ))}
          </div>
        </div>
        <div className="vertical-row" id="parentRIGHT">
          {AppConfig.RightSpaces.map((value, index) => (
            <ParkingSpace number={value} key={index}></ParkingSpace>
          ))}
        </div>
      </div>
      <div className="horizontal-row" id="parentBOTTOM">
        {AppConfig.BottomSpaces.map((value, index) => (
          <ParkingSpace number={value} key={index}></ParkingSpace>
        ))}
      </div>
    </div>
  );
}

export default ParkingLot;
