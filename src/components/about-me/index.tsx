import * as S from './styles'

import Logo from '../../assets/Logo.svg'

const Description = () => {
  return (
    <S.Container>
      <img src={Logo} alt='logo' />
      <h6>
      A few years ago, I became interested in developing websites and interfaces. Since then, I have been steadily improving my skills. 
      Now I am developing websites and web applications to order or for myself.
      </h6>
      </S.Container>
  )
}

export default Description