import styled from "styled-components";

export const Container = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 64px 0px;
  gap: 32px;

  /* width: 1440px; */
  height: 228.79px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;

  h6 {
    width: 904px;
    height: 76px;

    font-family: "Inconsolata";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 25px;

    color: #f0e3ca;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }

  @media only screen and (max-width: 850px) {
    padding: 64px;
    width: 704px;
    height: 253px;

      img {
        width: 100.71px;
        height: 100.79px;

        flex: none;
        order: 0;
        flex-grow: 0;
      }


    h6 {
      width: 443.29px;
      height: 125px;

      /* Inside auto layout */

      flex: none;
      order: 1;
      flex-grow: 1;
    }
  }
`;
