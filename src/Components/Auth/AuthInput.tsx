import { styled } from "styled-components";

export const AuthInput = styled.input<{ hasErrors: boolean }>`
  margin: 5px 0px;
  width: 100%;
  height: 35px;
  border-radius: 3px;
  background-color: #fafafa;
  border: 1px solid ${(props) => (props.hasErrors ? "red" : "#DBDBDB")};
  padding-left: 5px;
  &::placeholder {
    font-size: 12px;
  }
  &:focus {
    outline: none;
  }
`;
