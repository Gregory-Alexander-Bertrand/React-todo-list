import React from 'react'

const Form = ({setInputText, todos, setTodos, inputText }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, finished: false, id: Math.random() * 100 }])
        setInputText('');

    }

  
    return (
        <div className="todo-form">
            <form>
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo-form-input" />
                <button onClick={submitTodoHandler} className="todo-form-btn" type="submit">ADD</button>
                <div className="todo-form-select">
                    <select name="todos" className="todo-form-filter">
                        <option value="all">All</option>
                        <option value="finished">Finished</option>
                        <option value="unfinished">Unfinished</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form
