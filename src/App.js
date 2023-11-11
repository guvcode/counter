import React, { useState } from "react";
import { Table } from "ka-table";
import { DataType, SortDirection, SortingMode } from "ka-table/enums";
import PairingBox from "./components/PairingBox";
import AppTable from "./components/AppTable";
import "./App.css";
import "./kaoveride.css";

function App() {
  const [visibleTab, setVisibleTab] = useState("Quick Pairing");

  const changeTab = (tab) => {
    setVisibleTab(tab);
  };

  const quickPairingData = [
    { timeControl: "1 + 0", timeformat: "Bullet" },
    { timeControl: "2 + 1", timeformat: "Bullet" },
    { timeControl: "3 + 0", timeformat: "Blitz" },
    { timeControl: "3 + 2", timeformat: "Blitz" },
    { timeControl: "5 + 0", timeformat: "Blitz" },
    { timeControl: "5 + 3", timeformat: "Blitz" },
    { timeControl: "10 + 0", timeformat: "Rapid" },
    { timeControl: "10 + 5", timeformat: "Rapid" },
    { timeControl: "15 + 10", timeformat: "Rapid" },
    { timeControl: "30 + 0", timeformat: "Classical" },
    { timeControl: "30 + 20", timeformat: "Classical" },
    { timeControl: " ", timeformat: "Custom" },
  ];

  const lobbyColumns = [
    { key: "playerIcon", title: "", dataType: DataType.String },
    { key: "player", title: "Player", dataType: DataType.String },
    { key: "rating", title: "Rating", dataType: DataType.String },
    { key: "time", title: "Time", dataType: DataType.String },
    { key: "modeIcon", title: "", dataType: DataType.String },
    { key: "mode", title: "Mode", dataType: DataType.String },
  ];


  const lobbyData = [
    { player: "annonymous", rating: "", time: "2+3", mode: "Casual", id: 1 },
    { player: "annonymous", rating: "", time: "4+3", mode: "Casual", id: 2 },
    { player: "annonymous", rating: "", time: "10+3", mode: "Casual", id: 3 },
    { player: "annonymous", rating: "", time: "30+3", mode: "Casual", id: 4 },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <div className="pagemenu">
          <a href="#" onClick={() => changeTab("Quick Pairing")}>
            Quick Pairing
          </a>{" "}
          <a href="#" onClick={() => changeTab("Lobby")}>
            Lobby
          </a>
          <a href="#">Correspondence</a>
        </div>
        <div className="quickPairBox">
          {quickPairingData.map((item, index) =>
            visibleTab === "Quick Pairing" ? (
              <PairingBox
                key={index}
                timeControl={item.timeControl}
                timeFormat={item.timeformat}
              />
            ) : null
          )}
        </div>
        {visibleTab === "Lobby" ? (
          <AppTable
            width="50%"
            columns={lobbyColumns}
            rowKeyField={"id"}
            myData={lobbyData}
          />
        ) : null}
      </header>
    </div>
  );
}

export default App;

const AppButton = ({ text, color, operation }) => {
  return (
    <button
      style={{ fontSize: "100%", backgroundColor: color, width: "150px" }}
      onClick={operation}
    >
      {text}
    </button>
  );
};


//todo - move the speed icon to the mode column