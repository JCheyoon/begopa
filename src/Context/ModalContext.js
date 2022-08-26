import { createContext, useContext, useState } from 'react'

const ModalContext = createContext({
  show: false,
  title: '',
  message: '',
  showModal: ({ title, message }) => {},
  hideModal: () => {},
})

export const ModalProvider = ({ children }) => {
  const [show, setShow] = useState(false)
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')

  const showModalHandler = ({ title, message }) => {
    setShow(true)
    setTitle(title)
    setMessage(message)
  }
  const hideModalHandler = () => {
    setShow(false)
    setTitle('')
    setMessage('')
  }

  const value = {
    show,
    title,
    message,
    showModal: showModalHandler,
    hideModal: hideModalHandler,
  }

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export const useContextModal = () => {
  return useContext(ModalContext)
}
