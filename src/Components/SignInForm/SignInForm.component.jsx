import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInButtonContainer, SignInFormContainer } from './SignInForm.style'
import FormInput from './FormInput/FormInput.component'
import { Button } from '../Page/Page.style'
import { useAxios } from '../../Hooks/useAxios'
import { useContextAuth } from '../../Context/authContext'

const defaultFormValue = {
  email: '',
  password: '',
}

const FormType = {
  LOGIN: 'login',
  SIGNUP: 'signup',
}

const SignInForm = () => {
  const { post } = useAxios()
  const { handleLogin } = useContextAuth()
  const [formFields, setFormFields] = useState(defaultFormValue)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [formType, setFormType] = useState(FormType.LOGIN)

  const { email, password } = formFields
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    if (formType === FormType.SIGNUP) {
      try {
        const response = await post('/user/signup', formFields)
        console.log('signup', response.data)
        setFormType(FormType.LOGIN)
        resetForm()
        setTimeout(() => {
          alert('You can login now!')
        }, 200)
      } catch (e) {
        switch (e.response.data.message) {
          case 'EMAIL_REGISTERED':
            alert('Already registered')
            break
          default:
            console.log('shit happened at signup', e.response.data.message)
        }
      }
    } else if (formType === FormType.LOGIN) {
      try {
        const response = await post('/user/login', formFields)
        handleLogin(response.data)
        navigate('/')
      } catch (e) {
        switch (e.response.data.message) {
          case 'INVALID_CREDENTIALS':
            alert('user not found')
            break
          case 'INVALID_FORMAT':
            alert('Incorrect password and email')
          default:
            console.log('shit happened at login', e.response.data.message)
        }
      }
    }
  }
  const handleChange = e => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }

  const changeForm = () => {
    setFormType(formType === FormType.LOGIN ? FormType.SIGNUP : FormType.LOGIN)
    resetForm()
  }

  const resetForm = () => {
    setFormFields({ email: '', password: '' })
    setConfirmPassword('')
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
          <Button
            type="submit"
            disabled={
              formType === FormType.LOGIN
                ? !email || !password
                : !email || !password || !confirmPassword || password !== confirmPassword
            }
          >
            {formType === FormType.LOGIN ? 'LOGIN' : 'SIGN UP'}
          </Button>
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
