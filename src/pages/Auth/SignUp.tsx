import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthLayout from "../../components/Auth/AuthLayout";
import FormBox from "../../components/Auth/FormBox";
import {
  faInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Seperate from "../../components/Auth/Seperate";
import BottomBox from "../../components/Auth/BottomBox";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrorForm from "../../components/Auth/ErrorForm";
import { gql, useMutation } from "@apollo/client";

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $email: String!
    $firstName: String!
    $lastName: String!
    $userName: String!
    $password: String!
  ) {
    createAccount(
      email: $email
      firstName: $firstName
      lastName: $lastName
      userName: $userName
      password: $password
    ) {
      ok
      error
    }
  }
`;
interface ICreateAccountData {
  createAccount: {
    ok: boolean;
    error: string;
  };
}

interface ISignupForm {
  email: string;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  passwordConfirmation: string;
  result: string;
}

function SignUp() {
  const navigate = useNavigate();
  const onCompleted = (data: ICreateAccountData) => {
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      return setError("result", {
        message: error,
      });
    }
    const { username, password } = getValues();
    navigate("/", {
      state: {
        message: "가입이 완료됐습니다. 로그인을 해주세요",
        username,
        password,
      },
    });
  };
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
  const onSubmitValid: SubmitHandler<ISignupForm> = (data) => {
    if (loading) {
      return;
    }
    const { email, firstname, lastname, username, password } = getValues();
    createAccount({
      variables: {
        email,
        firstName: firstname,
        lastName: lastname,
        userName: username,
        password,
      },
    });
  };
  const clearLoginError = () => {
    clearErrors("result");
  };
  const {
    register,
    formState: { errors, isValid },
    watch,
    setError,
    handleSubmit,
    getValues,
    clearErrors,
  } = useForm<ISignupForm>({
    mode: "onChange",
  });
  const watchPassword = watch("password", "");
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
        <form
          onSubmit={handleSubmit(onSubmitValid)}
          className=" flex justify-center items-center flex-col mb-8"
        >
          <input
            {...register("email", {
              required: "이메일 주소를 입력해주세요",
              pattern: {
                value: /[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/,
                message: "이메일 형식을 지켜서 입력해주세요",
              },
              onChange() {
                clearLoginError();
              },
            })}
            type="text"
            className=" outline-boxBorder px-2 bg-gray-100 border border-boxBorder rounded mt-3 w-inputSize h-8 placeholder:text-gray-400 placeholder:text-xs"
            placeholder="이메일 주소"
          />
          <ErrorForm message={errors.email?.message} />
          <input
            {...register("firstname", {
              required: "이름의 성을 작성해주세요",
            })}
            type="text"
            className=" outline-boxBorder px-2 bg-gray-100 border border-boxBorder rounded mt-2 w-inputSize h-8 placeholder:text-gray-400 placeholder:text-xs"
            placeholder="성"
          />
          <ErrorForm message={errors.firstname?.message} />
          <input
            {...register("lastname", {
              required: "이름을 입력해주세요",
            })}
            type="text"
            className="  outline-boxBorder px-2 bg-gray-100 border border-boxBorder rounded mt-2 w-inputSize h-8 placeholder:text-gray-400 placeholder:text-xs"
            placeholder="이름"
          />
          <ErrorForm message={errors.lastname?.message} />
          <input
            {...register("username", {
              required: "사용자 이름을 입력해주세요",
              onChange() {
                clearLoginError();
              },
            })}
            type="text"
            className="  outline-boxBorder px-2 bg-gray-100 border border-boxBorder rounded mt-2 w-inputSize h-8 placeholder:text-gray-400 placeholder:text-xs"
            placeholder="사용자 이름"
          />
          <ErrorForm message={errors.username?.message} />
          <input
            {...register("password", {
              required: "비밀번호를 입력해주세요",
            })}
            type="password"
            className=" outline-boxBorder px-2 bg-gray-100 border border-boxBorder rounded mt-2 w-inputSize h-8 placeholder:text-gray-400 placeholder:text-xs"
            placeholder="비밀번호"
          />
          <input
            {...register("passwordConfirmation", {
              required: "비밀번호를 입력해주세요",
              validate: (value) =>
                value === watchPassword || "Passwords do not match",
            })}
            type="password"
            className=" outline-boxBorder px-2 bg-gray-100 border border-boxBorder rounded mt-2 w-inputSize h-8 placeholder:text-gray-400 placeholder:text-xs"
            placeholder="비밀번호"
          />
          <ErrorForm message={errors.passwordConfirmation?.message} />
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

          <button
            disabled={!isValid}
            type="submit"
            className={`mt-2 w-inputSize h-8 bg-fbBlue text-white rounded-md font-semibold text-sm ${
              isValid ? "" : " pointer-events-none opacity-50"
            }`}
          >
            가입
          </button>
          <ErrorForm message={errors.result?.message} />
        </form>
      </FormBox>
      {/* BottomBox */}
      <BottomBox text={"계정이 있으신가요?"} BtnText={"로그인"} link={"/"} />
    </AuthLayout>
  );
}

export default SignUp;
