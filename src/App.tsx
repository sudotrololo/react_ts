import React, { useState } from "react";
import { Input } from "./components/Input";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { ITodo } from "./interfaces";

const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = (title: string) => {
        const newTodo: ITodo = {
            id: Math.floor(Date.now() * Math.random()),
            title: title,
            isChecked: false,
        };
        setTodos((prev) => [newTodo, ...prev]);
    };

    const delTodo = (id: number) => {
        const filtered = todos.filter((todo) => {
            return todo.id !== id;
        });
        setTodos([...filtered]);
    };

    const checkTodo = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) => {
                if (todo.id === id) {
                    todo.isChecked = !todo.isChecked;
                }
                return todo;
            })
        );
    };

    return (
        <div className="App">
            <Input addTodo={addTodo} />
            <TodoList todos={todos} delTodo={delTodo} checkTodo={checkTodo} />
        </div>
    );
};

export default App;
