import { styled } from "styled-components";

const SError = styled.span`
  color: red;
  font-size: 14px;
`;

type FormErr = {
  message: string | undefined;
};

function FormError({ message }: FormErr) {
  return message === "" || !message ? null : <SError>{message}</SError>;
}

export default FormError;
