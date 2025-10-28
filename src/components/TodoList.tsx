import TodoItem from './TodoItem';
import type { ITodo } from '../types';

interface TodoListProps {
  todos: ITodo[];
  onToggleTodo: (id: number) => void;
}

function TodoList({ todos, onToggleTodo }: TodoListProps) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggleTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;