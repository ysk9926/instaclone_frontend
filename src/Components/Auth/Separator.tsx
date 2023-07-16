import { styled } from "styled-components";

const Separator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  div {
    width: 100px;
    height: 1px;
    background-color: #dbdbdb;
  }
  span {
    margin-inline: 17px;
  }
`;

function SSeparator() {
  return (
    <Separator>
      <div></div>
      <span>또는</span>
      <div></div>
    </Separator>
  );
}

export default SSeparator;
