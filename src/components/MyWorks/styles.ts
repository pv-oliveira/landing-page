import styled from "styled-components";

export const Container = styled.div`
  /* portfolio */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 0px;
  gap: 32px;

  /* width: 1440px; */
  height: 537.91px;

  background: radial-gradient(
    100.01% 100.01% at 50% 100.04%,
    #1f1e1b 31.04%,
    #1b1a17 100%
  );

  /* Inside auto layout */

  flex: none;
  order: 4;
  flex-grow: 0;

  h3 {
    /* My Works */

    width: 185.81px;
    height: 57.91px;

    font-family: "Inconsolata";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 34px;
    text-align: center;

    color: #ff8303;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  span {
    /* grid_portfolio */

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 16px;

    /* width: 1440px; */
    height: 320px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }
`;
