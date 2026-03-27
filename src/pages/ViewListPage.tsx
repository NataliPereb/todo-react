import { ToDo } from "../assets/models/todo-item"
import { ListItem } from "../components/ListItem/ListItem"

interface ComponentProps {
    todos: ToDo[];
}

export const ViewListPage = ({ todos }: ComponentProps) => {
    return (
        <div className="container">
            {todos.map((todo: ToDo, idx: number) => {
                return <ListItem todo={todo} key={idx} />;
            })}
        </div>
    );
};