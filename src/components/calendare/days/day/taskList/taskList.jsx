import style from './taskList.module.css'
import ModalWindow from "../../../../ui/modal/modal"

const TaskList = (props) => {
    if(props.tasks.length === 0){
        props.clouseModal2()
    }
    return(
        <ModalWindow openModal={props.modal2} clouse={props.clouseModal2}>
            <div className={style.container}>
                {props.tasks.map(el => {
                    return(
                        <div className={style.taskContainer}>   
                            <div className={style.task} key={el.id}>{el.title}</div>
                            <div className={style.deleted} onClick = {() => props.remove(el)}>✖</div>
                        </div> 
                    ) 
                })}
            </div>
        </ModalWindow>
    )
}

export default TaskList;