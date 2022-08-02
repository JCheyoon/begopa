import { CategoryContainer, CategoriesContainer } from './Category.style'
import Tag from './Tag/Tag.component'
import { useContextRecipe } from '../../Context/recipeContext'
import { useEffect } from 'react'

const Category = () => {
  const { allRecipes, fetchAllRecipes } = useContextRecipe()

  const viewAllRecipes = async () => {
    try {
      await fetchAllRecipes()
    } catch (e) {
      console.log('Could not fetch all recipes', e.response.data.message)
      // TODO handle error properly
    }
  }

  useEffect(() => {
    viewAllRecipes()
    console.log(allRecipes)
  }, [])

  return (
    <CategoriesContainer>
      <h3>Choose a Category</h3>
      <h1>Recipe Categories</h1>
      <CategoryContainer>
        {allRecipes.map(({ id, tags }) => (
          <Tag key={id} name={tags} />
        ))}
      </CategoryContainer>
    </CategoriesContainer>
  )
}

export default Category
