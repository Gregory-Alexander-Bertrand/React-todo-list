import React from 'react';
import Todo from './Todo'

const TodoList = ({ todos,setTodos }) => {
    
    return (
        <div className="todo-list">
            <div className="todo-list-container">
                <ul className="todo-list-container-list">
                    {todos.map(todo => (
                        <Todo setTodos={setTodos} 
                        todos={todos} 
                        text={todo.text} 
                        todo={todo}
                        id={todo.id}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList
