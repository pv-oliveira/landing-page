import Description from "../components/about-me";
import Footer from "../components/Footer";
import Info from "../components/Info";
import MyWorks from "../components/MyWorks";
import Presentation from "../components/Presentation";
import Skills from "../components/Skills";
import FrontEnd from "../templates/Frontend";

import * as S from "./styles";

function Main() {
  return (
    <FrontEnd>
      <S.ColumnContainer>
        <S.Container>
          <Info />
          <Presentation />
        </S.Container>
        <Description />
        <Skills />
        <MyWorks />
        <Footer />
      </S.ColumnContainer>
    </FrontEnd>
  );
}

export default Main;
