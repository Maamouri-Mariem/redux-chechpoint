import React from 'react';
import TodoItems from './TodoItems.jsx';
import {useSelector} from 'react-redux';
import { CLEAR_TODO } from '../redux/actions.js';
import {useDispatch} from 'react-redux';


function TodoList() {
    const dispatch = useDispatch ();
    let todos = useSelector(state => state)
    return (
        <div>
       <article className ="my-4">
        {todos.map(todo => {
          return <TodoItems key={todo.id} todo={todo} />;
        })}
      </article>
        <button
        className = "btn btn-danger m-5"
        onClick={() => dispatch({ type: CLEAR_TODO})}
        >Clear All Todo</button>
        </div>
    )
}

export default TodoList;

