import { BrowseRecipesContainer } from './BrowseRecipes.style'
import Cards from './Cards/Cards.component'
import { Button } from '../Page/Page.style'
import { useState } from 'react'
import { useContextRecipe } from '../../Context/recipeContext'

const recipeTitles = {
  recent: 'Recent Recipes',
  all: 'All Recipes',
  results: 'Search Results',
}

const BrowseRecipes = () => {
  const { allRecipes, filteredRecipes, fetchAllRecipes } = useContextRecipe()
  const [title, setTitle] = useState(recipeTitles.recent)

  const viewAllRecipes = async () => {
    try {
      await fetchAllRecipes()
    } catch (e) {
      console.log('Could not fetch all recipes', e.response.data.message)
      // TODO handle error properly
    }
    setTitle(recipeTitles.all)
  }

  return (
    <BrowseRecipesContainer>
      <h3>Browse Recipes</h3>
      <h1>{title}</h1>
      <Cards recipes={filteredRecipes} />
      {allRecipes.length !== filteredRecipes.length ? (
        <Button onClick={viewAllRecipes}>View All Recipes</Button>
      ) : null}
    </BrowseRecipesContainer>
  )
}
export default BrowseRecipes
