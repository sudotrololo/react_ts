import React, { useState, useEffect } from "react";
import { Input } from "./components/Input";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { ITodo } from "./interfaces";
import { NoTodosAllert } from "./components/NoTodosAllert";

const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("todos") || "") as ITodo[];
        setTodos(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (title: string) => {
        const newTodo: ITodo = {
            id: Math.floor(Date.now() * Math.random()),
            title: title,
            isChecked: false,
        };
        setTodos((prev) => [newTodo, ...prev]);
    };

    const delTodo = (id: number) => {
        const confirm = window.confirm("Are you shure?");

        if (confirm) {
            const filtered = todos.filter((todo) => {
                return todo.id !== id;
            });
            setTodos([...filtered]);
        }
    };

    const checkTodo = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) => ({
                ...todo,
                isChecked: todo.id === id ? !todo.isChecked : todo.isChecked,
            }))
        );
    };

    return (
        <div className="App">
            <Input addTodo={addTodo} />
            {todos.length === 0 ? <NoTodosAllert /> : <TodoList todos={todos} delTodo={delTodo} checkTodo={checkTodo} />}
        </div>
    );
};

export default App;
