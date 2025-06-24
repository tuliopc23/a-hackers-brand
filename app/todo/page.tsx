"use client";
import { useState } from "react";

export default function TodoPage() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput("");
    }
  };

  const removeTodo = (idx: number) => {
    setTodos(todos.filter((_, i) => i !== idx));
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
        <div className="flex mb-4">
          <input
            className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') addTodo(); }}
            placeholder="Add a new task..."
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos.length === 0 && (
            <li className="text-gray-400 text-center">No tasks yet.</li>
          )}
          {todos.map((todo, idx) => (
            <li key={idx} className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded">
              <span>{todo}</span>
              <button
                className="text-red-500 hover:text-red-700 font-bold"
                onClick={() => removeTodo(idx)}
                aria-label="Remove"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}