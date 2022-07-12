import styled from 'styled-components'

export const RecentRecipeContainer = styled.div`
  height: 100%;
  text-align: center;
  background-image: url('/pattern.png');
  background-repeat: repeat;
  padding: 40px 0;
`

export const ViewRecipesBtn = styled.button`
  text-decoration: none;
  border: none;
  background-color: var(--orange);
  font-size: 15px;
  padding: 20px 24px;
  border-radius: 3px;
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: var(--dark-orange);
  }
`
