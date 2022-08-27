import { Page } from '../../Components/Page/Page.style'
import RecipeHeader from '../../Components/RecipeHeader/RecipeHeader.component'
import Footer from '../../Components/Footer/Footer.component'
import ScrollUp from '../../Components/ScrollUp/ScrollUp.component'
import Cards from '../../Components/RecentRecipe/Cards/Cards.component'
import { useContextRecipe } from '../../Context/recipeContext'
import { useEffect } from 'react'
import NoMyRecipes from '../../Components/NoMyRecipes/NoMyRecipes.component'
import { useContextModal } from '../../Context/ModalContext'

const MyRecipes = () => {
  const { myRecipes, fetchMyRecipes } = useContextRecipe()
  const { showModal } = useContextModal()

  const viewMyRecipes = async () => {
    try {
      await fetchMyRecipes()
    } catch (e) {
      showModal({ title: 'Error', message: 'Could not fetch my recipes' })
      console.log(e.response.data.message)
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
