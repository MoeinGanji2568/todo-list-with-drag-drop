import { FC, useState } from "react";
import "./App.css";
import InputFields from "./components/inputFields";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);
  return (
    <div className="min-w-[380px] max-w-2xl flex flex-col justify-center items-center gap-5">
      <h1 className="text-blue-600">hello</h1>
      <InputFields todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <ul>
        {todos.map((todo) => (
          <li>{todo.todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
