import { styled } from "styled-components";
import { SAuthButton } from "../../Components/Auth/AuthButton";
import { AuthInput } from "../../Components/Auth/AuthInput";
import AuthLayout from "../../Components/Auth/AuthLayout";
import SBottomBox from "../../Components/Auth/BottomBox";
import SFormBox from "../../Components/Auth/FormBox";
import SSeparator from "../../Components/Auth/Separator";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SAuthLogo from "../../Components/Auth/AuthLogo";
import PageTitle from "../../Components/PageTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import FormError from "../../Components/Auth/FormError";

const Subtitle = styled.span`
  margin-top: 20px;
  margin-bottom: 10px;
  width: 250px;
  text-align: center;
  line-height: 18px;
`;

const Span = styled.span`
  margin-left: 10px;
`;

const Text = styled.span`
  margin: 10px 0px;
  font-size: 12px;
  text-align: center;
  line-height: 15px;
  color: rgb(117, 117, 117);
`;

type FormValue = {
  id: string;
  fullname: string;
  username: string;
  password: string;
};

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValue>({ mode: "onBlur" });
  const onSubmitValid: SubmitHandler<FormValue> = (data) => {};
  return (
    <AuthLayout>
      <PageTitle title="Sign-up" />
      <SFormBox>
        <SAuthLogo />
        <Subtitle>친구들의 사진과 동영상을 보려면 가입하세요.</Subtitle>
        <SAuthButton>
          <FontAwesomeIcon icon={faSquareFacebook} size="1x" />
          <Span>Facebook으로 로그인</Span>
        </SAuthButton>
        <SSeparator />
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <AuthInput
            {...register("id", {
              required: "휴대폰 번호나 이메일 형식을 입력해주세요",
            })}
            placeholder="휴대폰 번호 또는 이메일 주소"
            type="text"
            hasErrors={Boolean(errors.id)}
          />
          <FormError message={errors.id?.message} />
          <AuthInput
            {...register("fullname", { required: true })}
            placeholder="성명"
            type="text"
            hasErrors={Boolean(errors.fullname)}
          />
          <AuthInput
            {...register("username", { required: true })}
            placeholder="사용자 이름"
            type="text"
            hasErrors={Boolean(errors.username)}
          />
          <AuthInput
            {...register("password", {
              required: true,
              minLength: { value: 8, message: "8자리이상 입력해주세요" },
            })}
            placeholder="비밀번호"
            type="password"
            hasErrors={Boolean(errors.password)}
          />
          <FormError message={errors.password?.message} />
          <Text>
            저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
            업로드했을 수도 있습니다. 더 알아보기
          </Text>
          <SAuthButton type="submit" disabled={!isValid}>
            가입
          </SAuthButton>
        </form>
      </SFormBox>
      <SBottomBox
        text="계정이 있으신가요?"
        link="/"
        linkText="로그인"
      ></SBottomBox>
    </AuthLayout>
  );
}

export default SignUp;
