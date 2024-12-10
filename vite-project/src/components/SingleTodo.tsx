import { Todo } from "../model";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const SingleTodo = ({ todos, setTodos }: Props) => {
  const handleCheck = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  return (
    <>
      {todos.map((todo) => (
        <div
          className="p-2 border border-solid rounded-md w-full
        flex justify-between"
        >
          <span className={`${todo.isDone ? "line-through" : ""}`}>
            {todo.todo}
          </span>
          <div className="flex items-center gap-3 justify-end hover:cursor-pointer">
            <span>
              <MdDeleteOutline />
            </span>
            <span>
              <MdOutlineModeEdit />
            </span>
            <span>
              <FaRegCheckCircle onClick={() => handleCheck(todo.id)} />
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default SingleTodo;
