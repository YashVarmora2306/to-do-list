import DeleteIcon from './icons/DeleteIcon';
import EditIcon from './icons/EditIcon';
import CheckIcon from './icons/CheckIcon';
import { useTodosDispatch } from '../contexts';
import clsx from 'clsx';

const TodoItem = ({
    searchTerm,
    item,
    index,
    onEditTodoItem
}) => {
    const todosDispatch = useTodosDispatch()

    const handleRemoveTodoItem = () => todosDispatch({
        type: 'REMOVE',
        payload: {
            index,
        },
    })

    const handleCheckTodoItem = () => todosDispatch({
        type: 'EDIT',
        payload: {
            index,
            value: item.value,
            isChecked: !item.isChecked,
        },
    })

    return (
        <div className={clsx(
            'mt-2.5 flex w-full items-center justify-between bg-white p-4',
            'rounded-lg border border-gray-200 shadow',
        )}>
            <span dangerouslySetInnerHTML={{
                __html: searchTerm !== '' ? item.value.replace(
                    searchTerm,
                    `<span class="bg-blue-100 font-bold">${searchTerm}</span>`,
                ) : item.value,
            }}></span>
            <div className='flex gap-2'>
                <button onClick={handleRemoveTodoItem} type='button' className={clsx(
                    'flex h-10 w-10 items-center justify-center rounded-lg bg-rose-700',
                    'hover:bg-rose-800 focus:outline-none focus:ring-rose-300',
                )}>
                    <DeleteIcon />
                </button>
                <button onClick={onEditTodoItem} type='button' className={clsx(
                    'flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700',
                    'hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300',
                )}>
                    <EditIcon />
                </button>
                <button onClick={handleCheckTodoItem} type='button' className={clsx(
                    item.isChecked ? 'bg-emerald-700' : 'bg-gray-400',
                    'flex h-10 w-10 items-center justify-center rounded-lg',
                    'hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300',
                )}>
                    <CheckIcon />
                </button>
            </div>
        </div>
    )
}

export default TodoItem;