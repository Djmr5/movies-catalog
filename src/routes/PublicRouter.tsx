import { Outlet } from "react-router-dom";

const PublicRouter: React.FC = () => {

  return (
    <>
      <div>Public Router</div>
      <Outlet />
    </>
  );
};

export default PublicRouter;
