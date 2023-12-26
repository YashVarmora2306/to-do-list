export const todosReducer = (todos, action) => {
    const ADD = 'ADD';
    const REMOVE = 'REMOVE';
    const EDIT = 'EDIT';

    switch (action.type) {
        
        case ADD: {
            return [
                ...todos,
                {
                    value: action.payload.value,
                    isChecked: false,
                },
            ]
        }

        case REMOVE: {
            return todos.filter(
                (_, index) => index !== action.payload.index,
            )
        }

        case EDIT: {
            return todos.map((item, index) =>
                index === action.payload.index ? ({
                    value: action.payload.value,
                    isChecked: action.payload.isChecked,
                }) : item,
            )
        }

        default:
            return todos;
    }
}