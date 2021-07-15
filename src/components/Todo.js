import React from 'react'

const Todo = ({ text, todos, setTodos, todo }) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="todo-btn">Finished</button>
            <button onClick={deleteHandler} className="todo-btn-2">Delete</button>
        </div>
    )
}

export default Todo
