import { Route, Routes } from 'react-router-dom'

import Home from './Routes/Home/Home'
import Authentication from './Routes/Authentication/Authentication'
import Recipe from './Routes/Recipe/Recipe'
import SubmitRecipe from '../src/Routes/SubmitRecipe/SubmitRecipe'
import Navigation from './Components/Navigation/Navigation.component'
import MyRecipes from './Routes/MyRecipes/MyRecipes'
import { AuthProvider } from './Context/authContext'
import { RecipeProvider } from './Context/recipeContext'
import { ModalProvider } from './Context/ModalContext'
import Modal from './Modal/Modal'

function App() {
  return (
    <ModalProvider>
      <Modal />
      <AuthProvider>
        <RecipeProvider>
          <Navigation />
          <Routes>
            <Route index element={<Home />} />
            <Route path="auth" element={<Authentication />} />
            <Route path="recipe/:id" element={<Recipe />} />
            <Route path="submit" element={<SubmitRecipe />} />
            <Route path="edit/:id" element={<SubmitRecipe isEditMode={true} />} />
            <Route path="my-recipes" element={<MyRecipes />} />
          </Routes>
        </RecipeProvider>
      </AuthProvider>
    </ModalProvider>
  )
}

export default App
