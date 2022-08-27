import {
  CardWrapper,
  CardImg,
  CardDescription,
  CardTime,
  IconContainer,
  DeleteButton,
  EditButton,
} from './Card.style'
import { Link } from 'react-router-dom'
import { useContextRecipe } from '../../../Context/recipeContext'
import { useNavigate } from 'react-router-dom'

const Card = ({ recipeName, imgUrl, time, tags, recipeId, isMyRecipe, isPublic }) => {
  const { deleteRecipe, fetchMyRecipes } = useContextRecipe()
  const navigate = useNavigate()

  const removeRecipe = async () => {
    try {
      console.log(recipeId)
      await deleteRecipe(recipeId)
      fetchMyRecipes()
    } catch (e) {
      console.log('error', e.response.data.message)
    }
  }

  const goEditModeHandler = () => {
    navigate(`/edit/${recipeId}?public=${isPublic}`)
  }

  return (
    <CardWrapper>
      <Link to={`/recipe/${recipeId}?public=${isPublic}`}>
        <CardImg imgUrl={imgUrl} />
      </Link>

      <CardDescription>
        <Link to={`/recipe/${recipeId}?public=${isPublic}`}>
          <h1>{recipeName}</h1>
        </Link>
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
          <IconContainer>
            <EditButton onClick={goEditModeHandler}>
              <span className="material-symbols-outlined">edit</span>
            </EditButton>
            <DeleteButton onClick={removeRecipe}>
              <span className="material-symbols-outlined">delete</span>
            </DeleteButton>
          </IconContainer>
        ) : null}
      </CardDescription>
    </CardWrapper>
  )
}
export default Card
