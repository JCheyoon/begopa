import { FooterContainer, FooterLink, FooterLinks, LinkedinLogo, GithubLogo } from './Footer.style'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="mailto:jessietwo94@gmail.com" target="_blank">
          <span className="material-icons" style={{ fontSize: '40px' }}>
            mail
          </span>
        </FooterLink>
        <FooterLink href="https://linkedin.com/" target="_blank">
          <LinkedinLogo />
        </FooterLink>
        <FooterLink href="https://github.com/JCheyoon" target="_blank">
          <GithubLogo />
        </FooterLink>
      </FooterLinks>
      <h1>Copyright © 2022, Cheyoon Jung</h1>
    </FooterContainer>
  )
}

export default Footer
