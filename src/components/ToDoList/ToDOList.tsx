import { ToDoListItem } from "./ToDoListItem/TodoListItem";
import "./ToDoList.scss";
import { ToDo } from "../../assets/models/todo-item";

export const ToDOList = (props: {
    todos: ToDo[];
    updateToDO: Function,
    deleteToDo: Function
}) => {
    const checkedList = () => {
        return props.todos
            .filter((item) => !item.isDone)
            .map((item, index) => {
                return (
                    <ToDoListItem
                        toDoItem={item}
                        key={index}
                        updateToDO={props.updateToDO}
                        deleteToDo={props.deleteToDo}
                    />
                );
            });
    };

    const uncheckedList = () => {
        return props.todos
            .filter((item) => item.isDone)
            .map((item, index) => {
                return (
                    <ToDoListItem
                        toDoItem={item}
                        key={index}
                        updateToDO={props.updateToDO}
                        deleteToDo={props.deleteToDo}
                    />
                );
            });
    };

    return (
        <div className="todo-container">
            <ul className="todo-list failed">{checkedList()}</ul>
            <ul className="todo-list completed">{uncheckedList()}</ul>
        </div>
    );
};
