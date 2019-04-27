import React from 'react'
import classNames from 'classnames'
import SignUpModalComponent from './SignUpModalComponent'

export const ModalContext = React.createContext({
  modalOpen: false,
  toggleModal: () => {},
})

const SignUpModal = () => (
  <ModalContext.Consumer>
    {({ modalOpen, toggleModal }) => (
      <SignUpModalComponent open={modalOpen} toggleModal={toggleModal} />
    )}
  </ModalContext.Consumer>
)

export default SignUpModal

function SignUpButton({ text, className }) {
  return (
    <ModalContext.Consumer>
      {({ toggleModal }) => (
        <button
          type="button"
          onClick={toggleModal}
          className={classNames({ 'no-style': !classNames }, className)}
        >
          {text}
        </button>
      )}
    </ModalContext.Consumer>
  )
}

export { SignUpButton }
