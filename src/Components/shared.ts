import { styled } from "styled-components";

export const BaseBox = styled.div`
  width: 100%;
  margin: 10px 0px;
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.baseBox_border};
`;

export type Props = {
  children: React.ReactNode;
};
