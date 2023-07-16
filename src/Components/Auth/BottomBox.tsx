import { styled } from "styled-components";
import { BaseBox } from "../shared";
import { Link } from "react-router-dom";

const BottomBox = styled(BaseBox)`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    font-size: 14px;
  }
  a {
    border: none;
    background: none;
    color: ${(props) => props.theme.facebookBlue};
    font-weight: 600;
    font-size: 14px;
  }
`;

interface IBottomBox {
  text: string;
  link: string;
  linkText: string;
}

function SBottomBox({ text, link, linkText }: IBottomBox) {
  return (
    <BottomBox>
      <div>{text}</div>
      <Link to={link}>{linkText}</Link>
    </BottomBox>
  );
}

export default SBottomBox;
