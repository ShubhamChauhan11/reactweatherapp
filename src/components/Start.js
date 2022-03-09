import React from "react";
import {} from "react-icons/fa";
import "./Start.css";
const Start = (props) => {
  const { input, setInput, fetchData } = props;

  console.log(input);
  return (
    <div className="container">
      <div className="first">
        <h1 className="text-decoration-underline fw-bolder mt-5 text-light">
          React Weather App
        </h1>
        <form onSubmit={fetchData}>
          <input
            className="form-control input-group-lg fw-bold"
            type="text"
            placeholder="type city"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
          <button
            disabled={!input}
            className="btn btn-primary mt-3 fw-bold"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
export default Start;
