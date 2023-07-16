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

const FacebookLogin = styled.div`
  margin-top: 40px;
  font-weight: 600;
  color: #385185;
  span {
    margin-left: 10px;
  }
  margin-bottom: 40px;
`;

type FormValue = {
  username: string;
  password: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValue>({ mode: "onBlur" });
  const onsubmitValid: SubmitHandler<FormValue> = (data) => {
    //console.log(data);
  };
  return (
    <AuthLayout>
      <PageTitle title="Login" />
      <SFormBox>
        <SAuthLogo />
        <form onSubmit={handleSubmit(onsubmitValid)}>
          <AuthInput
            {...register("username", {
              required: "아이디를 입력하세요",
              minLength: { value: 5, message: "5글자 이상 입력해주세요" },
            })}
            placeholder="전화번소, 사용자 이름 또는 이메일"
            type="text"
            hasErrors={Boolean(errors.username)}
          />
          <FormError message={errors.username?.message} />
          <AuthInput
            {...register("password", { required: "비밀번호를 입력하세요" })}
            placeholder="비밀번호"
            type="password"
            hasErrors={Boolean(errors.password)}
          />
          <FormError message={errors.password?.message} />
          <SAuthButton type="submit" disabled={!isValid}>
            로그인
          </SAuthButton>
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
