import { useState } from 'react'
import { SignInButton, SignInButtonContainer, SignInFormContainer } from './SignInForm.style'
import FormInput from './FormInput/FormInput.component'

const defaultFormValue = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormValue)
  const { email, password } = formFields

  const handleSubmit = e => {
    e.preventDefault()
    console.log('submit')
  }
  const handleChange = e => {
    console.log(test)
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
    console.log(setFormFields)
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
      </form>

      <SignInButtonContainer>
        <SignInButton>Login</SignInButton>
      </SignInButtonContainer>
      <span>Don't have an account? Sign up</span>
    </SignInFormContainer>
  )
}

export default SignInForm
