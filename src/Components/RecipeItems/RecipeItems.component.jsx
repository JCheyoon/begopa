import {
  CookingTime,
  DescriptionContainer,
  Ingredient,
  InstructionsContainer,
  MainSection,
  Photo,
  RecipeItemCategoriesContainer,
  RecipeItemsContainer,
  RecipeItemsSection,
  RelatedRecipe,
  RelatedRecipeContainer,
  RelateRecipePic,
  ServingInput,
  Time,
} from './RecipeItems.style'

const RecipeItems = ({
  cookingTime,
  updatedAt,
  instructions,
  photoUrl,
  ingredients,
  servings,
  tags,
}) => {
  const changeCreateTime = string => {
    const date = new Date(string)
    return date.toLocaleString()
  }
  const onChange = () => {
    console.log('change')
  }
  return (
    <RecipeItemsContainer>
      <RecipeItemsSection>
        <MainSection>
          <CookingTime>
            <Time>
              <span className="material-symbols-outlined">timer</span>
              <span>{cookingTime}</span>
            </Time>
            <h2>{changeCreateTime(updatedAt)}</h2>
          </CookingTime>
          <Photo photoUrl={photoUrl} />
          <InstructionsContainer>
            <h1>Ingredients</h1>
            <span>Adjust Servings</span>
            <ServingInput type="number" value={servings} onChange={onChange}></ServingInput>
            {ingredients.map(({ amount, unit, material }) => (
              <Ingredient key={material}>
                <span>{amount}</span>
                <span>{unit}</span>
                <span>{material}</span>
              </Ingredient>
            ))}

            <DescriptionContainer>
              <h1>Directions</h1>
              <p>{instructions}</p>
            </DescriptionContainer>
          </InstructionsContainer>
          <RecipeItemCategoriesContainer>
            <h2>Category</h2>
            {tags.map(tag => (
              <span key={tag}>{tag}</span>
            ))}
          </RecipeItemCategoriesContainer>
        </MainSection>

        <RelatedRecipeContainer>
          <h1>Related recipe</h1>
          <RelatedRecipe>
            <RelateRecipePic />
            <span>STAKE NYAM NYAM</span>
          </RelatedRecipe>
          <RelatedRecipe>
            <RelateRecipePic />
            <span>STAKE NYAM NYAM</span>
          </RelatedRecipe>
          <RelatedRecipe>
            <RelateRecipePic />
            <span>STAKE NYAM NYAM</span>
          </RelatedRecipe>
        </RelatedRecipeContainer>
      </RecipeItemsSection>
    </RecipeItemsContainer>
  )
}

export default RecipeItems
