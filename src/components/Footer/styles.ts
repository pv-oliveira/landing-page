import styled from "styled-components";

export const Container = styled.footer`
  /* footer */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 64px 120px;
  gap: 64px;

  /* width: 1440px; */
  height: 274px;

  background: #1f1e1b;

  /* Inside auto layout */

  flex: none;
  order: 5;
  align-self: stretch;
  flex-grow: 0;

  @media only screen and (max-width: 850px) {
    flex-direction: column;
    padding: 64px 0px;

    width: 704px;
    height: 449px;
  }
`;

export const FrameContainer = styled.span`
  /* Frame 18 */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 213px;
  height: 146px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  h6 {
    /* If you liked my work and you need me, I'm ready to talk to you. */

    width: 213px;
    height: 46px;

    font-family: "Inconsolata";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 21px;

    color: #f0e3ca;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }

  @media only screen and (max-width: 850px) {
    /* Auto layout */

    justify-content: center;
    align-items: center;

    width: 339px;
    height: 106px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;

    img {
      width: 339px;
      height: 44px;
    }

    h6 {
      width: 339px;
      height: 46px;
    }
  }
`;

export const ContactContainer = styled.section`
  /* Frame 19 */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: auto;
  height: 146px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;

  h6 {
    /* Сontacts */

    width: 133px;
    height: 34px;

    font-family: "Inconsolata";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 34px;
    /* identical to box height */

    color: #ff8303;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  @media only screen and (max-width: 850px) {
    justify-content: center;
    width: 584px;
    height: 151px;

    h6 {
      text-align: center;
      width: 100%;
      height: 39px;

      font-family: "Impact";
      font-style: normal;
      font-weight: 500;
      font-size: 40px;
      line-height: 39px;
    }
  }
`;

export const ItensContactContainer = styled.span`
  /* Frame 20 */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 48px;

  width: 384px;
  height: 96px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;

  @media only screen and (max-width: 850px) {
    width: auto;
  }
`;

export const MenuList = styled.ul`
  /* Group 19 */

  width: 330px;
  height: 96px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  &.menu2 {
    /* Group 18 */

    width: 132px;
    height: 96px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }

  @media only screen and (max-width: 850px) {
  }
`;

export const ItemList = styled.li`
  /* insta */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  padding: 0px;
  gap: 8px;
  align-items: center;

  svg {
    width: 25px;
    height: 25px;
  }

  a {
    &.item1 {
      width: 204px;
      height: 32px;
      font-family: "Inconsolata";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 25px;

      color: #ff8303;
    }

    &.item2 {
      /* @ontalex */

      width: 204px;
      height: 32px;

      font-family: "Inconsolata";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 25px;

      color: #ff8303;

      /* Inside auto layout */

      flex: none;
      order: 1;
      flex-grow: 0;
    }

    &.item3 {
      width: 132px;
      height: 32px;
      left: 252px;
      top: 0px;

      font-family: "Inconsolata";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 25px;

      color: #ff8303;
    }

    &.item4 {
      width: 132px;
      height: 32px;
      left: 252px;
      top: 64px;

      font-family: "Inconsolata";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 25px;

      color: #ff8303;
    }
  }
`;
