import style from './task.module.css'

const Task = (props) => {
    return(
        <div className={style.taskWrapp}>
            <div className={style.task}>{props.task.title}</div>
            <div className={style.deleted} onClick = {() => props.remove(props.task)}>✖</div>
        </div> 
    )
};

export default Task;