import { Input, Space } from "antd";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputFields: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <Space.Compact>
      <form onSubmit={handleAdd}>
        <Input
          placeholder="type something..."
          className="w-[350px]"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </Space.Compact>
  );
};

export default InputFields;
