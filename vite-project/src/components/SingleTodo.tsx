import { Todo } from "../model";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const SingleTodo = ({ todos, setTodos, todo, index }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  console.log(editTodo);
  const handleCheck = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
          onSubmit={(e) => handleEdit(e, todo.id)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div
            className="p-3 border border-solid rounded-md w-full
        flex justify-between bg-white"
          >
            {edit ? (
              <input
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
              />
            ) : (
              <span className={`${todo.isDone ? "line-through" : ""}`}>
                {todo.todo}
              </span>
            )}
            <div className="flex items-center gap-3 justify-end hover:cursor-pointer">
              <span>
                <MdDeleteOutline onClick={() => handleDelete(todo.id)} />
              </span>
              <span>
                <MdOutlineModeEdit
                  onClick={() => {
                    if (!edit && !todo.isDone) {
                      setEdit(!edit);
                    }
                  }}
                />
              </span>
              <span>
                <FaRegCheckCircle onClick={() => handleCheck(todo.id)} />
              </span>
            </div>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
