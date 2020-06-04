import React from 'react'

const Modal = ({toggleModal, showModal, children}) => (
    <div style={showModal ? styles: {display: "none"}}>
        <span onClick={() => toggleModal(false)}>X</span>
        <span>{children}</span>
    </div>
)

const styles = {
    width: "100%",
    height: "100vh",
    position: "fixed",
    border: "1px solid black",
    top: 0,
    left: 0,
    backgroundColor: "rgba(200, 200, 200, 0.5)",
    zIndex: 100
}

export default Modal