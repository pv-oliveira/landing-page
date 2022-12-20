import Header from "../../components/Header";
import * as S from "./styles";

type FrontProps = {
  children: React.ReactNode;
};

const FrontEnd = ({ children }: FrontProps) => {
  return <S.Container>
      <Header />
      {/* <main>{children}</main> */}
    </S.Container>
  
};

export default FrontEnd;
