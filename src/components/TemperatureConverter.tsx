import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (value: string) => {
    setCelsius(value);
    const numberValue = Number(value);
    setFahrenheit(value ? ((numberValue * 9) / 5 + 32).toFixed(2) : "");
  };

  const handleFahrenheitChange = (value: string) => {
    setFahrenheit(value);
    const numberValue = Number(value);
    setCelsius(value ? (((numberValue - 32) * 5) / 9).toFixed(2) : "");
  };

  return (
    <div>
      <TemperatureInput
        scale="celsius"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="fahrenheit"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
    </div>
  );
}

export default TemperatureConverter;
