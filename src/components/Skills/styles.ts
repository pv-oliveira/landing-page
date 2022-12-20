import styled from "styled-components";

export const Container = styled.div`
  /* skills */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 0px;
  gap: 32px;

  /* width: 1440px; */
  height: 494px;

  background: radial-gradient(
    100% 100% at 50% 0.03%,
    #1f1e1b 27.25%,
    #1b1a17 100%
  );

  /* Inside auto layout */

  flex: none;
  order: 3;
  flex-grow: 0;

  h3 {
    /* My Skills */

    width: 1091px;
    height: 34px;

    font-family: "Inconsolata";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 34px;
    /* identical to box height */

    text-align: center;

    color: #ff8303;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  section {
    /* line_skills */

    /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;

    width: 1064px;
    height: 300px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;

    span {
      display: flex;
    }
  }

  @media only screen and (max-width: 850px) {
    height: 810px;

    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;

    section {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      /* flex-flow: column wrap; */
      padding: 0px 64px;
      gap: 16px;

      width: 704px;
      height: 616px;

      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 0;
      


    }

    h3 {
      width: auto;
    }
  }
`;
