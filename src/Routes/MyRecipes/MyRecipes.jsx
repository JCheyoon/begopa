import { Page } from '../../Components/Page/Page.style'
import RecipeHeader from '../../Components/RecipeHeader/RecipeHeader.component'
import Footer from '../../Components/Footer/Footer.component'
import ScrollUp from '../../Components/ScrollUp/ScrollUp.component'
import Cards from '../../Components/RecentRecipe/Cards/Cards.component'
import { useContextRecipe } from '../../Context/recipeContext'
import { useEffect } from 'react'
import NoMyRecipes from '../../Components/NoMyRecipes/NoMyRecipes.component'

const MyRecipes = () => {
  const { myRecipes, fetchMyRecipes } = useContextRecipe()

  const viewMyRecipes = async () => {
    try {
      await fetchMyRecipes()
    } catch (e) {
      console.log('Could not fetch my recipes', e.response.data.message)
      // TODO handle error properly
    }
  }

  useEffect(() => {
    viewMyRecipes()
  }, [])

  return (
    <Page>
      <RecipeHeader name="My recipes" />
      {myRecipes.length <= 0 ? <NoMyRecipes /> : <Cards recipes={myRecipes} isMyRecipe={true} />}
      <Footer />
      <ScrollUp />
    </Page>
  )
}

export default MyRecipes
