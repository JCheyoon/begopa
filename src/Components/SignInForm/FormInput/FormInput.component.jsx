import { Input, FormInputContainer } from './FormInput.style'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormInputContainer>
      <Input placeholder={label} {...otherProps} />
    </FormInputContainer>
  )
}

export default FormInput
