import styled from 'styled-components';

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