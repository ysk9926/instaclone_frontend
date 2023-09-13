import { logUserOut } from "../apollo";
import { Props } from "../shared/shared";
import Sidebar from "./Sidebar";

function Layout({ children }: Props) {
  return (
    // wrapper
    <div className=" flex justify-between">
      {/* sidebar */}
      <Sidebar />
      <div className=" min-w-main">{children}</div>
      {/* friends */}
      <div className=" w-80 border-l">
        <button
          className=" p-2 m-10 bg-slate-500 text-white fixed"
          onClick={() => {
            logUserOut();
          }}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}

export default Layout;
