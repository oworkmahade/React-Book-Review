import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      {/* The <Outlet /> will render the child route (Home)  */}
      <Outlet />
    </div>
  );
}

export default Root;
