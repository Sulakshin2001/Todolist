import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {Header} from './Components/Header';
import {v1} from "uuid";

function App() {
    const [tasks1, setTasks1] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false}
    ])
    const removetask = (newId: string) => {
        setTasks1(tasks1.filter(el => el.id !== newId))
    }
    const addtask = (title:string) => {
        let newTask = {id: v1(), title: title, isDone: false}
        let newTasks = [newTask, ...tasks1]
        setTasks1(newTasks)
    }

    /*    const filterbutton = (name: string) => {
            setValueButton(name)
        }
        let [valueButton, setVal ueButton] = useState('All')

        let prolkadka = tasks1;
        if (valueButton === 'Active') {
            prolkadka = tasks1.filter((el) => el.isDone === false)
        }
        if (valueButton === 'Completed') {
            prolkadka = tasks1.filter((el) => el.isDone === true)
        }*/
    return (
        <div>
            <Header title={'dsds'}/>
            <Todolist title={'tasks1'}
                      task={tasks1}
                      removetask={removetask}
                      addtask={addtask}/>

        </div>


    )
}


export default App;
