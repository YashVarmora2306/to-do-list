import { useState } from "react";
import { useTodosDispatch } from "../contexts";
import clsx from "clsx";

const TodoPopup = ({ onClosePopup, index, data }) => {
    const todosDispatch = useTodosDispatch()
    const [todoValue, setTodoValue] = useState(data?.value || '') // data?.value :- if data is null or undefined the result is undefined or if not null or undefine the result is data.value. 

    const handleEditTodoItem = (event) => {
        event.preventDefault()
        onClosePopup()

        if (index === null) {
            todosDispatch({
                type: 'ADD',
                payload: {
                    value: todoValue,
                },
            })
            return;
        }

        todosDispatch({
            type: 'EDIT',
            payload: {
                index,
                value: todoValue,
                isChecked: data.isChecked,
            },
        })
    }

    return (
        <div className={clsx(
            'fixed bottom-0 left-0 right-0 top-0 z-50',
            'flex items-center justify-center bg-gray-700/60 p-4',
        )}>
            <div className="w-full max-w-md">
                <form onSubmit={handleEditTodoItem} className="rounded-lg bg-white shadow">
                    <div className="p-6"> 
                        <input required type="'text" className={clsx(
                            'w-full bg-gray-50 p-4',
                            'rounded-lg border border-gray-300',
                            'text-gray-900',
                            'focus:border-blue-500 focus:ring-blue-500',
                        )} placeholder="Add Todos" value={todoValue} onChange={(event) => setTodoValue(event.target.value)} />
                    </div>
                    <div className={clsx(
                        'flex items-center justify-center space-x-8 p-4',
                        'rounded-b border-t border-gray-200',
                    )}>
                        <button type="submit" className={clsx(
                            'rounded-lg bg-emerald-700 px-5 py-2.5',
                            'text-center font-medium text-white',
                            'hover:bg-emerald-800 focus:outline-none focus:ring-emerald-300',
                        )}>
                            Save
                        </button>
                        <button onClick={onClosePopup} type="button" className={clsx(
                            'bg-red-500 px-5 py-2.5',
                            'rounded-lg border-gray-200',
                            'font-medium text-white',
                            'hover:bg-red-700 hover:text-white',
                            'focus:z-10 focus:outline-none focus:ring-red-300',
                        )}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TodoPopup;