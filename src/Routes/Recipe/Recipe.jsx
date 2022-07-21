import { Page } from '../../Components/Page/Page.style'
import Footer from '../../Components/Footer/Footer.component'
import RecipeHeader from '../../Components/RecipeHeader/RecipeHeader.component'
import Cards from '../../Components/RecentRecipe/Cards/Cards.component'

const ViewRecipes = () => {
  return (
    <Page>
      <RecipeHeader />
      <Cards />
      <Footer />
    </Page>
  )
}
export default ViewRecipes
