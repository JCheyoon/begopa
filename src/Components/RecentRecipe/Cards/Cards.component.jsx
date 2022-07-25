import Card from '../Card/Card.component'
import { CardGrid } from './Cards.style'
import { Link } from 'react-router-dom'

const recipeSample = [
  {
    name: 'Tomahawk Steak',
    photoUrl:
      'https://149410494.v2.pressablecdn.com/wp-content/uploads/2020/03/beef-steak-tomahawk-S3JHQLN-700x525.jpg',
    cookingTime: '30',
    tags: ['spicy', 'chicken'],
    id: 'string1',
  },
  {
    name: 'Tofu and Cheese Pancakes',
    photoUrl:
      'https://149410494.v2.pressablecdn.com/wp-content/uploads/2020/03/vegan-tofu-baked-cheese-pancakes-with-mango-2GBH46C.jpg',
    cookingTime: '45',
    tags: ['cheese'],
    id: 'string2',
  },
  {
    name: 'Baked Chicken Breast',
    photoUrl:
      'https://149410494.v2.pressablecdn.com/wp-content/uploads/2020/03/baked-chicken-breast-9C4F43W-1024x682.jpg',
    cookingTime: '45',
    tags: ['cheese'],
    id: 'string3',
  },
  {
    name: 'Veggie Stir Fry',
    photoUrl:
      'https://149410494.v2.pressablecdn.com/wp-content/uploads/2020/03/cooked-vegetables-according-to-chinese-recipe-PN2GKUB-1024x684.jpg',
    cookingTime: '45',
    tags: ['cheese'],
    id: 'string4',
  },
  {
    name: 'Salad',
    photoUrl:
      'https://149410494.v2.pressablecdn.com/wp-content/uploads/2020/03/peruvian-ceviche-sebiche-peruvian-seafood-and-fish-38N9UH7-1024x683.jpg',
    cookingTime: '45',
    tags: ['apple', 'banana', 'orenge'],
    id: 'string5',
  },
  {
    name: 'Txfdf',
    photoUrl:
      'https://149410494.v2.pressablecdn.com/wp-content/uploads/2020/03/vegan-tofu-baked-cheese-pancakes-with-mango-2GBH46C.jpg',
    cookingTime: '80',
    tags: ['pork'],
    id: 'string6',
  },
]
const Cards = () => {
  return (
    <CardGrid>
      {recipeSample.map(({ name, photoUrl, cookingTime, tags, id }) => (
        <Card recipeName={name} imgUrl={photoUrl} time={cookingTime} tags={tags} key={id} />
      ))}
    </CardGrid>
  )
}

export default Cards
