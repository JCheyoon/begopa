import { NavbarContainer, SearchContainer, NavLink } from '../Navbar/Navbar.style'

const Navbar = () => {
  return (
    <NavbarContainer>
      <SearchContainer>
        Browse Recipes
        <input type="text" placeholder="Find a recipe..." />
        <button type="submit">
          <span className="material-symbols-outlined">search</span>
        </button>
      </SearchContainer>

      <NavLink to="/submit">
        <span className="material-symbols-outlined">description</span>
        <span>Submit Recipe</span>
      </NavLink>
      <NavLink to="/my-recipes">
        <span className="material-symbols-outlined">favorite</span>
        <span>My Recipes</span>
      </NavLink>
      <NavLink to="/auth">
        <span className="material-symbols-outlined">lock</span>
        <span>Login</span>
      </NavLink>
    </NavbarContainer>
  )
}

export default Navbar
