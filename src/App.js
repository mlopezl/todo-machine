import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: "Tarea 1", completed: true},
  { text: "Tarea 2", completed: true},
  { text: "Tarea 3", completed: false},
  { text: "Tarea 4", completed: false}
];

function App() {
  return (
    <div className="App">
      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>
      <TodoList>
      {defaultTodos.map(todo => (
        <TodoItem key={todo.text} tarea={todo.text} completed={todo.completed}/>
      ))}
      </TodoList>
      <CreateTodoButton/>
      </div>
  );
}

export default App;
