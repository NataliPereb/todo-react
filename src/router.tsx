import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layouts/Layout";
import { NotFound } from "./pages/404";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ToDo } from "./assets/models/todo-item";
import { ViewListPage } from "./pages/ViewListPage";
import { ViewListItem } from "./pages/ViewListItem";

const todos: ToDo[] = [
    {
        id: 0,
        text: "Первая задача",
        isDone: false,
    },
    {
        id: 1,
        text: "Вторая задача",
        isDone: true,
    },
    {
        id: 2,
        text: "Третья задача",
        isDone: false,
    },
    {
        id: 3,
        text: "Четвертая задача",
        isDone: true,
    },
];

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <ToDoListPage /> },
            {
                path: "todo",
                element: <ViewListPage todos={todos} />, // ← /todo: готовые задачи
            },
            { path: "/list", element: <ViewListPage todos={todos} /> },
            { path: "/list/:id", element: <ViewListItem todos={todos} /> },
        ],
    },
    { path: "*", element: <NotFound /> },
]);
