import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar() {
  return (
    // wrapper
    <div className=" flex justify-between flex-col pt-6 pl-5">
      {/* Logo */}
      <div className=" flex items-center">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <span className=" ml-3">instagram</span>
      </div>
      <div className=" flex items-center mt-8">
        <FontAwesomeIcon icon={faHome} size="2x" className=" w-8" />
        <span className=" ml-3 text-base font-semibold">홈</span>
      </div>
      <div className=" flex items-center mt-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className=" w-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <span className=" ml-3 text-base font-semibold">검색</span>
      </div>
      <div className=" flex items-center mt-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className=" w-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
        <span className=" ml-3 text-base font-semibold">메시지</span>
      </div>
      <div className=" flex items-center mt-8">
        <FontAwesomeIcon icon={faHome} size="2x" className=" w-8" />
        <span className=" ml-3 text-base font-semibold">프로필</span>
      </div>
    </div>
  );
}

export default Sidebar;
