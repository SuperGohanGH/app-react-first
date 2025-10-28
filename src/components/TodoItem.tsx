import type { ITodo } from '../types';

interface TodoItemProps {
  todo: ITodo;
  onToggle: (id: number) => void;
}

function TodoItem({ todo, onToggle }: TodoItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span style={{
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}>
        {todo.text}
      </span>
    </li>
  );
}

export default TodoItem;  