import React, {useState, useEffect} from 'react'

const MyTodoList = () => {
    const[tasks, setTasks]=useState([]);
    const [inputValue, setInputValue]=useState('');

    useEffect(()=>{
        const storedTasks=JSON.parse(localStorage.getItem('tasks'));
        if(storedTasks){
            setTasks(storedTasks);
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks));

    },[tasks])

    const handleAdd=()=>{
        if(inputValue.trim()!==' '){
            setTasks([...tasks, {id:Date.now(), text:inputValue, completed:false}]);
            setInputValue('');
        }
    }

    const handleDelete=(id)=>{
        setTasks(tasks.filter((task)=>task.id!==id))
    }

    const toggleComplete=(id)=>{
        setTasks(tasks.map(task=>task.id===id?{...task,completed:!task.completed}:task))
    }

  return (
    <div>
        <h1>My Todo List Below </h1>
        <input
        type='text'
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        />
        <button onClick={handleAdd}>Add Task</button>
        <ul>
            {tasks.map((task)=>(
                <li key={task.id} style={{listStyle:"none"}}>
                    <input
                    type='checkbox'
                    checked={task.completed}
                    onChange={()=>toggleComplete(task.id)}
                    />
                    <span style={{textDecoration:task.completed?"line-through":'none'}}>
                        {task.text}
                    </span>
                    <button onClick={()=>handleDelete(task.id)}>Delete </button>
                </li>
            ))}
        </ul>


        
    </div>
  )
}

export default MyTodoList