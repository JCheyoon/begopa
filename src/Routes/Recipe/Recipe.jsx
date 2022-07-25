import { Page } from '../../Components/Page/Page.style'
import Footer from '../../Components/Footer/Footer.component'
import RecipeHeader from '../../Components/RecipeHeader/RecipeHeader.component'
import RecipeItems from '../../Components/RecipeItems/RecipeItems.component'
import ScrollUp from '../../Components/ScrollUp/ScrollUp.component'

const Recipe = () => {
  return (
    <Page>
      <RecipeHeader />
      <RecipeItems />
      <Footer />
      <ScrollUp />
    </Page>
  )
}
export default Recipe
