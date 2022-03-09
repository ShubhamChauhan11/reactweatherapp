import Axios from "axios";

import "bootstrap-icons/font/bootstrap-icons.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Start from "./components/Start";
import Weather from "./components/Weather";
document.body.style = "background: blue";
function App() {
  const [input, setInput] = useState();

  const [Data, setData] = useState();
  const fetchData = async (e) => {
    e.preventDefault();

    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=6b9ff54c2663790fbf313746d010e920`
    ).catch((err) => {
      alert("city not found");
    });

    if (response) {
      setData(response.data);
    }
  };
  console.log(Data);

  return (
    <div className="app ">
      <div>
        {Data && input ? (
          <Weather
            input={input}
            setInput={setInput}
            Data={Data}
            setData={setData}
          />
        ) : (
          <Start input={input} setInput={setInput} fetchData={fetchData} />
        )}
      </div>
    </div>
  );
}

export default App;
