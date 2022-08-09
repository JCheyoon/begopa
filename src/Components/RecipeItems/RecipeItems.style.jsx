import styled from 'styled-components'

export const RecipeItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RecipeItemsSection = styled.div`
  display: flex;
`
export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const CookingTime = styled.div`
  background-color: var(--light-gray);
  width: 900px;
  height: 100px;
  margin-top: 30px;
  margin-right: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 30px;
    padding-left: 20px;
    font-weight: normal;
  }
  h2 {
    padding-right: 20px;
    padding-top: 50px;
    font-weight: bold;
    font-size: 18px;
  }
`
export const Time = styled.div`
  display: flex;
  align-items: center;
`

export const Photo = styled.div`
  background-size: cover;
  background-position: center;
  background-image: ${({ photoUrl }) => `url(${photoUrl})`};
  width: 900px;
  height: 500px;
  margin-top: 30px;
  margin-right: 30px;
`

export const InstructionsContainer = styled.div`
  width: 900px;
  border-top: 1px solid var(--light-gray);
  margin: 30px 0;

  h1 {
    margin: 10px 0;
    padding: 0;
    font-size: 44px;
    font-weight: 600;
  }
  span {
    margin: 5px 0;
    font-size: 20px;
  }
  p {
    font-size: 20px;

    white-space: pre-wrap;
  }
`

export const ServingInput = styled.span`
  width: 60px;
  height: 30px;

  span {
    font-family: 'Barlow', sans-serif;
    color: var(--light-black);
    font-size: 18px;
  }
`

export const Ingredient = styled.div`
  margin-top: 20px;
  span {
    padding: 0 10px;
  }
`
export const DescriptionContainer = styled.div`
  width: 900px;
  border-top: 1px solid var(--light-gray);
  margin: 30px 0;
`
export const RecipeItemCategoriesContainer = styled.div`
  width: 900px;
  border-top: 1px solid var(--light-gray);
  margin: 30px 0;
  span {
    margin: 5px 0;
    padding-right: 10px;
    font-size: 20px;
  }
`

export const ArrowButton = styled.button`
  cursor: pointer;
  text-decoration: none;
  background: none;
  border: none;

  font-size: 18px;
`
