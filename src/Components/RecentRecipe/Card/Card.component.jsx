import { CardWrapper, CardImg, CardDescription, CardTime } from '../Card/Card.style'
import { Link } from 'react-router-dom'

const Card = ({ recipeName, imgUrl, time, tags, recipeId }) => {
  return (
    <CardWrapper>
      <Link to={`/recipe/${recipeId}`}>
        <CardImg imgUrl={imgUrl} />
      </Link>

      <CardDescription>
        <h1>{recipeName}</h1>
        <CardTime>
          <span className="material-symbols-outlined">timer</span>
          <h2>{time}mins</h2>
        </CardTime>
        {tags.map(tag => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </CardDescription>
    </CardWrapper>
  )
}
export default Card
