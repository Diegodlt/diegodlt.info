import React from 'react'

import styles from '../styles/modal.module.css'

const Modal = ({isOpen, children}) => (
    <div className={isOpen ? styles.Entrance : styles.Exit}>
        {children}
    </div>
)

export default Modal