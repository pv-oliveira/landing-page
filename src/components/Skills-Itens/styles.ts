import styled from "styled-components";

export const Container = styled.div`
  /* card_skill_html */

  width: 200px;
  height: 300px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */

  span {
    /* Frame 18 */

    /* Auto layout */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 16px;

    position: absolute;
    width: 113.46px;
    height: 181.27px;

    border-radius: 10px;

    img {
      /* icon html */

      width: 113.46px;
      height: 128.27px;

      /* Inside auto layout */

      flex: none;
      order: 0;
      flex-grow: 0;
    }

    h5 {
      /* HTML5 */

      height: 37px;

      font-family: "Arial";
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 37px;
      /* identical to box height */

      color: #ffffff;

      /* Inside auto layout */

      flex: none;
      order: 1;
      flex-grow: 0;
    }
  }
`;
