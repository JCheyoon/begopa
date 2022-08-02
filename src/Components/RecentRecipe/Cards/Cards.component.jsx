import Card from '../Card/Card.component'
import { CardGrid } from './Cards.style'

const Cards = ({ recipes, isMyRecipe }) => {
  return (
    <CardGrid>
      {recipes.map(({ name, photoUrl, cookingTime, tags, id }) => (
        <Card
          recipeName={name}
          imgUrl={photoUrl}
          time={cookingTime}
          tags={tags}
          recipeId={id}
          key={id}
          isMyRecipe={isMyRecipe}
        />
      ))}
    </CardGrid>
  )
}

export default Cards
