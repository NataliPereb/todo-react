import { useState } from "react";
import { ToDo } from "../assets/models/todo-item";
import { Form } from "../components/Form/Form"
import { ToDOList } from "../components/ToDoList/ToDOList"
import { log } from "console";

export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([]);
    
    const createNewToDo = (text: string) => {
        const newToDo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false
        }
        setTodos([...todos, newToDo])
    };

    const updateToDO = (toDoItem: ToDo) => {
        const newToDos = todos.map((todo) => {
            if (todo.id === toDoItem.id) {
                todo.isDone = !todo.isDone
            }
            return todo
        })
        setTodos(newToDos);
    };

    const deleteToDo = (toDoItem: ToDo) => {
        const newToDos = todos.filter(todo => todo.id !== toDoItem.id)
        setTodos(newToDos)
    };

    return (
        <>
            <Form createNewToDo={createNewToDo} />
            <ToDOList
                todos={todos}
                updateToDO={updateToDO}
                deleteToDo={deleteToDo}
            />
        </>
    );
}