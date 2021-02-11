import React, { useState, useRef } from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'
import * as GLOBALS from '../GLOBALS';

Modal.setAppElement('#root')

function IdleTimerContainer({ children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const idleTimerRef = useRef(null)
  const sessionTimeoutRef = useRef(null)

  const onIdle = () => {
    console.log(GLOBALS.isSignedin ? 'User signed in' : 'User not signed in')
    setModalIsOpen(true)
    sessionTimeoutRef.current = setTimeout(logOut, 50000)
  }

  const logOut = () => {
    setModalIsOpen(false)
    clearTimeout(sessionTimeoutRef.current)
    console.log('User has been logged out')
    GLOBALS.setIsSignedIn(false);
  }

  const stayActive = () => {
    setModalIsOpen(false)
    clearTimeout(sessionTimeoutRef.current)
    console.log('User is active')
  }

  return (
    <div>
      {children}
      GLOBALS.isSignedin ? <IdleTimer
        ref={idleTimerRef}
        timeout={1000 * 5}
        onIdle={onIdle}
      />
      {GLOBALS.isSignedin ? <Modal isOpen={modalIsOpen} id="TimeOutModal">
        <h2>You've been idle for a while!</h2>
        <p>You will be logged out soon</p>
        <div>
          <button onClick={logOut} id="TimeOutBtnLogOut">Log me out</button>
          <button onClick={stayActive} id="TimeOutBtnStay" >Keep me signed in</button>
        </div>
      </Modal> : <div />}
    </div>
  )
}

export default IdleTimerContainer