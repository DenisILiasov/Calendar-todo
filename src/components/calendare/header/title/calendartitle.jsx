import style from './calendartitle.module.css'

const CalendarTitle = (props) => {
    return(
        <div className={style.container}>
            <div className={style.month}>{props.month}</div>
            <div className={style.year}>2023</div>
        </div>
    )
}

export default CalendarTitle;