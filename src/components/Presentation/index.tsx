import * as S from "./styles";

import picture from "../../assets/Logo.svg";
import Code from "../Code";

const Presentation = () => {
  return (
    <S.Container>
      <img src={picture} alt="picture of the profile" />

      <h6>
        {`let button_menu = document.querySelector(".header_button"); 
let float_menu  = document.querySelector(".header_menu--float");

let line_top   = document.querySelector(".header_button_line--top");
let line_under = document.querySelector(".header_button_line--bottom");

button_menu.isSelected = false;

function addEffectWriting(element, time) {
let element_array = element.innerText.split("");

element.count     = 0;
element.innerText = "";

function writeSymbols() {
    element.innerText += element_array[element.count];
    element.count++;

    if (element.count <= element_array.length) {
    setTimeout(() => {
        writeSymbols();
      }, time);
    } else if (element.count >= element_array.length) {
    element.count     = 0;
    element.innerText = "";

    writeSymbols();
    }
}`}
      </h6>
    </S.Container>
  );
};

export default Presentation;
