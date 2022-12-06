import * as S from "./styles";

const Code = () => {
  return (
    <S.TextContainer>
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
    </S.TextContainer>
  );
};

export default Code;
