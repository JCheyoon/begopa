import { createContext, useContext, useState } from 'react'

const ModalContext = createContext({
  show: false,
  confirmationMode: false,
  title: '',
  message: '',
  showModal: ({ title, message }) => {},
  hideModal: () => {},
  showConfirmation: ({ title, message, confirmHandler }) => {},
  confirmHandler: () => {},
})

export const ModalProvider = ({ children }) => {
  const [show, setShow] = useState(false)
  const [confirmationMode, setConfirmationMode] = useState(false)
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [confirmHandler, setConfirmHandler] = useState(undefined)

  const showModalHandler = ({ title, message }) => {
    setShow(true)
    setConfirmationMode(false)
    setTitle(title)
    setMessage(message)
  }
  const hideModalHandler = () => {
    setShow(false)
    setTitle('')
    setMessage('')
    setConfirmHandler(undefined)
  }

  const showConfirmation = ({ title, message, confirmHandler }) => {
    setShow(true)
    setConfirmationMode(true)
    setTitle(title)
    setMessage(message)
    setConfirmHandler(confirmHandler)
  }

  const value = {
    show,
    title,
    message,
    showModal: showModalHandler,
    hideModal: hideModalHandler,
    showConfirmation,
    confirmHandler,
    confirmationMode,
  }

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export const useContextModal = () => {
  return useContext(ModalContext)
}
