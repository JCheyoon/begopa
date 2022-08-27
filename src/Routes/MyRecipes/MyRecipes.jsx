import { Page } from '../../Components/Page/Page.style'
import RecipeHeader from '../../Components/RecipeHeader/RecipeHeader.component'
import Footer from '../../Components/Footer/Footer.component'
import ScrollUp from '../../Components/ScrollUp/ScrollUp.component'
import Cards from '../../Components/RecentRecipe/Cards/Cards.component'
import { useContextRecipe } from '../../Context/recipeContext'
import { useEffect, useState } from 'react'
import NoMyRecipes from '../../Components/NoMyRecipes/NoMyRecipes.component'
import { useContextModal } from '../../Context/ModalContext'
import { useContextAuth } from '../../Context/authContext'
import Spinner from '../../Components/Spinner/Spinner.component'

const MyRecipes = () => {
  const { myRecipes, fetchMyRecipes } = useContextRecipe()
  const { isLoggedIn } = useContextAuth()
  const { showModal } = useContextModal()
  const [loading, setLoading] = useState(true)

  const viewMyRecipes = async () => {
    setLoading(true)

    try {
      await fetchMyRecipes()
    } catch (e) {
      showModal({ title: 'Error', message: 'Could not fetch my recipes' })
      console.log(e.response.data.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      viewMyRecipes()
    }
  }, [isLoggedIn])

  if (loading) return <Spinner />

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
