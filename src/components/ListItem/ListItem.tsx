import React from "react";
import { ToDo } from "../../assets/models/todo-item";
import classes from './ListItem.module.scss'

export const ListItem = ({ todo }: { todo: ToDo }) => {
    return (
        <a
            className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`}
            target="_blank"
            href={`/list/${todo.id}`}
            rel="noreferrer"
        >
            {todo.text}
        </a>
    );
};
