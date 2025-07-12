import React, { useState } from "react";

const Tasks = ({ data, deletetask }) => {
  const [crossed, setCrossed] = useState([]);

  const toggleCross = (idx) => {
    if (crossed.includes(idx)) {
      setCrossed(crossed.filter((i) => i !== idx));
    } else {
      setCrossed([...crossed, idx]);
    }
  };

  return (
    <>
      {data.map((task, idx) => (
        <div key={idx} className="task-item">
          <span id="checkbox">
            <input
              type="checkbox"
              onChange={() => toggleCross(idx)}
              id="check"
            />
          </span>
          <span
            style={{
              textDecoration: crossed.includes(idx) ? "line-through" : "none",
            }}
          >
            {task}
          </span>

          <button type="button" onClick={() => deletetask(idx)} id="cross">
            X
          </button>
        </div>
      ))}
    </>
  );
};

export default Tasks;
