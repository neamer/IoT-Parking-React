import React, { useEffect, useState } from "react";
import "./ParkingSpace.component.css";
import { PositionHelper } from "./PositionHelper";
import { db } from "../../utils/firebase";
import { ref, onValue, set } from "firebase/database";

type Props = {
  number: number;
};

function ParkingSpace({ number }: Props) {
  const position: string = PositionHelper.calc(number);

  const [taken, setTaken] = useState(false);
  const dbReference = ref(db, number.toString());

  useEffect(() => {
    onValue(dbReference, (snapshot) => {
      setTaken(snapshot.val());
    });

    return () => {};
  }, []);

  const handleClick = () => {
    set(dbReference, !taken);
    setTaken(!taken);
  };

  return (
    <div
      className={
        "space space" +
        position +
        (taken ? " taken-space" : "") +
        PositionHelper.calcSpecialClass(number)
      }
      onClick={handleClick}
    >
      <img src={require("../../assets/img/car.png")} alt="car-icon" />
    </div>
  );
}

export default ParkingSpace;
