import style from  './titleDay.module.css'

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
    return(
        <div className={style.headerContainer}>
            <div className={props.styles.join(' ')}>
                {props.number}
            </div>
            <button onClick = {props.open} className={style.addTask}>
                +
            </button>
        </div>
    )
}

export default TitleDay;