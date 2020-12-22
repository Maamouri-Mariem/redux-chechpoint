import React, {useState} from 'react'
import {deleteTodo, updateTodo,toggleComplete} from '../redux/actions'
import {useDispatch} from 'react-redux';
import {connect} from 'react-redux'


function TodoItems({todo}) {
    const [editable, setEditable] = useState(false);
    const [name, setName] = useState(todo.name)
    const dispatch = useDispatch();
    return (
        <div>
            
            <div className ="row m-4 align-items-center">
                <div>#</div>
                <div className ="col">
                {editable ? <input type = "text" className ="form-control" 
                    value = {name}
                    onChange = {
                        (e) => setName (e.target.value)
                    } 
                    /> :<h4>{todo.name}</h4>}
                </div>
                <button    onClick = {() => {
                    dispatch (updateTodo(
                        {
                            ...todo,
                            name : name,
                            isComplete : false
                        }
                    ))
                    if (editable) {
                        setName (todo.name);
                    }
                    setEditable (!editable);
                }}
                className ="btn btn-primary m-2"
                >{editable ? "Update" : "Edit"}</button>
                <button 
                onClick = {() => dispatch(deleteTodo(todo.id))}
                className = "btn btn-danger mx-2"
                >Delete</button>
                <button
                className=  {todo.isComplete == false ? "btn-secondary m-2" : "btn btn-success m-2"} 
                onClick={() => dispatch(toggleComplete(todo.id))}>
                {todo.isComplete == false ? "UNDO" : "Done"} 
                </button>
            </div>
        </div>
    )
}

export default TodoItems;

