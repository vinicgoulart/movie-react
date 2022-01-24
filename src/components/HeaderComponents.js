import styled from 'styled-components';

export const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;


export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  background-color: white;
  border-radius: 3px;
  margin-left: 20px;
  width: 55%;
  background-color: white;
`;
export const SearchInput = styled.input`
  color: black;
  font-size: 16px; 
  font-weight: bold;
  border: none;
  outline: none;
`;