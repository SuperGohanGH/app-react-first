import { useState } from 'react';
import Child from './Child';

// Esempio base di flusso di dati
function Parent() {
  const [count, setCount] = useState(0);

//Funzione di callback
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Parent: {count}</h2>
      <Child 
        count={count} 
        onIncrement={handleIncrement} 
      />
      <Child
        count={count} 
        onIncrement={handleIncrement} 
      />
    </div>
  );
}

export default Parent;