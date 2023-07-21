import { Link } from "react-router-dom";
import { Props } from "../../shared/shared";

interface IBottomBtn {
  text: string;
  BtnText: string;
  link: string;
}

function BottomBox({ text, BtnText, link }: IBottomBtn) {
  return (
    <div className=" border border-boxBorder mt-3 flex justify-center items-center">
      <div className=" my-4">
        <span>{text}</span>
        <Link to={link} className=" ml-2 text-fbBlueHover font-semibold ">
          {BtnText}
        </Link>
      </div>
    </div>
  );
}

export default BottomBox;
