import React from "react";
import Day from "./day/day"
import style from './days.module.css'

const Days = ({days, number}) => {
    const today = new Date().getDate()

    return(
        <div className={style.wrap}>
            {days[number]?.map((el, index) => {
                if(el.status !== undefined){
                    return <Day number = {el.number} key = {el.id} status = {el.status} today = {false} index = {el.id}/>
                }else{
                    if(el.number === today){
                        return <Day number = {el.number} key = {el.id}  today = {true} index = {el.id}/>
                    }else{
                        return <Day number = {el.number} key = {el.id}  today ={ false} index = {el.id}/>
                    }
                } 
            })}
        </div>
    )
}

export default Days