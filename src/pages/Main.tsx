import Description from "../components/Description";
import Info from "../components/Info";
import Presentation from "../components/Presentation";
import FrontEnd from "../templates/Frontend";

import * as S from "./styles";

function Main() {
  return (
    <FrontEnd>
      <S.ColumnContainer>
        <S.Container>
          {/* <h5>Teste</h5> */}
          <Info />
          <Presentation />
        </S.Container>
        <Description />
      </S.ColumnContainer>
    </FrontEnd>
  );
}

export default Main;
