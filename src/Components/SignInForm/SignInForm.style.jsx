import styled from 'styled-components'

export const SignInFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h1,
  span {
    margin: 10px 0;
    text-align: center;
    color: var(--orange);
  }
  span {
    color: var(--gray);
  }
`

export const SignInButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SignInButton = styled.button`
  text-decoration: none;
  border-radius: 30px;
  background-color: var(--orange);
  border: none;
  color: var(--white);
  width: 100px;
  padding: 20px 0;
  font-weight: bold;
  cursor: pointer;
`
