import { useState } from 'react';
import style from  './day.module.css'
import Task from './task/task';
import TitleDay from './titleDay/titleDay';
import TaskList from './taskList/taskList';
import ModalWindow from '../../../ui/modal/modal';
import React from 'react';
import useLocalStorage from '../../../../hooks/useLocalStorage';


const Day = (props) => {
    const [tasks, setTasks] = useLocalStorage([], `task${props.index}`)

    const styleNumber = [style.number]
    if(props.status !== undefined){
        styleNumber.push(style.Def)
    }

    const styleContainer = [style.container]
    
    if(props.today){
        styleContainer.push(
            style.active
        )
    }

    /*ADD TASK*/
    const [text, setText] = useState('')
    const addTask = () => {
        setTasks([...tasks,
            {
                title: text,
                id: Date.now()

            }
        ])
        setModal(false)
        setText('')
        
    }
  
    /********/

    const [modal, setModal] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const clouseModal = () => {
        setModal(false)
    }
    
    
    /*DELETED TASK*/
    const deletedTask = (task) => {
        setTasks(tasks.filter(t => t.id !== task.id))
    }
    /*******/
    
    /*TASK LIST*/
    const tasksList = tasks.map(task => {
        return <Task task = {task} key = {task.id} remove = {deletedTask}/>
    })
    
    /***********/

    /*TASKLIST MODAL*/
    const [modal2, setModal2] = useState(false)
    const openModal2 = () => {
        setModal2(true)
    }
    const clouseModal2 = () => {
        setModal2(false)
    }
    /**************/
   
    return(
        <div className={styleContainer.join(' ')}>
            <TitleDay open = {openModal} number= {props.number} styles = {styleNumber} status = {props.status} day = {props.day}/>
            <ModalWindow clouse = {clouseModal} openModal={modal}>
                <input
                    className={style.input}
                    type="text" 
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button  className={style.button} onClick={addTask}>Add Task</button>
            </ModalWindow>              
            {tasksList.slice(0, 2)}
            {tasks.length >= 2 ? 
                <button className={style.buttonAll} onClick={openModal2}>Открыть все</button>
                :
                <div></div>
            }
            <TaskList modal2 = {modal2} clouseModal2 = {clouseModal2} tasks = {tasks}/>
        </div>
    )
}

export default Day;