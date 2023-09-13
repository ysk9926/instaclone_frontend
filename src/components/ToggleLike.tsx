import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IHeart from "../Icons/IHeart";

export default function ToggleLike({ isLiked }: any) {
  return (
    <div>
      {isLiked ? (
        <IHeart />
      ) : (
        <FontAwesomeIcon icon={faHeart} size="2x" className=" w-6" />
      )}
    </div>
  );
}
