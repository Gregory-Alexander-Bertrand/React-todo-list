import React from 'react';
import Todo from './Todo'

const TodoList = ({ todos }) => {
    
    return (
        <div className="todo-list">
            <div className="todo-list-container">
                <ul className="todo-list-container-list">
                    {todos.map(todo => (
                        <Todo text={todo.text} id={todo.id}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList
