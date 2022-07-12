import { NavigationContainer, LogoContainer, LogoWithTextSvg } from './Navigation.style'
import { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar.component'

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
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
