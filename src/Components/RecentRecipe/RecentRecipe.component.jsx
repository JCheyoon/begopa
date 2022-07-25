import { RecentRecipeContainer } from './RecentRecipe.style'
import Cards from './Cards/Cards.component'
import { Button } from '../Page/Page.style'

const RecentRecipe = () => {
  return (
    <RecentRecipeContainer>
      <h3>Recent Recipes</h3>
      <h1>Latest Recipes</h1>
      <Cards />
      <Button>View All Recipes</Button>
    </RecentRecipeContainer>
  )
}
export default RecentRecipe
