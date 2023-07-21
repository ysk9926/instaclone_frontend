import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthLayout from "../../components/Auth/AuthLayout";
import FormBox from "../../components/Auth/FormBox";
import {
  faInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Seperate from "../../components/Auth/Seperate";
import BottomBox from "../../components/Auth/BottomBox";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <AuthLayout>
      {/* FormBox */}
      <FormBox>
        {/* icon */}
        <FontAwesomeIcon icon={faInstagram} size="3x" className=" mt-10" />
        {/* subTitle */}
        <div className=" mt-4 max-w-subTitle text-center">
          친구들의 사진과 동영상을 보려면 가입하세요
        </div>
        {/* Fb-Login */}
        <div className=" text-white w-inputSize  bg-fbBlue text-center p-1 rounded-md hover:bg-fbBlueHover">
          <FontAwesomeIcon icon={faSquareFacebook} size="1x" />
          <span className=" ml-2 font-semibold  text-xs">
            Facebook으로 로그인
          </span>
        </div>
        {/* seperate */}
        <Seperate />
        {/* sign-up Form */}
        <form className=" flex justify-center items-center flex-col mb-8">
          <input
            type="text"
            className=" outline-boxBorder px-2 bg-gray-100 border border-boxBorder rounded mt-3 w-inputSize h-8 placeholder:text-gray-400 placeholder:text-xs"
            placeholder="이메일 주소"
          />
          <input
            type="text"
            className=" outline-boxBorder px-2 bg-gray-100 border border-boxBorder rounded mt-2 w-inputSize h-8 placeholder:text-gray-400 placeholder:text-xs"
            placeholder="성"
          />
          <input
            type="text"
            className="  outline-boxBorder px-2 bg-gray-100 border border-boxBorder rounded mt-2 w-inputSize h-8 placeholder:text-gray-400 placeholder:text-xs"
            placeholder="이름"
          />
          <input
            type="text"
            className="  outline-boxBorder px-2 bg-gray-100 border border-boxBorder rounded mt-2 w-inputSize h-8 placeholder:text-gray-400 placeholder:text-xs"
            placeholder="사용자 이름"
          />
          <input
            type="password"
            className=" outline-boxBorder px-2 bg-gray-100 border border-boxBorder rounded mt-2 w-inputSize h-8 placeholder:text-gray-400 placeholder:text-xs"
            placeholder="비밀번호"
          />
          {/* Form Footer */}
          <div className="mt-4 max-w-subTitle text-center">
            <span className=" text-xs text-gray-400">
              저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 instagram에
              업로드했을 수도 있습니다.
            </span>
            <Link
              to={"*"}
              className=" text-xs text-fbBlueHover opacity-70 hover:opacity-100"
            >
              더 알아보기
            </Link>
          </div>

          <button className=" mt-2 w-inputSize h-8 bg-fbBlue text-white rounded-md font-semibold text-sm">
            가입
          </button>
        </form>
      </FormBox>
      {/* BottomBox */}
      <BottomBox text={"계정이 있으신가요?"} BtnText={"로그인"} link={"/"} />
    </AuthLayout>
  );
}

export default SignUp;
