const TodoInput = ({
  addTodo,
  todoValue,
  setTodoValue,
  updateTodo,
  editingIndex,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && todoValue.trim() !== "") {
      if (editingIndex !== undefined) {
        updateTodo(editingIndex, todoValue);
      } else {
        addTodo(todoValue);
      }
      setTodoValue("");
    }
  };

  return (
    <header>
      <h1 className="text-3xl font-bold uppercase pt-4 text-center sm:text-left">
        ToDo<span className="text-blue-600">Me</span>
      </h1>

      <div className="w-full flex flex-col sm:flex-row items-center bg-slate-200 px-3 py-4 rounded-md my-6 gap-2 sm:gap-4 shadow-sm">
        <input
          value={todoValue}
          onKeyDown={handleKeyDown}
          onChange={(e) => setTodoValue(e.target.value)}
          type="text"
          placeholder="What needs to be done?"
          className={`w-full sm:flex-1 focus:outline-none p-2 rounded-md bg-slate-100 ring-1 ${
            editingIndex !== undefined ? "ring-blue-400" : "ring-blue-400"
          } focus:ring-blue-600 focus:bg-white/80 transition-all duration-300`}
        />
        <button
          onClick={() => {
            if (todoValue.trim() === "") return;
            if (editingIndex !== undefined) {
              updateTodo(editingIndex, todoValue);
            } else {
              addTodo(todoValue);
            }
            setTodoValue("");
          }}
          className={`px-4 py-2 rounded-md text-white w-full sm:w-auto transition-all duration-300 ${
            todoValue.trim() === ""
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
          }`}
          disabled={todoValue.trim() === ""}
        >
          {editingIndex !== undefined ? "Update" : "Add"}
        </button>
      </div>
    </header>
  );
};

export default TodoInput;
