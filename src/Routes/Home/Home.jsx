import Category from '../../Components/Category/Category..componet'
import RecentRecipe from '../../Components/RecentRecipe/RecentRecipe.component'
import Footer from '../../Components/Footer/Footer.componet'

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
