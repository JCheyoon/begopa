import { NavigationContainer, LogoContainer, LogoWithTextSvg } from './Navigation.style'
import { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar.componet'

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(window.scrollY)
      setIsSticky(window.scrollY > 190)
    })
  }, [])

  return (
    <NavigationContainer className={isSticky ? 'sticky' : ''}>
      {!isSticky && (
        <LogoContainer to="/">
          <LogoWithTextSvg />
        </LogoContainer>
      )}

      <Navbar />
    </NavigationContainer>
  )
}

export default Navigation
