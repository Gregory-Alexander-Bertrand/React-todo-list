import React from 'react'

const Form = ({setInputText}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }
    return (
        <div className="todo-form">
            <form>
                <input onChange={inputTextHandler} type="text" className="todo-form-input" />
                <button className="todo-form-btn" type="submit">ADD</button>
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
