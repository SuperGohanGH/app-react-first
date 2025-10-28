interface ChildProps {
    count: number;
    onIncrement: () => void;
}


function Child({ count, onIncrement }: ChildProps) {
  return (
    <div>
      <p>Child: {count}</p>
      <button onClick={onIncrement}>Incrementa</button>
    </div>
  );
}

export default Child;
