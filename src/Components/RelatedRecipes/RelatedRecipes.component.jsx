import {
  RelatedRecipeContainer,
  RelateRecipePic,
  RelatedRecipe,
  NoRelatedRecipeContainer,
} from './RelatedRecipes.style'
import { useContextRecipe } from '../../Context/recipeContext'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const RelatedRecipes = ({ tags, id }) => {
  const { getRelatedRecipes } = useContextRecipe()
  const [relatedRecipes, setRelatedRecipes] = useState([])

  useEffect(() => {
    setRelatedRecipes(getRelatedRecipes(tags, id))
  }, [id])

  return (
    <RelatedRecipeContainer>
      <h1>Related recipes</h1>
      {relatedRecipes.length ? (
        relatedRecipes.map(({ id, photoUrl, name }) => (
          <RelatedRecipe key={id}>
            <Link to={`/recipe/${id}`}>
              <RelateRecipePic photoUrl={photoUrl} />
            </Link>
            <Link to={`/recipe/${id}`}>
              <span>{name}</span>
            </Link>
          </RelatedRecipe>
        ))
      ) : (
        <RelatedRecipe>
          <NoRelatedRecipeContainer>
            <span className="material-symbols-outlined">sentiment_dissatisfied</span>
            <h3>There is no related recipes</h3>
          </NoRelatedRecipeContainer>
        </RelatedRecipe>
      )}
    </RelatedRecipeContainer>
  )
}

export default RelatedRecipes
