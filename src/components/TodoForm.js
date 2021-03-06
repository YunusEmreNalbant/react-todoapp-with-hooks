import React, { useState,useRef,useEffect } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null);
    
    useEffect(()=>{
        inputRef.current.focus();
    })

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
     
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');

    }
    return (
        <form action="todo-form" onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" placeholder="Add a todo" value={input} name="text" className="todo-input" onChange={handleChange} />
            <button className="todo-button">Add todo</button>

        </form>
    )
}

export default TodoForm 
