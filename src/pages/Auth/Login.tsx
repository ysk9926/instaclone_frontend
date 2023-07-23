import {
  faInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Seperate from "../../components/Auth/Seperate";
import FormBox from "../../components/Auth/FormBox";
import BottomBox from "../../components/Auth/BottomBox";
import AuthLayout from "../../components/Auth/AuthLayout";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrorForm from "../../components/Auth/ErrorForm";
import { gql, useMutation } from "@apollo/client";
import { TOKEN, logUserIn } from "../../apollo";
import { useLocation } from "react-router-dom";

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(userName: $username, password: $password) {
      ok
      error
      token
    }
  }
`;

interface ILoginForm {
  username: string;
  password: string;
  result: string;
}

interface ILoginData {
  login: {
    ok: boolean;
    error: string;
    token: string;
  };
}

function Login() {
  const location = useLocation();
  // login mutation
  const onCompleted = (data: ILoginData) => {
    const {
      login: { ok, error, token },
    } = data;
    if (!ok) {
      return setError("result", {
        message: error,
      });
    }
    if (token) {
      logUserIn(token);
    }
  };
  const [login, { loading }] = useMutation(LOGIN_MUTATION, { onCompleted });
  const onSubmitValid: SubmitHandler<ILoginForm> = (data) => {
    if (loading) {
      return;
    }
    const { username, password } = getValues();
    login({
      variables: { username, password },
    });
  };
  const clearLoginError = () => {
    clearErrors("result");
  };
  const {
    register,
    formState: { errors, isValid },
    setError,
    handleSubmit,
    getValues,
    clearErrors,
  } = useForm<ILoginForm>({
    mode: "onChange",
    defaultValues: {
      username: location?.state?.username || "",
      password: location?.state?.password || "",
    },
  });
  return (
    <AuthLayout>
      {/* FormBox */}
      <FormBox>
        {/* icon */}
        <FontAwesomeIcon icon={faInstagram} size="3x" className=" mt-10" />
        {/* Login Form */}
        <form
          onSubmit={handleSubmit(onSubmitValid)}
          className=" flex justify-center items-center flex-col mt-5"
        >
          <input
            {...register("username", {
              required: "아이디를 입력해주세요",
              minLength: {
                value: 3,
                message: "3글자 이상 작성해주세요",
              },
              onChange() {
                clearLoginError();
              },
            })}
            type="text"
            className=" focus:outline outline-boxBorder px-2 bg-gray-100 border border-boxBorder rounded mt-3 w-inputSize h-8 placeholder:text-gray-400 placeholder:text-xs"
            placeholder="사용자 이름"
          />
          <ErrorForm message={errors.username?.message} />
          <input
            {...register("password", {
              required: "비밀번호를 입력해주세요",
            })}
            type="password"
            className=" focus:outline outline-boxBorder px-2 bg-gray-100 border border-boxBorder rounded mt-2 w-inputSize h-8 placeholder:text-gray-400 placeholder:text-xs"
            placeholder="비밀번호"
          />
          <ErrorForm message={errors.password?.message} />
          <button
            type="submit"
            className={` mt-2 w-inputSize h-8 bg-fbBlue text-white rounded-md font-semibold text-sm
            ${isValid ? "" : "pointer-events-none opacity-50"}`}
          >
            로그인
          </button>
          <ErrorForm message={errors.result?.message} />
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
