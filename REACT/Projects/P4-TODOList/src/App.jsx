import "./App.css";
import { useForm } from "react-hook-form";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const deleteTask = (index) => {
    let FinalData = submittedData.filter((v, i) => i != index);
    console.log(FinalData);
    setSubmittedData(FinalData);
  };
  const [submittedData, setSubmittedData] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  function onSubmit(data) {
    setSubmittedData((prev) => [...prev, data.task]);
    reset();
    setSubmitted(true);
  }
  return (
    <>
      <div className="container">
        <div className="box">
        <h1>TODO List App</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="todo">
            <input
              type="text"
              {...register("task", {
                required: "Please enter some task",
              })}
              placeholder="Add your task"
              id="addtask"
            />
            <input type="submit" value="Add" id="submitbutton" />
            
                        </div>
            {errors.task && <p>{errors.task.message}</p>}

            <div className="tasklist">
              {submitted && (
                <Tasks data={submittedData} deletetask={deleteTask} />
              )}
            
          </div>
        </form>
        </div>
      </div>
    </>
  );
}

export default App;
