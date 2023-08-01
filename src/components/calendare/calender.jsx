import { useState, useEffect } from "react";
import Days from "./days/days";
import Month from "./header/month/months";
import CalendarTitle from "./header/title/calendartitle";
import { useDispatch, useSelector } from "react-redux";
import { nextMonth,  renderDays } from "../../store/daysSlice";
import React from "react";

const Calender = () => {
    const days = useSelector(state => state.days.days)
    const [daysLen, setDaysLen] = useState(0);

    useEffect(() => {
        setDaysLen(days.length)
    }, [])
    
   
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
    const [biginNumber, setBiginNumber] = useState(0)

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
            if(month <= 11){
                setMonth(prev => prev = 11)
            }
            setNumber(prev => prev -= 1)
        }
        
    }
    
    return(
        <div>
            <CalendarTitle month = {month[months]}/>
            <Month/>
            <Days number = {number} days = {days} len = {daysLen} zero = {biginNumber}/>
            <button onClick={getPrevMonth}>Предыдущий месяц</button>
            <button onClick={getNextMonth}>Следующий месяц</button>
        </div>
    )
}

export default React.memo(Calender);