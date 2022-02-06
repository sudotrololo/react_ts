import React, { useRef } from "react";


interface ITodoList {
    addTodo(title: string): void;
}

export const Input: React.FC<ITodoList> = (props) => {
    const refTitle = useRef<HTMLInputElement>(null);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        refTitle.current!.value = event.target.value;
    };

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            props.addTodo(refTitle.current!.value)
            refTitle.current!.value = "";
        }
    };

    return (
        <>
            <h1>This is Test conponent</h1>
            <input type="text" onChange={changeHandler} onKeyPress={keyPressHandler} ref={refTitle} />
        </>
    );
};
