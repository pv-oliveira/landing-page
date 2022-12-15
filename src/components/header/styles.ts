import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 120px;

  height: 80px;

  flex: none;
  order: 0;
  flex-grow: 0;

  img {
    /* </Ontalex> */

    width: 146px;
    height: 39px;

    font-family: "Impact";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */

    color: #ff8303;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  @media only screen and (max-width: 940px) {
    /* header */

    /* Auto layout */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px 120px;
    gap: 16px;

    width: 704px;
    height: 112px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
`;

export const MenuList = styled.ul`
  /* menu */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 64px;

  width: 532px;
  height: 80px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  @media only screen and (max-width: 940px) {
    /* menu */

    /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 64px;

    width: 532px;
    height: 25px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const ItemList = styled.li`
  font-family: "Inconsolata";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 21px;
  display: inline-block;
  /* identical to box height */

  text-transform: capitalize;

  a {
    color: #f0e3ca;

    &.item1 {
      width: 80px;
      height: 21px;
      flex: none;
      order: 0;
      flex-grow: 0;

      color: #ff8303;
    }
  }
`;
