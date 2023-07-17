import { useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { loggedinState } from "../atom";
import { useNavigate } from "react-router-dom";

const Btn = styled.button`
  width: 100px;
  height: 100px;
`;
const TOKEN = "token";

function LogoutBtn() {
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(loggedinState);
  const onClick = () => {
    localStorage.removeItem(TOKEN);
    setIsLoggedIn(false);
    navigate("/", { replace: true });
  };
  return <Btn onClick={onClick}>Logout</Btn>;
}

export default LogoutBtn;
