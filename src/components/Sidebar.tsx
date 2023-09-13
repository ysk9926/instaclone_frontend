import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useUser from "../Hooks/useUser";
import { useEffect, useState } from "react";

function Sidebar() {
  const data = useUser();
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    if (data && data.me) {
      setAvatar(data.me.avatar);
    }
  }, [data]);

  if (!data) {
    console.log("데이터가 없음");
  }
  return (
    // wrapper
    <div className=" flex flex-col pt-6 pl-5 border-r border-boxBorder w-80  min-h-screen h-auto relative">
      <div className=" fixed">
        {/* Logo */}
        <div className=" flex items-center mt-3 ml-3">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <span className=" ml-2 text-xl font-semibold">instagram</span>
        </div>
        {/* menue */}
        <div className="mt-4 ml-3">
          {/* 홈 */}
          <div className=" flex items-center mt-8">
            <FontAwesomeIcon icon={faHome} size="2x" className=" w-7" />
            <span className=" ml-3 text-base font-semibold">홈</span>
          </div>
          {/* 검색 */}
          <div className=" flex items-center mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className=" w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <span className=" ml-3 text-base font-semibold">검색</span>
          </div>
          {/* 메시지 */}
          <div className=" flex items-center mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className=" w-7 -rotate-45"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
            <span className=" ml-3 text-base font-semibold">메시지</span>
          </div>
          {/* 프로필 */}
          <div className=" flex items-center mt-10">
            <img src={avatar} className=" w-7 h-7 rounded-full" />
            <span className=" ml-3 text-base font-semibold">프로필</span>
          </div>
        </div>
      </div>
      {/* 더보기 */}
      <div className="flex items-center fixed bottom-0 left-0 p-4 ml-2">
        <FontAwesomeIcon icon={faBars} size="2x" className="w-5" />
        <div className=" ml-4">더보기</div>
      </div>
    </div>
  );
}

export default Sidebar;
