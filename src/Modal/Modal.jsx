import ReactDOM from 'react-dom'

import { BackDropContainer, Content, Footer, Header, OverlayContainer } from './Modal.style'
import { Button } from '../Components/Page/Page.style'
import { useContextModal } from '../Context/ModalContext'

const Backdrop = ({ onConfirm }) => {
  return <BackDropContainer onClick={onConfirm} />
}

const ModalOverlay = ({ title, message, onConfirm }) => {
  return (
    <OverlayContainer>
      <Header>
        <h2>{title}</h2>
      </Header>
      <Content>
        <p>{message}</p>
      </Content>
      <Footer>
        <Button onClick={onConfirm}>Okay</Button>
      </Footer>
    </OverlayContainer>
  )
}

const Modal = () => {
  const { title, message, show, hideModal } = useContextModal()
  return show ? (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={hideModal} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={hideModal} />,
        document.getElementById('modal-root')
      )}
    </>
  ) : null
}

export default Modal
