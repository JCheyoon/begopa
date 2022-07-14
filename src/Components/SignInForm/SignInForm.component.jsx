import { useState } from 'react'
import { SignInButton, SignInButtonContainer, SignInFormContainer } from './SignInForm.style'
import FormInput from './FormInput/FormInput.component'

const defaultFormValue = {
  email: '',
  password: '',
}

const FormType = {
  LOGIN: 'login',
  SIGNUP: 'signup',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormValue)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [formType, setFormType] = useState(FormType.LOGIN)

  const { email, password } = formFields

  const handleSubmit = e => {
    e.preventDefault()
    console.log('submit')
  }
  const handleChange = e => {
    console.log(e.target.name, e.target.value)
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }

  const changeForm = () => {
    setFormType(formType === FormType.LOGIN ? FormType.SIGNUP : FormType.LOGIN)
  }

  return (
    <SignInFormContainer>
      <h1>WELCOME</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        {formType === FormType.SIGNUP ? (
          <FormInput
            label="Confirm password"
            type="password"
            required
            onChange={e => setConfirmPassword(e.target.value)}
            name="confirmPassword"
            value={confirmPassword}
          />
        ) : null}

        <SignInButtonContainer>
          <SignInButton type="submit">
            {formType === FormType.LOGIN ? 'LOGIN' : 'SIGN UP'}
          </SignInButton>
        </SignInButtonContainer>
      </form>

      <span onClick={changeForm}>
        {formType === FormType.LOGIN
          ? "Don't have an account? Sign up"
          : 'Already have an account? Log in'}
      </span>
    </SignInFormContainer>
  )
}

export default SignInForm
