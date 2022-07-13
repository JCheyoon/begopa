import Category from '../../Components/Category/Category..component'
import RecentRecipe from '../../Components/RecentRecipe/RecentRecipe.component'
import Footer from '../../Components/Footer/Footer.component'
import ScrollUp from '../../Components/ScrollUp/ScrollUp.component'
import { Page } from '../../Components/Page/Page.style'

const Home = () => {
  return (
    <Page>
      <Category />
      <RecentRecipe />
      <Footer />
      <ScrollUp />
    </Page>
  )
}

export default Home
