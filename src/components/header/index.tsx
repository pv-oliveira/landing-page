import * as S from "./styles";

import Logo from '../../assets/Ontalex.svg';

const Header = () => {
  return (
    <S.Container>
      <div>
        <img src={Logo} alt='Logo Image'></img>
      </div>
      <S.MenuList>
        <S.ItemList>
          <a href="#" className="item1">About Me</a> 
        </S.ItemList>
        <S.ItemList>
          <a href="#">Skills</a> 
        </S.ItemList>
        <S.ItemList>
          <a href="#">Pet-Projects</a> 
        </S.ItemList>
        <S.ItemList>
          <a href="#">Contacts</a> 
        </S.ItemList>
      </S.MenuList>
    </S.Container>
  );
};

export default Header;
