import Description from "../components/about-me";
import Footer from "../components/Footer";
import Info from "../components/Info";
import MyWorks from "../components/MyWorks";
import Presentation from "../components/Presentation";
import Skills from "../components/Skills";
import Welcome from "../components/Welcome";
import FrontEnd from "../templates/Frontend";

import * as S from "./styles";

function Main() {
  return (
    <FrontEnd>
      <S.ColumnContainer>
        <Welcome />
        <Description />
        <Skills />
        <MyWorks />
        <Footer />
      </S.ColumnContainer>
    </FrontEnd>
  );
}

export default Main;
