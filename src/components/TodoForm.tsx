import { useState } from 'react';

interface TodoFormProps {
    onAddTodo: (text: string) => void;
}
    
function TodoForm({ onAddTodo }: TodoFormProps) {
  const [text, setText] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text);
      setText('');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nuovo todo..."
      />
      <button type="submit">Aggiungi</button>
    </form>
  );
}

export default TodoForm;