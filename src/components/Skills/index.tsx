import SkillsItem from '../Skills-Itens/indes';
import * as S from './styles';

import logo from '../../assets/iconhtml.svg'


const Skills = () => {
  return (
    <S.Container>
        <h3>My Skills</h3>   
        <span>
            <SkillsItem logo={logo} text={'HTML5'} />
            <SkillsItem logo={logo} text={'HTML5'} />
            <SkillsItem logo={logo} text={'HTML5'} />
            <SkillsItem logo={logo} text={'HTML5'} />
            <SkillsItem logo={logo} text={'HTML5'} />
        </span>
    </S.Container>
  )
}

export default Skills