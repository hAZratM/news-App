import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoCard = ({ todo, index, editTodo, deleteTodo, isEditing }) => {
  return (
    <li
      className={`my-3 bg-white p-3 rounded-md border-l-4 shadow-sm
        flex items-center justify-between gap-3 transition-all duration-300
        ${isEditing ? "border-red-500 scale-[1.02]" : "border-blue-500"}
        hover:shadow-lg hover:-translate-y-[2px]  hover:bg-white`}
    >
      <div className="flex-1 text-slate-800 text-lg break-words">{todo}</div>
      <div className="flex items-center gap-3">
        <FiEdit
          className="text-gray-500 hover:text-blue-500 transition-all cursor-pointer"
          size={20}
          onClick={() => editTodo(index)}
        />
        <RiDeleteBin6Line
          className="text-red-500 hover:text-red-700 transition-all cursor-pointer"
          size={20}
          onClick={() => deleteTodo(index)}
        />
      </div>
    </li>
  );
};

export default TodoCard;
