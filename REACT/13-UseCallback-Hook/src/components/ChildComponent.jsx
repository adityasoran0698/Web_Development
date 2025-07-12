import React from "react";

const ChildComponent = React.memo((props) => {
  console.log("ChildComponent is Re-rendered");

  return (
    <div>
      <button onClick={props.handleclick}>{props.buttonName}</button>
    </div>
  );
});
export default ChildComponent;
