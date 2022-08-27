import { Page } from '../../Components/Page/Page.style'
import Footer from '../../Components/Footer/Footer.component'
import RecipeHeader from '../../Components/RecipeHeader/RecipeHeader.component'
import RecipeItems from '../../Components/RecipeItems/RecipeItems.component'
import ScrollUp from '../../Components/ScrollUp/ScrollUp.component'
import { useParams, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAxios } from '../../Hooks/useAxios'
import { useContextRecipe } from '../../Context/recipeContext'
import Spinner from '../../Components/Spinner/Spinner.component'
import { useContextAuth } from '../../Context/authContext'
import { useContextModal } from '../../Context/ModalContext'

const Recipe = () => {
  const { id } = useParams()
  const { search } = useLocation()
  const { get } = useAxios()
  const { allRecipes, fetchInitialRecipes } = useContextRecipe()
  const { token } = useContextAuth()
  const [recipe, setRecipe] = useState()
  const [loading, setLoading] = useState(false)
  const { showModal } = useContextModal()

  useEffect(() => {
    if (!id) return
    if (!allRecipes.length) {
      fetchInitialRecipes()
    }
    const query = new URLSearchParams(search)
    const isPublic = query.get('public') === 'true'
    fetchRecipe(id, isPublic)
  }, [id, token])

  const fetchRecipe = async (id, isPublic) => {
    setLoading(true)
    try {
      const response = await get(`/recipe/${isPublic ? '' : 'private/'}${id}`, token)
      setRecipe(response.data)
    } catch (e) {
      showModal({ title: 'Error', message: 'Could not fetch recipe' })
      console.log(e.response.data.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Spinner />

  if (!recipe) return null

  return (
    <Page>
      <RecipeHeader name={recipe.name} />
      <RecipeItems
        name={recipe.name}
        cookingTime={recipe.cookingTime}
        updatedAt={recipe.updatedAt}
        instructions={recipe.instructions}
        photoUrl={recipe.photoUrl}
        ingredients={recipe.ingredients}
        tags={recipe.tags}
        servings={recipe.servings}
        id={recipe.id}
      />
      <Footer />
      <ScrollUp />
    </Page>
  )
}
export default Recipe
