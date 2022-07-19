import { RecentRecipeContainer } from './RecentRecipe.style'
import Cards from './Cards/Cards.component'
import { PageBtn } from '../Page/Page.style'
import { Link } from 'react-router-dom'

const RecentRecipe = () => {
  return (
    <RecentRecipeContainer>
      <h3>Recent Recipes</h3>
      <h1>Latest Recipes</h1>
      <Cards />
      <Link to="/recipes">
        <PageBtn>View All Recipes</PageBtn>
      </Link>
    </RecentRecipeContainer>
  )
}
export default RecentRecipe
