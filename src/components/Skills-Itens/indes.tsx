import * as S from './styles'

import { ReactNode } from 'react'

interface props {
    logo: string,
    text: string
}

const SkillsItem = ({logo, text}: props) => {
  return (
    <S.Container>
        <span>
            <img src={logo}></img>
            <h5>{text}</h5>
        </span>
    </S.Container>
  )
}

export default SkillsItem