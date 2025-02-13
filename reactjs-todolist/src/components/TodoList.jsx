import TodoCard from "./TodoCard";
import { motion, AnimatePresence } from "framer-motion";

const TodoList = ({ editTodo, deleteTodo, todos, editingIndex }) => {
  return (
    <div>
      <ul>
        <AnimatePresence>
          {todos.map((todo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <TodoCard
                todo={todo}
                index={index}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
                isEditing={editingIndex === index}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default TodoList;
