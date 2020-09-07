import React from 'react'
import { CSSTransition } from 'react-transition-group'

import styles from '../styles/modal.module.css'

const Modal = ({isOpen, children}) => (
    <CSSTransition
        in={isOpen}
        classNames={{...styles}}
        timeout={100}
        unmountOnExit
    >
        <div className={styles.Modal}>
            {children}
        </div>
    </CSSTransition>
)

export default Modal