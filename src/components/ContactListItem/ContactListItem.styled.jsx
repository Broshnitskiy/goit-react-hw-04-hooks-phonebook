import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  button {
    cursor: pointer;
    :hover {
      color: white;
      background-color: orangered;
    }
  }
`;
