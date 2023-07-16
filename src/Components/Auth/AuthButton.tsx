import { faBlackTie } from "@fortawesome/free-brands-svg-icons";
import { styled } from "styled-components";

export const SAuthButton = styled.button`
  margin-top: 8px;
  margin-bottom: 25px;
  border: none;
  width: 250px;
  height: 33px;
  border-radius: 8px;
  background-color: #0095f6;
  color: white;
  font-weight: 600;
  &:hover {
    background-color: ${(props) =>
      props.disabled ? "#0095f6" : props.theme.facebookBlue};
  }
`;

//#0095f6
