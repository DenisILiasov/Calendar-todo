import React from "react";
import Day from "./day/day"
import style from './days.module.css'

const Days = ({days, number, daysLen, zero}) => {
    const today = new Date().getDate()
    
    const monthDay = days.map((el, index) => {
        if(el.status !== undefined){
            return <Day number = {el.number} key = {index} status = {el.status} today = {false}/>
        }else{
            if(el.number === today){
                return <Day number = {el.number} key = {index}  today = {true}/>
            }else{
                return <Day number = {el.number} key = {index}  today ={ false}/>
            }
        } 
    })
        
    return(
        <div className={style.wrap}>
            {monthDay.slice(zero, daysLen)}
        </div>
    )
}

export default Days