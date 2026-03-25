import { ToDo } from '../../../assets/models/todo-item';
import './ToDoListItem.scss'

export const ToDoListItem = (props: {
    toDoItem: ToDo;
    updateToDO: Function;
    deleteToDo: Function;
}) => {
    return (
        <li className="todo-list-item__wrapper">
            <span>{props.toDoItem.text}</span>
            <div className="todo-list-item__buttons">
                <button
                    className="btn-trash"
                    onClick={() => props.deleteToDo(props.toDoItem)}
                ></button>
                <button
                    className={
                        props.toDoItem.isDone ? "btn-check" : "btn-uncheck"
                    }
                    onClick={() => props.updateToDO(props.toDoItem)}
                ></button>
            </div>
        </li>
    );
};
