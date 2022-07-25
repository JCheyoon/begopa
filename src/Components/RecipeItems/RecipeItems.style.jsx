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
export const Time = styled.div``

export const Photo = styled.div`
  background-color: aquamarine;
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
    padding-right: 10px;
    font-size: 20px;
  }
`

export const ServingInput = styled.input`
  border: 1px solid var(--gray);
  width: 60px;
  height: 30px;
`

export const Ingredient = styled.div`
  margin-top: 20px;
  span {
    padding-right: 10px;
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
`
export const RelatedRecipeContainer = styled.div`
  height: 650px;
  width: 400px;
  background-color: var(--light-gray);
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    padding-bottom: 10px;
  }
`
export const RelatedRecipe = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px 0;
  border-bottom: 2px solid var(--light-black);
`

export const RelateRecipePic = styled.div`
  background-color: brown;
  width: 70px;
  height: 70px;
  margin-right: 20px;
`
