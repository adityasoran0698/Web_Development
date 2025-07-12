import "./App.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import UserDetails from "./components/UserDetails";
function App() {
  const [Submitted, setSubmitted] = useState(false);
  const [SubmittedData, setSubmittedData] = useState(null);
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  async function onSubmit(data) {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    console.log("Form submitted:", data);
    setSubmitted(true);
    setSubmittedData(data);
  }

  return (
    <>
    <div className="container">
      <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name: </label>
        <input
          className={errors.fname ? "errorClass" : ""}
          {...register("fname", {
            required: "First name is required.",
            maxLength: {
              value: 20,
              message: "First name should not exceed 20 characters.",
            },
            minLength: {
              value: 3,
              message: "First name should be at least 3 characters long.",
            },
          })}
        />
        {errors.fname && <h2>{errors.fname.message}</h2>}
        <br />
        <br />
        <label>Middle Name: </label>
        <input
          className={errors.mname ? "errorClass" : ""}
          {...register("mname", {
            maxLength: {
              value: 20,
              message: "Middle name should not exceed 20 characters.",
            },
            minLength: {
              value: 3,
              message: "Middle name should be at least 3 characters long.",
            },
          })}
        />
        {errors.mname && <h2>{errors.mname.message}</h2>}
        <br />
        <br />

        <label>Last Name: </label>
        <input
          className={errors.lname ? "errorClass" : ""}
          {...register("lname", {
            required: "Last name is required",
            maxLength: {
              value: 20,
              message: "Last name should not exceed 20 characters.",
            },
            minLength: {
              value: 3,
              message: "Last name should be at least 3 characters long.",
            },
          })}
        />
        {errors.lname && <h2> {errors.lname.message}</h2>}
        <br />
        <br />
        <label>Password: </label>
        <input
          className={errors.pname ? "errorClass" : ""}
          type="password"
          {...register("pname", {
            required: "Password is required",
            maxLength: {
              value: 6,
              message: "Password must be 6 characters long",
            },
            minLength: {
              value: 6,
              message: "Password must be 6 characters long",
            },
          })}
        />
        {errors.password && <h2>{errors.password.message}</h2>}
        <br />
        <br />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting the form...." : "Submit"}
        </button>
        <br />
        {Submitted && (
          <button type="button" onClick={()=>setShow(true)}>Check User Details</button>
        )}
        {show && (
          <UserDetails data={SubmittedData}/>
        )}
      </form>
      </div>
      </div>
    </>
  );
}

export default App;
