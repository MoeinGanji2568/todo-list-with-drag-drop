import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodo: Todo[];
  setCompletedTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodo,
  setCompletedTodo,
}) => {
  return (
    <div className="flex lg:flex-nowrap flex-wrap gap-3 min-w-[380px] w-3/4">
      <Droppable droppableId="TodoList">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="bg-green-300 p-3 rounded-md flex flex-col gap-2 min-w-[380px]"
          >
            <h2 className="my-2 px-1">Active Task</h2>{" "}
            {todos.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={todos}
                setTodos={setTodos}
                todo={todo}
                key={todo.id}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodoRemove">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="p-3 bg-red-300 rounded-md flex flex-col gap-2 min-w-[380px]"
          >
            <h2 className="my-2 px-1">Complete Task</h2>
            {completedTodo.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={completedTodo}
                setTodos={setCompletedTodo}
                todo={todo}
                key={todo.id}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
