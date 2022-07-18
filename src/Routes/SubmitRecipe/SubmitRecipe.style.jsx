import styled from 'styled-components'

export const SubmitRecipeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`

export const SubmitRecipeSection = styled.section`
  background-color: var(--dark-white);
  width: 1200px;
  margin-bottom: 10px;

  

  &.header {
    background-color: var(--light-gray);
    display: flex;
    align-items: center;
    margin-bottom: 0;
    flex-direction: column;
    
    h1 {
      padding: 0 10px;
    }
  }

  &.info {
    flex-grow: 2;
  }
  &.ingredient {
    flex-grow: 2;
  }
  &.instruction {
    flex-grow: 3;
    
    input{
      width: 700px;
      height: 400px;
    }
  }
  &.tag {
  }
  &.bottom {
    background-color: var(--white)
    flex-grow: -1;
    display: flex;
    
    label{
      width: 600px;

    }
  }
`

export const SubmitRecipeInput = styled.div`
  color: var(--black);
  font-size: 18px;
  padding: 20px;

  label {
    display: inline-block;
    width: 200px;
  }

  input {
    border-radius: 0;
    border: 1px solid var(--black);
    background-color: white;
    padding: 10px 10px 10px 5px;

    ::placeholder {
      color: var(--orange);
    }
  }
`
