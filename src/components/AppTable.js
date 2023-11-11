import React, { useState } from "react";
import "../App.css";
import {
  GiTurtle,
  GiBulletBill,
  GiRabbit,
  GiCampfire,
  GiPlainCircle,
} from "react-icons/gi";
import { Table } from "ka-table";
import { DataType, SortDirection, SortingMode } from "ka-table/enums";

const AppTable = ({ columns, myData }) => {
  const [speedIcon, setSpeedIcon] = useState();

  return (
    <Table
      columns={columns}
      data={myData}
      rowKeyField={"id"}
      format={({ column, value }) => {
        if (column.key === "playerIcon") {
          return <GiPlainCircle />;
        }
        if (column.key === "time") {
         // setSpeedIcon(getSpeedIcon(getSpeed(value)));

          return <>{value}</>;
        }
      }}
    />
  );
};

export default AppTable;

const getSpeed = (time) => {
  const speed = time.split("+").shift();
  return speed;
};

//bullet 2 and below
//fire 5 to 3
//rabbit 6 to 29
//turtle 30 and up
const getSpeedIcon = (speed) => {
  if (speed <= 2) return <GiBulletBill />;
  if (speed <= 5) return <GiCampfire />;
  if (speed <= 29) return <GiRabbit />;
  return <GiTurtle />;
};
