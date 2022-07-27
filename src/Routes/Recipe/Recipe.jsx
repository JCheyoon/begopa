import { Page } from '../../Components/Page/Page.style'
import Footer from '../../Components/Footer/Footer.component'
import RecipeHeader from '../../Components/RecipeHeader/RecipeHeader.component'
import RecipeItems from '../../Components/RecipeItems/RecipeItems.component'
import ScrollUp from '../../Components/ScrollUp/ScrollUp.component'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAxios } from '../../Hooks/useAxios'

const Recipe = () => {
  const { id } = useParams()
  const { get } = useAxios()
  const [recipe, setRecipe] = useState()

  useEffect(() => {
    if (!id) return
    fetchRecipe(id)
  }, [id])

  const fetchRecipe = async id => {
    try {
      const response = await get(`/recipe/${id}`)
      console.log(response.data)
      setRecipe(response.data)
    } catch (e) {
      console.log('Could not fetch recipe', e.response.data.message)
      // TODO handle error properly
    }
  }

  return (
    <Page>
      <RecipeHeader />
      <RecipeItems />
      <Footer />
      <ScrollUp />
    </Page>
  )
}
export default Recipe
