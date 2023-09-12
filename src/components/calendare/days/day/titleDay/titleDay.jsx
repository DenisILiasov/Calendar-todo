import { useState } from 'react'
import style from  './titleDay.module.css'
import ModalWindow from '../../../../ui/modal/modal'

const TitleDay = (props) => {

    if(props.status !== undefined){
        return(
            <div className={style.headerContainer}>
             <div className={props.styles.join(' ')}>
                {props.number}
            </div>
        </div>
        )
    }

    let days = {
        0: 'Пн',
        1: 'Вт',
        2: 'Ср',
        3: 'Чт',
        4: 'Пт',
        5: 'Сб',
        6: 'Вс',
    }
 
   
    
    if(window.innerWidth > 992){
        return(
            <>
                <div className={style.headerContainer}>
                    <div className={props.styles.join(' ')}>
                        <div>{props.number}</div>
                    </div>
                    <div className={style.border}>
                        <button onClick = {props.open} className={style.addTask}>
                            +
                        </button>
                    </div>
                </div>
                <ModalWindow>

                </ModalWindow>
            </>
        )
    }else{
        return(
            <div className={style.headerContainer}>
                <div className={props.styles.join(' ')}>
                    <div className={style.number}>{props.number}</div>
                    <div>{days[props.day]}</div>
                </div>
                <button onClick = {props.open} className={style.addTask}>
                    +
                </button>
            </div>
        )
    }
    
}

export default TitleDay;