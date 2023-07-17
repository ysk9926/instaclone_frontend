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
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { getValue } from "@testing-library/user-event/dist/utils";

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
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
};

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String!
    $userName: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      userName: $userName
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

interface IResult {
  createAccount: {
    ok: boolean;
    error: string;
  };
}

function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm<FormValue>({ mode: "onChange" });
  const onCompleted = (data: IResult) => {
    const { userName, password } = getValues();
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      return;
    }
    navigate("/", {
      state: {
        message: "가입이 완료됐습니다. 로그인을 해주세요",
        userName,
        password,
      },
    });
  };
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
  const onSubmitValid: SubmitHandler<FormValue> = (data) => {
    if (loading) {
      return;
    }
    const { firstName, lastName, userName, email, password } = getValues();
    createAccount({
      variables: {
        email,
        firstName,
        lastName,
        userName,
        password,
      },
    });
  };
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
            {...register("email", {
              required: "휴대폰 번호나 이메일 형식을 입력해주세요",
              pattern: /[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/,
            })}
            placeholder="이메일 주소"
            type="text"
            hasError={Boolean(errors.email?.message)}
          />
          <FormError message={errors.email?.message} />
          <AuthInput
            {...register("firstName", { required: "성을 입력해주세요" })}
            placeholder="성"
            type="text"
            hasError={Boolean(errors.firstName?.message)}
          />
          <FormError message={errors.firstName?.message} />
          <AuthInput
            {...register("lastName", { required: "이름을 입력해주세요" })}
            placeholder="이름"
            type="text"
            hasError={Boolean(errors.lastName?.message)}
          />
          <FormError message={errors.lastName?.message} />
          <AuthInput
            {...register("userName", {
              required: "사용자 이름을 입력해주세요",
              minLength: {
                value: 5,
                message: "5글자 이상 작성해주세요",
              },
            })}
            placeholder="사용자 이름"
            type="text"
            hasError={Boolean(errors.userName?.message)}
          />
          <FormError message={errors.userName?.message} />
          <AuthInput
            {...register("password", {
              required: true,
              minLength: { value: 6, message: "6자리이상 입력해주세요" },
            })}
            placeholder="비밀번호"
            type="password"
            hasError={Boolean(errors.password?.message)}
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
