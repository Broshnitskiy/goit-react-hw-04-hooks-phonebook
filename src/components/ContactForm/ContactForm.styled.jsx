import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  width: 450px;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid green;

  label {
    width: 350px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    font-size: 20px;
    border-left: 2px solid green;
  }

  button {
    cursor: pointer;
    margin: 0 auto;
    :hover {
      background-color: blue;
      color: #fff;
    }
  }
`;
