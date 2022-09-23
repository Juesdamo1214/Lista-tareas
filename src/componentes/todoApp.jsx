import { useState } from "react"

export default function TodoApp(){
    const [title, setTitle] = useState("Hola");
    
    function handleClick(e) {
        e.preventDefault();
        setTitle('Marcos')
    }
    return (
    <div className="todoContainer">
        <form className="todoCreateForm">
            <input className="todoInput" value={title}/>
            <input
            onclick={handleClick}
            type="submit"
            value="Create todo"
            className="buttonCreate"/>
        </form>
    </div>
    )
}