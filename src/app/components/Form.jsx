"use client"
import React, { useState } from 'react'
import Todo from './Todo'
import styles from "../page.module.css"

const Form = () => {
    const [todo,setTodo]=useState({})
    const [todos,setTodos]=useState([
        {todo: 'todo 1'},
        {todo: 'todo 2'},
        {todo: 'todo 3'},
    ])
    const handleChange=e=>setTodo({[e.target.name]:e.target.value})
    const handleClick=e=>{
        if(Object.keys(todo).length===0 || todo.todo.trim()===''){
            alert('el campo no puede ser vacio')
            return
        }
        setTodos([...todo,todo])
    }
    const deleteTodo=indice=>{
        const newTodos=[...todos]
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }
    return (
       <>
       <form onSubmit={e=>e.preventDefault()}>
        <label>Agregar Tareas</label><br></br>
            <input className={styles.form_input} type="text" name="todo" onChange={handleChange}></input>
            <button className={styles.form_buttom} onClick={handleClick}>Agregar</button>
       </form>
       {
           todos.map((value,index)=>(
           <Todo todo={value.todo} key={index} deleteTodo={deleteTodo}/>))
       }
       </>
    )
}
export default Form