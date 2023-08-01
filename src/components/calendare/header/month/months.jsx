import style from './month.module.css'

const Month = () => {
    return(
        <div className={style.container}>
            <div className={style.month}>Пн</div>
            <div className={style.month}>Вт</div>
            <div className={style.month}>Ср</div>
            <div className={style.month}>Чт</div>
            <div className={style.month}>Пт</div>
            <div className={style.month}>Сб</div>
            <div className={style.month}>Вс</div>
        </div>
    )
}

export default Month;