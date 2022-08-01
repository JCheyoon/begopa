import { HeaderContainer } from './RecipeHeader.style'

const RecipeHeader = ({ name }) => {
  return (
    <HeaderContainer>
      <h1>{name}</h1>
    </HeaderContainer>
  )
}
export default RecipeHeader
