import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="flex flex-col gap-3 min-w-[380px]">
      <SingleTodo todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoList;
