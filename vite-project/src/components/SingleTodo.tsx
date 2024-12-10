import { Todo } from "../model";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";

type Props = {
  todos: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const SingleTodo = ({ todos, setTodos }: Props) => {
  return (
    <>
      {todos.map((todo) => (
        <div
          className="p-2 border border-solid rounded-md w-full
        flex justify-between"
        >
          <span>{todo.todo}</span>
          <div className="flex items-center gap-3 justify-end hover:cursor-pointer">
            <span>
              <MdDeleteOutline />
            </span>
            <span>
              <MdOutlineModeEdit />
            </span>
            <span>
              <FaRegCheckCircle />
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default SingleTodo;
