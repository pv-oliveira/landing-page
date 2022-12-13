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

  width: 1440px;
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

  span {
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
  }
`;
