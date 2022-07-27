import Category from '../../Components/Category/Category..component'
import BrowseRecipes from '../../Components/RecentRecipe/BrowseRecipes.component'
import Footer from '../../Components/Footer/Footer.component'
import ScrollUp from '../../Components/ScrollUp/ScrollUp.component'
import { Page } from '../../Components/Page/Page.style'
import { useContextRecipe } from '../../Context/recipeContext'
import { useEffect } from 'react'

const Home = () => {
  const { fetchRecentRecipes } = useContextRecipe()

  useEffect(() => {
    fetchRecents()
  }, [])

  const fetchRecents = async () => {
    try {
      await fetchRecentRecipes()
    } catch (e) {
      console.log('Could not fetch recent recipes', e.response.data.message)
      // TODO handle error properly
    }
  }

  return (
    <Page>
      <Category />
      <BrowseRecipes />
      <Footer />
      <ScrollUp />
    </Page>
  )
}

export default Home
