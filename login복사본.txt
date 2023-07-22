import {
  faInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Seperate from "../../components/Auth/Seperate";
import FormBox from "../../components/Auth/FormBox";
import BottomBox from "../../components/Auth/BottomBox";
import AuthLayout from "../../components/Auth/AuthLayout";

function Login() {
  return (
    <AuthLayout>
      {/* FormBox */}
      <FormBox>
        {/* icon */}
        <FontAwesomeIcon icon={faInstagram} size="3x" className=" mt-10" />
        {/* Login Form */}
        <form className=" flex justify-center items-center flex-col mt-5">
          <input
            type="text"
            className=" focus:outline outline-boxBorder px-2 bg-gray-100 border border-boxBorder rounded mt-3 w-inputSize h-8 placeholder:text-gray-400 placeholder:text-xs"
            placeholder="사용자 이름"
          />
          <input
            type="text"
            className=" focus:outline outline-boxBorder px-2 bg-gray-100 border border-boxBorder rounded mt-2 w-inputSize h-8 placeholder:text-gray-400 placeholder:text-xs"
            placeholder="비밀번호"
          />
          <button className=" mt-2 w-inputSize h-8 bg-fbBlue text-white rounded-md font-semibold text-sm">
            로그인
          </button>
        </form>
        {/* seperate */}
        <Seperate />
        {/* fb-login */}
        <div className=" text-[#385185] mt-4 mb-10">
          <FontAwesomeIcon icon={faSquareFacebook} size="1x" />
          <span className=" ml-4 font-semibold">Facebook으로 로그인</span>
        </div>
      </FormBox>
      {/* BottomBox */}
      <BottomBox
        text={"계정이 없으신가요?"}
        BtnText={"가입하기"}
        link={"/sign-up"}
      />
    </AuthLayout>
  );
}

export default Login;
