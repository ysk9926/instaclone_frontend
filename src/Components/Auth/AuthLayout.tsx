import { styled } from "styled-components";
import { Props } from "../shared";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 350px;
`;

function AuthLayout({ children }: Props) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

export default AuthLayout;
