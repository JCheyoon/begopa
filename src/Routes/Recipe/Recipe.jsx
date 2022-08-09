import { Page } from '../../Components/Page/Page.style'
import Footer from '../../Components/Footer/Footer.component'
import RecipeHeader from '../../Components/RecipeHeader/RecipeHeader.component'
import RecipeItems from '../../Components/RecipeItems/RecipeItems.component'
import ScrollUp from '../../Components/ScrollUp/ScrollUp.component'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAxios } from '../../Hooks/useAxios'
import { useContextRecipe } from '../../Context/recipeContext'

const Recipe = () => {
  const { id } = useParams()
  const { get } = useAxios()
  const { allRecipes, fetchInitialRecipes } = useContextRecipe()
  const [recipe, setRecipe] = useState()

  useEffect(() => {
    if (!id) return
    if (!allRecipes.length) {
      fetchInitialRecipes()
    }
    fetchRecipe(id)
  }, [id])

  const fetchRecipe = async id => {
    try {
      const response = await get(`/recipe/${id}`)
      setRecipe(response.data)
    } catch (e) {
      console.log('Could not fetch recipe', e.response.data.message)
      // TODO handle error properly
    }
  }

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
        id={id}
      />
      <Footer />
      <ScrollUp />
    </Page>
  )
}
export default Recipe
