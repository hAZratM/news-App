import { motion } from "framer-motion";
import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(undefined);

  const addTodo = (todo) => {
    setTodoList([...todoList, todo]);
  };

  const deleteTodo = (index) => {
    const newTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(newTodoList);

    if (editingIndex === index) {
      setEditingIndex(undefined);
      setTodoValue("");
    }
  };

  const editTodo = (index) => {
    const itemToEdit = todoList[index];
    setTodoValue(itemToEdit);
    setEditingIndex(index);
  };

  const updateTodo = (index, newTodo) => {
    const newTodoList = [...todoList];
    newTodoList[index] = newTodo;
    setTodoList(newTodoList);
    setEditingIndex(undefined);
    setTodoValue("");
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-6 px-6 bg-slate-100 w-screen h-dvh text-slate-900"
    >
      <div className="w-full max-w-lg mx-auto p-4 md:p-6 pb-30">
        <TodoInput
          todoValue={todoValue}
          setTodoValue={setTodoValue}
          addTodo={addTodo}
          updateTodo={updateTodo}
          editingIndex={editingIndex}
        />
        {todoList.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-gray-500 text-center bg-slate-50 p-4 rounded-md shadow-sm"
          >
            No tasks yet, add some!
          </motion.p>
        ) : (
          <TodoList
            editTodo={editTodo}
            deleteTodo={deleteTodo}
            todos={todoList}
            editingIndex={editingIndex}
          />
        )}
      </div>
    </motion.main>
  );
};

export default App;
