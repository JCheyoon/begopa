import Category from '../../Components/Category/Category..component'
import BrowseRecipes from '../../Components/RecentRecipe/BrowseRecipes.component'
import Footer from '../../Components/Footer/Footer.component'
import ScrollUp from '../../Components/ScrollUp/ScrollUp.component'
import { Page } from '../../Components/Page/Page.style'
import { useContextRecipe } from '../../Context/recipeContext'
import { useEffect, useState } from 'react'
import Spinner from '../../Components/Spinner/Spinner.component'
import { useContextModal } from '../../Context/ModalContext'

const Home = () => {
  const { fetchInitialRecipes } = useContextRecipe()
  const [loading, setLoading] = useState(false)
  const { showModal } = useContextModal()

  useEffect(() => {
    fetchRecents()
  }, [])

  const fetchRecents = async () => {
    setLoading(true)
    try {
      await fetchInitialRecipes()
    } catch (e) {
      showModal({ title: 'Error', message: 'Could not fetch recent recipes' })
      console.log(e.response.data.message)
    } finally {
      setLoading(false)
    }
  }
  if (loading) return <Spinner />

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
