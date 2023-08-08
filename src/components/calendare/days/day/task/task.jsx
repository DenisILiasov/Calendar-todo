import style from './task.module.css'
import { getRandomNumber } from '../../../../../utils/getRandomNumber';
import { useEffect, useState } from 'react';
import React from 'react';

const Task = (props) => {
    const [randomNumber, setRandomNumber] = useState()
    const pushRandomNumber = () => {
        setRandomNumber(getRandomNumber())
    }

    useEffect(() => {
        pushRandomNumber()
    }, [])
    

    let wrappStyle = [style.taskWrapp];
    if(randomNumber < 25){
        wrappStyle = [style.taskWrapp]
    }else if(randomNumber >= 25 &&  randomNumber < 50){
        wrappStyle.push(style.color2)
    }else if(randomNumber >= 50 &&  randomNumber < 75){
        wrappStyle.push(style.color3)
    }else{
        wrappStyle.push(style.color4)
    }
    return(
        <div className={wrappStyle.join(' ')}>
            <div className={style.task}>{props.task.title}</div>
            <div className={style.deleted} onClick = {() => props.remove(props.task)}>✖</div>
        </div> 
    )
};

export default React.memo(Task);