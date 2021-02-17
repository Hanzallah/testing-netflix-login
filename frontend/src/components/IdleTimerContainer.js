import React, { useState, useRef } from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'
import * as GLOBALS from '../GLOBALS';
import history from "../pages/history"

Modal.setAppElement('#root')

function IdleTimerContainer({ children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const idleTimerRef = useRef(null)
  const sessionTimeoutRef = useRef(null)

  const onIdle = () => {
    console.log(GLOBALS.isSignedin ? 'User signed in' : 'User not signed in')
    setModalIsOpen(true)
    sessionTimeoutRef.current = setTimeout(logOut, 10000)
  }

  const logOut = () => {
    setModalIsOpen(false)
    clearTimeout(sessionTimeoutRef.current)
    console.log("logOut clicked");
    GLOBALS.setIsSignedIn(false);
    GLOBALS.setMailAddress("");
    history.push('/');
  }

  const stayActive = () => {
    setModalIsOpen(false)
    clearTimeout(sessionTimeoutRef.current)
    console.log('User is active')
  }

  return (
    <div>
      {children}
      <IdleTimer
        ref={idleTimerRef}
        timeout={1000 * 10}
        onIdle={onIdle}
      />
      <Modal isOpen={modalIsOpen} id="TimeOutModal">
        <h2>You've been idle for a while!</h2>
        <p>You will be logged out soon</p>
        <div>
          <button onClick={logOut} id="TimeOutBtnLogOut">Log me out</button>
          <button onClick={stayActive} id="TimeOutBtnStay" >Keep me signed in</button>
        </div>
      </Modal>
    </div>
  )
}

export default IdleTimerContainer