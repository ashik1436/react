import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false }
  ]);

  const [newTodo, setNewTodo] = useState("");

  // Add new task
  const addNewTask = () => {
    if (newTodo.trim() === "") return;

    setTodos((prev) => [
      ...prev,
      { task: newTodo, id: uuidv4(), isDone: false }
    ]);

    setNewTodo("");
  };

  // Input change
  const updateTodoValue = (e) => {
    setNewTodo(e.target.value);
  };

  // Delete task
  const deleteTodo = (id) => {
    setTodos((prev) =>
      prev.filter((todo) => todo.id !== id)
    );
  };

  // Uppercase all tasks
  const upperCaseAll = () => {
    setTodos((prev) =>
      prev.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase()
      }))
    );
  };

  // Uppercase one task
  const upperCaseOne = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, task: todo.task.toUpperCase() }
          : todo
      )
    );
  };

  // Toggle done (better than only true)
  const toggleDone = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, isDone: !todo.isDone }
          : todo
      )
    );
  };

  return (
    <div>
      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />

      <button onClick={addNewTask}>Add Task</button>

      <hr />

      <button onClick={upperCaseAll}>
        Uppercase All Tasks
      </button>

      <h4>Tasks Todo</h4>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.isDone
                  ? "line-through"
                  : "none",
                marginRight: "10px"
              }}
            >
              {todo.task}
            </span>

            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>

            <button onClick={() => upperCaseOne(todo.id)}>
              Uppercase One
            </button>

            <button onClick={() => toggleDone(todo.id)}>
              {todo.isDone ? "Undo" : "Done"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}