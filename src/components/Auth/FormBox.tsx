import { Props } from "../../shared/shared";

function FormBox({ children }: Props) {
  return (
    <div className=" border border-boxBorder flex flex-col items-center">
      {children}
    </div>
  );
}

export default FormBox;
