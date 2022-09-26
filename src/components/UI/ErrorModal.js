import React from "react";

import Card from "./Card";
import Button from "./Button";
import clasess from './ErrorModal.module.css'
const ErrorModal = props => {
return (
    <div>
    <div className={clasess.backdrop} onClick={props.onConfirm}/>
        <Card className={clasess.modal}>
        <header className={clasess.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={clasess.content}>
            <p>{props.message}</p>
        </div>
        <footer className={clasess.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </Card>
    </div>
    
)
}

export default ErrorModal;