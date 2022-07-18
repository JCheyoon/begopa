import { RecentRecipeContainer } from './RecentRecipe.style'
import Cards from './Cards/Cards.component'
import { PageBtn } from '../Page/Page.style'

const RecentRecipe = () => {
  return (
    <RecentRecipeContainer>
      <h3>Recent Recipes</h3>
      <h1>Latest Recipes</h1>
      <Cards />
      <PageBtn>View All Recipes</PageBtn>
    </RecentRecipeContainer>
  )
}
export default RecentRecipe
