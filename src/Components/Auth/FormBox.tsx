import { styled } from "styled-components";
import { BaseBox, Props } from "../shared";

const FormBox = styled(BaseBox)`
  display: flex;
  align-items: center;
  flex-direction: column;
  form {
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 35px;
  }
`;

function SFormBox({ children }: Props) {
  return <FormBox>{children}</FormBox>;
}

export default SFormBox;
