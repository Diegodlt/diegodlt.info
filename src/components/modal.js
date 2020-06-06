import React from 'react'
import { GoPlus} from "react-icons/go"

import styles from './modal.module.css'

const Modal = ({toggleModal, children}) => (
    <div className={styles.Modal}>
        <span onClick={() => toggleModal(false)} className={styles.Exit}>
            <GoPlus />
        </span>
        <span className={styles.Content}>{children}</span>
    </div>
)

export default Modal