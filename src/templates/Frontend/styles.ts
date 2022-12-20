import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  height: 100%;

  main {
    flex: 1;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 850px) {
    align-items: flex-start;
    padding: 0px;

    position: relative;
    width: 704px;

    main {
      position: absolute;
      top: 100px;
    }
  }

  @media only screen and (max-width: 450px) {
    width: 100%;
    height: 3852px;
  }
`;
