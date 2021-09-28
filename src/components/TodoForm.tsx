import React, {useState} from "react";

interface TodoFormProps {
    addHandler(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = ({addHandler}) => {
    const [title, setTitle] = useState<string>('');
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter'){
            addHandler(title);
            setTitle('');
        }
    }
    return (
        <div className="input-field mt2">
            <input value={title} onChange={changeHandler} onKeyPress={keyPressHandler} type="text" id="title"/>
            <label htmlFor="title" className="active">
                Введите название дела
            </label>
        </div>
    )
}