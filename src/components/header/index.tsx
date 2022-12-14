import * as S from './styles'

import Logo from '../../assets/Ontalex.svg';

const Header = () => {
  return (
    <S.Container>
        <img src={Logo} alt='Logo Image'/>
      <S.MenuList>
        <S.ItemList>
          <a href="#" className="item1">About Me</a> 
        </S.ItemList>
        <S.ItemList>
          <a href="#" className='item2'>Skills</a> 
        </S.ItemList>
        <S.ItemList>
          <a href="#" className='item3'>Pet-Projects</a> 
        </S.ItemList>
        <S.ItemList>
          <a href="#" className='item4'>Contacts</a> 
        </S.ItemList>
      </S.MenuList>
    </S.Container>
  );
};

export default Header;
