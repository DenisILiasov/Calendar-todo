import style from './modal.module.css'

const ModalWindow = ({children, openModal, clouse}) => {
    const clases = [style.modaleWrapp]
    if(openModal){
        clases.push(style.active)
    }
    return(
        <div onClick={clouse} className={clases.join(' ')}>
            <div onClick={e => e.stopPropagation()} className={style.modaleContent}>
                {children}
                <div onClick={clouse} className={style.modaleClouse}>X</div>
            </div>
        </div>
    )
}

export default ModalWindow;