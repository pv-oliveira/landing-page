import * as S from './styles'

import { AiOutlineMail, AiOutlineInstagram, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'

import logo from '../../assets/Ontalex.svg';

const Footer = () => {
  return (
    <S.Container>
        <S.FrameContainer>
            <img src={logo} alt='Ontalex' />

            <h6>If you liked my work and you need me, I'm ready to talk to you.</h6>
        </S.FrameContainer>
        <S.ContactContainer> 
            <h6>Contacts</h6>
            <S.ItensContactContainer>  
                <S.MenuList className='menu1'>
                    <S.ItemList>
                        <AiOutlineMail />
                        <a className='item1'>paulo.victor.ig@hotmail.com</a>
                    </S.ItemList>
                    <S.ItemList>
                        <AiOutlineInstagram />
                        <a className='item2'>@paulom_oliveira</a>
                    </S.ItemList>
                </S.MenuList>
                <S.MenuList className='menu2'>
                    <S.ItemList>
                        <AiOutlineGithub />
                        <a className='item3'>Github</a>
                    </S.ItemList>
                    <S.ItemList>
                        <AiFillLinkedin />
                        <a className='item4'>Linkedin</a>
                    </S.ItemList>
                </S.MenuList>
            </S.ItensContactContainer>
        </S.ContactContainer>
    </S.Container>
  )
}

export default Footer