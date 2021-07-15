import React from 'react'

const Todo = ({ text, todos, setTodos, todo }) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }
    // const finishedHandler = () => {
    //   setTodos(todos.map((item) => {
    //       if(item.id === todo.id) {
    //           return {
    //               ...item, finished: !item.finished
    //           }
    //       }
    //       return item;
    //   }))
    // }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, finished: !item.finished
                }
            }
            return item;
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.finished ? "finished" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="todo-btn">Finished</button>
            <button onClick={deleteHandler} className="todo-btn-2">Delete</button>
        </div>
    )
}

export default Todo
