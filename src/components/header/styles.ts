import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 120px;
gap: 127px;

width: 100%;
height: 80px;
`

export const MenuList = styled.ul`
  margin-left: auto;
`;

export const ItemList = styled.li`
    display: inline-block;
    margin-right: 25px;
    font-weight: 600;

    a {
       color: #F0E3CA;

       &.item1 {
        color: #FF8303;
       }
    }
`