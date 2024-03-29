import { useRoutes } from "react-router-dom";
import Onboarding from "./features/onboarding/pages/Onboarding/Onboarding";

function Routes() {
  const routes = useRoutes([
    {
      index: true,
      element: <Onboarding />,
    },
  ]);
  return routes;
}

export default Routes;
