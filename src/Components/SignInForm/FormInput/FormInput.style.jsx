import styled from 'styled-components'

export const FormInputLabel = styled.label`
  color: var(--gray);
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.focus {
    color: transparent;
  }
`

export const Input = styled.input`
  background-color: white;
  color: var(--black);
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid var(--black);
  margin: 25px 0;
  &:focus {
    outline: none;
  }
`

export const Group = styled.div`
  position: relative;
  margin: 45px 0;
`
