import {
  CardWrapper,
  CardImg,
  CardDescription,
  CardTime,
  DeleteContainer,
  DeleteButton,
} from './Card.style'
import { Link } from 'react-router-dom'
import { useContextRecipe } from '../../../Context/recipeContext'

const Card = ({ recipeName, imgUrl, time, tags, recipeId, isMyRecipe }) => {
  const { deleteRecipe, fetchMyRecipes } = useContextRecipe()

  const removeRecipe = async () => {
    try {
      console.log(recipeId)
      await deleteRecipe(recipeId)
      fetchMyRecipes()
    } catch (e) {
      console.log('error', e.response.data.message)
    }
  }

  return (
    <CardWrapper>
      <Link to={`/recipe/${recipeId}`}>
        <CardImg imgUrl={imgUrl} />
      </Link>

      <CardDescription>
        <h1>{recipeName}</h1>
        <CardTime>
          <span className="material-symbols-outlined">timer</span>
          <h2>{time}</h2>
        </CardTime>
        {tags.map(tag => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
        {isMyRecipe === true ? (
          <DeleteContainer>
            <DeleteButton onClick={removeRecipe}>
              <span className="material-symbols-outlined">delete</span>
            </DeleteButton>
          </DeleteContainer>
        ) : null}
      </CardDescription>
    </CardWrapper>
  )
}
export default Card
