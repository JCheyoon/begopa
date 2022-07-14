import styled from 'styled-components'

export const SignInFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h1,
  span {
    margin: 10px 0;
    text-align: center;
    color: var(--light-black);
    font-weight: 300;
  }
  span {
    color: var(--gray);
    cursor: pointer;
    transition: ease-in 300ms;

    &:hover {
      color: var(--orange);
    }
  }
`

export const SignInButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SignInButton = styled.button`
  text-decoration: none;
  border-radius: 10px;
  background-color: var(--white);
  border: 2px solid var(--light-black);
  color: var(--light-black);
  width: 200px;
  padding: 10px 0;
  font-weight: 700;
  cursor: pointer;
  transition: ease-in-out 250ms;
  &:hover {
    color: var(--white);
    background-color: var(--light-black);
  }
`
