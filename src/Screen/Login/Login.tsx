import AuthLayout from "../../Components/Auth/AuthLayout";
import SSeparator from "../../Components/Auth/Separator";
import SBottomBox from "../../Components/Auth/BottomBox";
import { AuthInput } from "../../Components/Auth/AuthInput";
import { SAuthButton } from "../../Components/Auth/AuthButton";
import SFormBox from "../../Components/Auth/FormBox";
import SAuthLogo from "../../Components/Auth/AuthLogo";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import PageTitle from "../../Components/PageTitle";
import { useForm, SubmitHandler } from "react-hook-form";
import FormError from "../../Components/Auth/FormError";
import { gql, useMutation } from "@apollo/client";
import { useSetRecoilState } from "recoil";
import { loggedinState } from "../../atom";
import { useLocation } from "react-router-dom";

const FacebookLogin = styled.div`
  margin-top: 40px;
  font-weight: 600;
  color: #385185;
  span {
    margin-left: 10px;
  }
  margin-bottom: 40px;
`;

const LOGIN_MUTATION = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      ok
      token
      error
    }
  }
`;

interface FormValue {
  userName: string;
  password: string;
  result: string;
}

interface IResult {
  login: {
    ok: boolean;
    error: string;
    token: string;
  };
}
const TOKEN = "token";

function Login() {
  const location = useLocation();
  console.log(location);
  //변수 선언
  const setIsLoggedIn = useSetRecoilState(loggedinState);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
    clearErrors,
  } = useForm<FormValue>({
    mode: "onChange",
    defaultValues: {
      userName: location?.state?.userName || "",
      password: location?.state?.password || "",
    },
  });
  //LOGIN_MUTATION에서 받아온 data 처리
  const onCompleted = (data: IResult) => {
    const {
      login: { ok, error, token },
    } = data;
    //ok:false가 나온경우 error메세지를 리턴
    if (!ok) {
      return setError("result", {
        message: error,
      });
    }
    //token이 존재하는 경우 localstorage에 토큰을 저장해 로그인상태 확인
    if (token) {
      localStorage.setItem(TOKEN, token);
      setIsLoggedIn(true);
    }
  };
  //LOTIN_MUTATION 변수 선언 및 mutation가져오기
  const [login, { loading }] = useMutation(LOGIN_MUTATION, { onCompleted });
  const onsubmitValid: SubmitHandler<FormValue> = (data) => {
    if (loading) {
      return;
    }
    const { userName, password } = getValues();
    login({
      variables: { userName, password },
    });
  };
  const clearLoginErr = () => {
    clearErrors("result");
  };

  return (
    <AuthLayout>
      <PageTitle title="Login" />
      <SFormBox>
        <SAuthLogo />
        <form onSubmit={handleSubmit(onsubmitValid)}>
          <AuthInput
            {...register("userName", {
              required: "아이디를 입력하세요",
              minLength: { value: 5, message: "5글자 이상 입력해주세요" },
              onChange() {
                clearLoginErr();
              },
            })}
            placeholder="사용자 이름"
            type="text"
            hasError={Boolean(errors.userName?.message)}
          />
          <FormError message={errors.userName?.message} />
          <AuthInput
            {...register("password", { required: "비밀번호를 입력하세요" })}
            placeholder="비밀번호"
            type="password"
            hasError={Boolean(errors.password?.message)}
          />
          <FormError message={errors.password?.message} />
          <SAuthButton type="submit" disabled={!isValid}>
            로그인
          </SAuthButton>
          <FormError message={errors.result?.message} />
        </form>
        <SSeparator />
        <FacebookLogin>
          <FontAwesomeIcon icon={faSquareFacebook} size="1x" />
          <span>Facebook으로 로그인</span>
        </FacebookLogin>
      </SFormBox>
      <SBottomBox
        text="계정이 없으신가요?"
        link="/sign-up"
        linkText="가입하기"
      ></SBottomBox>
    </AuthLayout>
  );
}

export default Login;
