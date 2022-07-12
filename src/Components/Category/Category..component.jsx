import { CategoryContainer, CategoriesContainer } from './Category.style'
import Tag from './Tag/Tag.component'

const taglists = [
  {
    tag: 'Spicy',
  },
  {
    tag: 'Chicken',
  },
  {
    tag: 'Pork',
  },
  {
    tag: 'Beef',
  },
  {
    tag: 'Vegetable',
  },
  {
    tag: 'Side dish',
  },
  {
    tag: 'Cheese',
  },
]

const Category = () => {
  return (
    <CategoriesContainer>
      <h3>Choose a Category</h3>
      <h1>Recipe Categories</h1>
      <CategoryContainer>
        {taglists.map(({ tag }) => (
          <Tag key={tag} name={tag} />
        ))}
      </CategoryContainer>
    </CategoriesContainer>
  )
}

export default Category
