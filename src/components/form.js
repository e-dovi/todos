import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addTodo, removeTodo, selectTodos, sortTodo} from '../features/manageTodos/manageSlice';

export function TodoForm() {
  

const todos = useSelector(selectTodos)
   const dispatch = useDispatch()

function onAdd(event){
    event.preventDefault();
    //console.log({[event.target.todo.value]:event.target.priority.value})
    //dispatch an object
    dispatch(addTodo({[event.target.todo.value]:event.target.priority.value, 'key':`${event.target.todo.value}+${event.target.priority.value}`}))
};

function sort(event){
    //event.preventDefault();
    dispatch(sortTodo())
}

function deleteTask(event){
  event.preventDefault()
  //console.log(event.target.value)
  dispatch(removeTodo(event.target.value))
}
  return (
    <>
    <form className="AddTodoForm" onSubmit={onAdd}>
      <input
        type="text"
        id='todo'
        name='todo'
        placeholder="What's your next task?"
      />
      <div id="priority">
      <label htmlFor="priority"><p className='rangeText'>Priority Level:</p> </label>
      <input type="range" name="priority" min="0" max="50"/>
      <br/>
      </div>
      <input id="submit" type="submit" value="Add" />
    </form>
    <br/>
    <ul className='notes'>{todos.map(todo=>{
       return <li className='note' key={`${Object.keys(todo)[0]}+${Object.values(todo)[0]}`}><div className='noteGrid'><div className='written'>{Object.keys(todo)[0]}</div><button className='delete' onClick={deleteTask} value={`${Object.keys(todo)[0]}+${Object.values(todo)[0]}`}>X</button></div></li>
    })}</ul>
    <br/>
    <input id='sort' type="button" onClick={sort} value="Sort Tasks"></input>
    </>
  );
}
