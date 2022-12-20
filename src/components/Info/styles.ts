import styled from "styled-components";

export const Info = styled.div`
  width: 50%;
  height: 178.5px;
  /* margin-left: 30px; */
  /* padding: 50px; */

  h1 {
    font-family: "Inconsolata";
    font-style: normal;
    font-weight: 900;
    font-size: 64px;
    line-height: 67px;

    color: #ff8303;
  }

  h2 {
    font-family: "Inconsolata";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 42px;
    /* identical to box height */

    color: #f0e3ca;
  }

  h3 {
    font-family: "Inconsolata";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 21px;

    color: #f0e3ca;
  }

  @media only screen and (max-width: 850px) {
    width: 448.5px;
    height: 177px;
    display: flex;
    justify-content: flex-start;
    h1 {
      position: absolute;
      top: 128px;
    }

    h2 {
      position: absolute;
      top: 204px;
    }

    h3 {
      position: absolute;
      width: 448px;
      top: 263px;
    }
  }
`;
