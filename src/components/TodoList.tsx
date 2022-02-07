import React from "react";
import { ITodo } from "../interfaces";

type ITodoList = {
    todos: ITodo[];
    delTodo(id: number): void;
    checkTodo(id: number): void;
};

export const TodoList: React.FC<ITodoList> = ({ todos, delTodo, checkTodo }) => {

    const isCeckedClass: string = 'isChecked'

    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <li key={todo.id}>
                        <span className={todo.isChecked ? isCeckedClass : ''}>
                            {todo.title}
                            <input
                                onChange={() => {
                                    checkTodo(todo.id);
                                }}
                                type="checkbox"
                                checked={todo.isChecked}
                            />
                            <button
                                onClick={() => {
                                    delTodo(todo.id);
                                }}
                            >
                                del
                            </button>
                        </span>
                    </li>
                );
            })}
        </ul>
    );
};
