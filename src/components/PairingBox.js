import React from "react";
import "../App.css";

function PairingBox({timeControl, timeFormat}) {

  return (
    <div className="pairingBox centered">
      <div>{timeControl}</div>
      <div>{timeFormat}</div>
    </div>
  );
}

export default PairingBox;




