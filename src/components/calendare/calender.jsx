import { useState, useEffect } from "react";
import Days from "./days/days";
import Month from "./header/month/months";
import CalendarTitle from "./header/title/calendartitle";
import { useDispatch, useSelector } from "react-redux";
import { nextMonth,  renderDays } from "../../store/daysSlice";
import React from "react";
import style from './calender.module.css'

const Calender = () => {
    const days = useSelector(state => state.days.days)
    

    const [months, setMonth] = useState(new Date().getMonth()) 
    const dispath = useDispatch() 
    useEffect(() => {
        dispath(renderDays())
    }, [])

    let month = {
        0: 'Январь',
        1: 'Февраль',
        2: 'Март',
        3: 'Апрель',
        4: 'Май',
        5: 'Июнь',
        6: 'Июль',
        7: 'Август',
        8: 'Сентябрь',
        9: 'Октябрь',
        10: 'Ноябрь',
        11: 'Декабрь',
    }

    const [number, setNumber] = useState(0)
    
    const getNextMonth = () => {
        setMonth(prev => prev + 1)
        if(months >= 11){
            setMonth(prev => prev = 0)
        }
        dispath(nextMonth())
        setNumber(prev => prev += 1)
    } 
    
    const getPrevMonth = () => {
        if(number >= 1){
            setMonth(prev => prev - 1)
            if(months <= 0){
                setMonth(11)
            }
            setNumber(prev => prev -= 1)
        }
    }
    const styles  = [style.btn]
    return(
        <div>
            <CalendarTitle month = {month[months]}/>
            <Month/>
            <Days number = {number} days = {days}/>
            <div className={style.container}>
                <button className={style.btn} onClick= {getPrevMonth}>Прошлый месяц</button>
                <button className={styles.join(' ')} onClick = {getNextMonth}>Следующий месяц</button>
            </div>
        </div>
    )
}

export default React.memo(Calender);