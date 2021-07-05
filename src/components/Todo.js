import React from 'react'

const Todo = ({ text }) => {
    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="todo-btn">Finished</button>
            <button className="todo-btn-2">Delete</button>
        </div>
    )
}

export default Todo
