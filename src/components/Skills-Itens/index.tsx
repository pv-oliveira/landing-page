import * as S from './styles'

import { ReactNode } from 'react'

interface props {
    logo: string,
    text: string
}

const SkillsItem = ({logo, text}: props) => {
  return (
    <S.Container>
        <div>
            <img src={logo}></img>
            <h5>{text}</h5>
        </div>
    </S.Container>
  )
}

export default SkillsItem