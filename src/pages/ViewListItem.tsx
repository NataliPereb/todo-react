import { useEffect, useState } from "react";
import { ToDo } from "../assets/models/todo-item";
import { useNavigate, useParams } from "react-router-dom";

interface ComponentProps {
    todos: ToDo[];
}

export const ViewListItem = ({ todos }: ComponentProps) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState<ToDo>();

    useEffect(() => {
        const searchToDo = todos.find((todo) => String(todo.id) === id);
        if (searchToDo) {
            setTodo(searchToDo);
        } else {
            navigate("/404");
        }
    }, [todos, id, navigate]);

    return (
        <div className="container">
            <h1>{todo?.text}</h1>
        </div>
    );
};
