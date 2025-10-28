interface TemperatureInputProps {
  scale: 'celsius' | 'fahrenheit';
  temperature: string;
  onTemperatureChange: (temperature: string) => void;
}

function TemperatureInput({ scale, temperature, onTemperatureChange }: TemperatureInputProps) {
  return (
    <fieldset>
      <legend>Temperatura in {scale === 'celsius' ? 'Celsius' : 'Fahrenheit'}:</legend>
      <input 
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
}

export default TemperatureInput;