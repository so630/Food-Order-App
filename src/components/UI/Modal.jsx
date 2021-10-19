import classes from './Modal.module.css'
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return (
        <div className={classes.backdrop}/>
    )
}

const Overlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

export default function Modal(props) {
    return (
        <>
            {/* <Backdrop />
            <Overlay>{props.children}</Overlay> */}
            {ReactDOM.createPortal(<Backdrop />, document.getElementById('overlays'))}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById('overlays'))}
        </>
    )
}