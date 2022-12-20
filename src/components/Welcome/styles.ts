import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 68px;
  gap: 137px;

  height: 720px;

  @media only screen and (max-width: 850px) {
    /* Auto layout */

    flex-direction: column;
    padding: 128px 68px;
    gap: 64px;

    width: 704px;
    height: 1072px;
  }
`;
