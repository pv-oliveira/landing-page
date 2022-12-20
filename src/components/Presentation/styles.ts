import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 575px;

  span {
    position: relative;
    z-index: 999;
    align-items: center;
    width: 373.71px;
    height: 371.19px;
    left: 130px;
    top: 50px;

    img {
      width: 375.36px;
      height: 364.5px;
    }
  }

  h6 {
    position: absolute;
    width: 629px;
    top: 11.6%;

    font-family: "Inconsolata";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 19px;

    color: rgba(163, 87, 9, 0.5);

    white-space: pre-wrap;
    text-align: left;
  }

  @media only screen and (max-width: 850px) {
    width: 629px;
    height: 575px;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 510.57px;
      height: 509.68px;
      left: 96.5px;
      top: 406px;

      img {
        width: 373.71px;
        height: 371.19px;
        left: 164.93px;
        top: 475.24px;
      }
    }

    h6 {
      width: 629px;
      height: 575px;
      left: 37.5px;
      top: 369px;
    }
  }
`;
