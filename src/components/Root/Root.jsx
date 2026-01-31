import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Root() {
  return (
    <div className="w-5/6 p-4 mx-auto my-4">
      <Header />
      {/* The <Outlet /> will render the child route (Home)  */}
      <Outlet />
    </div>
  );
}

export default Root;
