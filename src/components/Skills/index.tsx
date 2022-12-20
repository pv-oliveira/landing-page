import SkillsItem from '../Skills-Itens';
import * as S from './styles';

import logoHTML from '../../assets/iconhtml.svg';
import logoCSS3 from '../../assets/iconcss.svg';
import logoJS from '../../assets/iconjs.svg';
import logoSCSS from '../../assets/iconscss.svg';
import logoGIT from '../../assets/icongit.svg';


const Skills = () => {
  return (
    <S.Container>
        <h3>My Skills</h3>   
        <section>
          <span className='item1'>
            <SkillsItem logo={logoHTML} text={'HTML5'} />
            <SkillsItem logo={logoCSS3} text={'CSS3'} />
            <SkillsItem logo={logoJS} text={'JavaScript'} />
          </span>
          <span className='item2'>
            <SkillsItem logo={logoSCSS} text={'SCSS'} />
            <SkillsItem logo={logoGIT} text={'Git'} />
          </span>
        </section>
    </S.Container>
  )
}

export default Skills