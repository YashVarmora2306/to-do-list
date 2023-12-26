import { createContext, useContext, useReducer } from "react";
import { todosReducer } from "./reducer";

const TodosContext = createContext(null);
const TodosDispatch = createContext(null);

export const useTodos = () => useContext(TodosContext);
export const useTodosDispatch = () => useContext(TodosDispatch)

const initialTodos = [
    {
        value: "jay's work", isChecked: false
    },
    {
        value: "meet's work", isChecked: true
    },
]

export function TodosProvider({ children }) {
    const [todos, dispatch] = useReducer(todosReducer, initialTodos)

    return (
        <TodosContext.Provider value={todos}>
            <TodosDispatch.Provider value={dispatch}>
                {children}
            </TodosDispatch.Provider>
        </TodosContext.Provider>
    )
}