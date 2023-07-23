import { Props } from "../shared/shared";
import Sidebar from "./Sidebar";

function Layout({ children }: Props) {
  return (
    // wrapper
    <div className=" flex justify-between">
      {/* sidebar */}
      <Sidebar />
      <div className=" min-w-main bg-slate-500">{children}</div>
      {/* friends */}
      <div></div>
    </div>
  );
}

export default Layout;
