import { RecentRecipeContainer, ViewRecipesBtn } from './RecentRecipe.style'
import Cards from './Cards/Cards.component'

const RecentRecipe = () => {
  return (
    <RecentRecipeContainer>
      <h3>Recent Recipes</h3>
      <h1>Latest Recipes</h1>
      <Cards />
      <ViewRecipesBtn>View All Recipes</ViewRecipesBtn>
    </RecentRecipeContainer>
  )
}
export default RecentRecipe
