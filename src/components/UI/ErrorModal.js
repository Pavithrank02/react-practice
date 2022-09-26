import React from "react";
import ReactDOM  from "react-dom";

import Card from "./Card";
import Button from "./Button";
import clasess from './ErrorModal.module.css';

const Backdrop = props => {
    return <div className={clasess.backdrop} onClick={props.onConfirm}/>
}

const ModalOverlay = props => {
    return (

     <Card className={clasess.modal}>
        <header className={clasess.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={clasess.content}>
            <p>{props.message}</p>
        </div>
        <footer className={clasess.actions}>
            <Button onClick={props.onC}>Okay</Button>
        </footer>
    </Card>
    )
}
const ErrorModal = props => {
return (
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>, document.getElementById('overlay-root'))}
    </React.Fragment>
    
)
}

export default ErrorModal;