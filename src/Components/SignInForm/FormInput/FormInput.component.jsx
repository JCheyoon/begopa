import { FormInputLabel, Input, Group } from './FormInput.style'

const FormInput = ({ label }) => {
  return (
    <Group>
      <Input />
      <FormInputLabel>{label}</FormInputLabel>
    </Group>
  )
}

export default FormInput
