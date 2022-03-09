import React from "react";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import "./Weather.css";

const Weather = (props) => {
  function reset() {
    props.setInput("");
    props.setData();
  }

  return (
    <div id="first">
      <div id="second">
        <h1 className="text-decoration-underline fw-bold mt-4 text-light">
          Current weather of {props.input}
        </h1>

        <div className="weatherreport">
          <div className="border border-dark border-4">
            <span className="fw-bold">
              {" "}
              {props.input}, {props.Data.sys.country}
            </span>
          </div>
          <div className="border border-dark border-4">
            <span className="fw-bold">{props.Data.weather[0].main}</span>
          </div>
          <div className="border border-dark border-4">
            <span className="fw-bold">temp: {props.Data.main.temp} </span>{" "}
            <FaTemperatureLow />
          </div>
          <div className="border border-dark border-4">
            <span className="fw-bold">
              temp_max: {props.Data.main.temp_max}
            </span>{" "}
            <FaTemperatureHigh />
          </div>
          <div className="border border-dark border-4">
            <span className="fw-bold">
              temp_min: {props.Data.main.temp_min}
            </span>{" "}
            <FaTemperatureLow />
          </div>
          <div className="border border-dark border-4">
            <span className="fw-bold">
              humidity: {props.Data.main.humidity} %
            </span>
          </div>
        </div>
        <button className="btn btn-danger pd-3 mt-3 fw-bold " onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default Weather;
