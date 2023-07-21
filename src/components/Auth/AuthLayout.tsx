import { Props } from "../../shared/shared";

function AuthLayout({ children }: Props) {
  return (
    <div className=" flex justify-center items-center w-full h-screen">
      <div className=" max-w-baseBox w-full">{children}</div>
    </div>
  );
}

export default AuthLayout;
