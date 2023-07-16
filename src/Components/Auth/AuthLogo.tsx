import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const AuthLogo = styled.div`
  margin-top: 40px;
`;

function SAuthLogo() {
  return (
    <AuthLogo>
      <FontAwesomeIcon icon={faInstagram} size="3x" />
    </AuthLogo>
  );
}

export default SAuthLogo;
