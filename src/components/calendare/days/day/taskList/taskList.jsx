
import ModalWindow from "../../../../ui/modal/modal"

const TaskList = (props) => {
    
    return(
        <ModalWindow openModal={props.modal2} clouse={props.clouseModal2}>
            {props.tasks.map(el => {
                return <div key={el.id}>{el.title}</div>
            })}
        </ModalWindow>
    )
}

export default TaskList;