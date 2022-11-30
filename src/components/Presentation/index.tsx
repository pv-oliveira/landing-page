import * as S from "./styles";

import picture from "../../assets/pv.jpg";

const Presentation = () => {
  return (
    <>
      <S.Container>
        <h1>Paulo Victor</h1>
        <h2>Developer</h2>
        <h4>
          Frontend developer looking for ideas and projects for himself and
          others
        </h4>
      </S.Container>
      <S.PictureContainer>
        <img src={picture} alt="picture of the profile"></img>
      </S.PictureContainer>
    </>
  );
};

export default Presentation;
