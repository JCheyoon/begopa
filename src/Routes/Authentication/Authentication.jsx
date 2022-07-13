import { AuthenticationContainer } from './Authentication.style'
import { Page } from '../../Components/Page/Page.style'
import SignInForm from '../../Components/SignInForm/SignInForm.component'

const Authentication = () => {
  return (
    <Page>
      <AuthenticationContainer>
        <SignInForm />
      </AuthenticationContainer>
    </Page>
  )
}

export default Authentication
