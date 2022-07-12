import Category from '../../Components/Category/Category..component'
import RecentRecipe from '../../Components/RecentRecipe/RecentRecipe.component'
import Footer from '../../Components/Footer/Footer.component'

const Home = () => {
  return (
    <div style={{ paddingTop: '255px' }}>
      <Category />
      <RecentRecipe />
      <Footer />
    </div>
  )
}

export default Home
