import ReactDOM from 'react-dom'

import { BackDropContainer, Content, Footer, Header, OverlayContainer } from './Modal.style'
import { Button } from '../Components/Page/Page.style'
import { useContextModal } from '../Context/ModalContext'

const Backdrop = ({ onConfirm }) => {
  return <BackDropContainer onClick={onConfirm} />
}

const ModalOverlay = ({ title, message, confirmationMode, onHide, onConfirm }) => {
  return (
    <OverlayContainer>
      <Header>
        <h2>{title}</h2>
      </Header>
      <Content>
        <p>{message}</p>
      </Content>
      {confirmationMode ? (
        <Footer>
          <Button onClick={onHide}>No</Button>
          <Button onClick={onConfirm}>Yes</Button>
        </Footer>
      ) : (
        <Footer>
          <Button onClick={onHide}>Okay</Button>
        </Footer>
      )}
    </OverlayContainer>
  )
}

const Modal = () => {
  const { title, message, show, hideModal, confirmationMode, confirmHandler } = useContextModal()
  return show ? (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={hideModal} />,
        document.getElementById('backdrop-root')
      )}
      {confirmationMode
        ? ReactDOM.createPortal(
            <ModalOverlay
              title={title}
              message={message}
              onHide={hideModal}
              confirmationMode={true}
              onConfirm={() => {
                confirmHandler()
                hideModal()
              }}
            />,
            document.getElementById('modal-root')
          )
        : ReactDOM.createPortal(
            <ModalOverlay title={title} message={message} onHide={hideModal} />,
            document.getElementById('modal-root')
          )}
    </>
  ) : null
}

export default Modal
