import React from 'react'

const Form = () => {
    return (
        <div className="todo-form">
            <form>
                <input type="text" className="todo-form-input" />
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
