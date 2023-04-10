import React from "react";
import { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import {CSSTransition} from 'react-transition-group';

const Alert = () => {
        const {alert, hide} = useContext(AlertContext);
    
    // Проверка: если visible == false, то не отображать alert, 
    //но ниже он реализован через in={alert.visible}
    //if (!alert.visible) {
    //    return null;
    //}

    return (
        <CSSTransition
            in={alert.visible}
            timeout={{
                enter: 500,
                exit: 350}}
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${alert.type} alert-dismissible main-alert`}>
                <div>
                    <strong>Внимание! </strong>{alert.text}
                </div>
                <button onClick={hide} type="button" className="btn btn-outline-secondary">
                    <span>&times;</span>
                </button>
            </div>
        </CSSTransition>
    );
}

export default Alert;