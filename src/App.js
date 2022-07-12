import { Route, Routes } from 'react-router-dom'

import Home from './Routes/Home/Home'
import Authentication from './Authentication/Authentication'
import ViewRecipes from './Routes/ViewRecipes/ViewRecipes'
import SubmitRecipe from '../src/Routes/SubmitRecipe/SubmitRecipe'
import Navigation from './Components/Navigation/Navigation.component'
import MyRecipes from './Routes/MyRecipes/MyRecipes'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="recipes" element={<ViewRecipes />} />
        <Route path="submit" element={<SubmitRecipe />} />
        <Route path="my-recipes" element={<MyRecipes />} />
      </Routes>
    </>
  )
}

export default App
