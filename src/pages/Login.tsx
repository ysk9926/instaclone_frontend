import {
  faInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  return (
    <div className=" flex justify-center items-center w-full h-screen">
      {/* wrapper */}
      <div className=" max-w-baseBox w-full">
        {/* FormBox */}
        <div className=" border border-boxBorder flex flex-col items-center">
          <FontAwesomeIcon icon={faInstagram} size="3x" className=" mt-10" />
          <form className=" flex justify-center items-center flex-col mt-5">
            <input
              type="text"
              className=" px-2 bg-gray-100 border border-boxBorder rounded mt-3 w-inputSize h-8 placeholder:text-gray-300"
              placeholder="사용자 이름"
            />
            <input
              type="text"
              className=" px-2 bg-gray-100 border border-boxBorder rounded mt-2 w-inputSize h-8 placeholder:text-gray-300"
              placeholder="비밀번호"
            />
            <button className=" mt-2 w-inputSize h-8 bg-fbBlue text-white rounded-md font-semibold text-sm">
              로그인
            </button>
          </form>
          {/* seperate */}
          <div className=" flex justify-center items-center mt-4 mb-4">
            <div className=" w-24 h-one bg-boxBorder"></div>
            <span className=" mx-4">또는</span>
            <div className=" w-24 h-one bg-boxBorder"></div>
          </div>
          {/* fb-login */}
          <div className=" text-[#385185] mt-4 mb-10">
            <FontAwesomeIcon icon={faSquareFacebook} size="1x" />
            <span className=" ml-4 font-semibold">Facebook으로 로그인</span>
          </div>
        </div>
        {/* BottomBox */}
        <div className=" border border-boxBorder mt-3 flex justify-center items-center">
          <div className=" my-4">
            <span>계정이 없으신가요?</span>
            <button className=" ml-2 text-fbBlueHover font-semibold ">
              가입하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
