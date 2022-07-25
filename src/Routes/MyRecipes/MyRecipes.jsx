import { Page } from '../../Components/Page/Page.style'
import RecipeHeader from '../../Components/RecipeHeader/RecipeHeader.component'
import Footer from '../../Components/Footer/Footer.component'
import ScrollUp from '../../Components/ScrollUp/ScrollUp.component'
import Cards from '../../Components/RecentRecipe/Cards/Cards.component'

const MyRecipes = () => {
  return (
    <Page>
      <RecipeHeader />
      <Cards />
      <Footer />
      <ScrollUp />
    </Page>
  )
}

export default MyRecipes
