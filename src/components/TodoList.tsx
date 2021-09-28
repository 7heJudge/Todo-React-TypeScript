import {ITodo} from "../interfaces";

interface TodoListProps {
    todos: ITodo[],
    onToggle(id: number): void,
    onRemove(id: number): void
}

export const TodoList: React.FC<TodoListProps> = ({todos, onToggle, onRemove}) => {
    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault();
        onRemove(id);
    }
    return (
        <ul>
            {todos.length !== 0 ? todos.map(todo => {
                const classes = ['todo'];
                if (todo.completed) classes.push('completed');
                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input type='checkbox' checked={todo.completed} onChange={onToggle.bind(null, todo.id)}/>
                            <span>{todo.title}</span>
                            <i onClick={event => removeHandler(event, todo.id)} className='material-icons red-text'>delete</i>
                        </label>
                    </li>
                )
            }) : <div className='center'>Пока дел нет!</div>}
        </ul>
    )
}