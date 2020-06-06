import React from 'react'

import styles from './modal.module.css'

const Modal = ({toggleModal, children}) => (
    <div className={styles.Modal}>
        <span onClick={() => toggleModal(false)} className={styles.Exit}>X</span>
        <span className={styles.Content}>{children}</span>
    </div>
)

export default Modal