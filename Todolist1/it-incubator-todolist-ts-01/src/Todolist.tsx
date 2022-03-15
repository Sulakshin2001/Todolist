import React, {useState} from "react";

type TodolistPropsType={
    title:string,
    task:Array<TaskPropsType>
    removetask:(id:string)=>void
    addtask:(title:string)=>void
    //filterbutton:(name:string)=>void
}
type TaskPropsType={
    id:string,
    title:string,
    isDone:boolean
}
export const Todolist=(props:TodolistPropsType)=> {
    const[newTasktitle,setNewTaskTytle]=useState("")
    const filterbutton = (name: string) => {
        setValueButton(name)
    }
    let [valueButton, setValueButton] = useState('All')

    let prolkadka = props.task;
    if (valueButton === 'Active') {
        prolkadka = props.task.filter((el) => el.isDone === false)
    }
    if (valueButton === 'Completed') {
        prolkadka = props.task.filter((el) => el.isDone === true)
    }
  return(
    <div className="App">
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTasktitle} onChange={(e)=>{setNewTaskTytle(e.currentTarget.value)}}
                onKeyPress={(e)=>{
                   if(e.ctrlKey){
                    props.addtask(newTasktitle)
                    setNewTaskTytle("")}
                }}
                />
                <button onClick={()=>{props.addtask(newTasktitle)
                    setNewTaskTytle("")} }>+</button>
            </div>
            <ul>
                {prolkadka.map((el, index) => {
                    return (

                        <li key={el.id}>
                            <button onClick={() => props.removetask(el.id)}>X</button>
                            <input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                    )
                })
                }

            </ul>
            <div>
                <button onClick={() => filterbutton('All')}>All</button>
                <button onClick={() => filterbutton('Active')}>Active</button>
                <button onClick={() => filterbutton('Completed')}>Completed</button>
            </div>
        </div>
    </div>
  )}