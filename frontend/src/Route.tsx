import { useRoutes } from "react-router-dom";
import Onboarding from "./features/onboarding/pages/Onboarding/Onboarding";

function Routes() {
  const routes = useRoutes([
    {
      index: true,
      element: <Onboarding />,
    },
  ]);
  return <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>;
}

export default Routes;
