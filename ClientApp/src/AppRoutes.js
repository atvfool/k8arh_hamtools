import { Counter } from "./components/Counter";
import { DipoleCalculator } from "./components/DipoleCalculator";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { MeterCalculator } from "./components/MeterCalculator";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
    },
    {
        path: '/dipole',
        element: <DipoleCalculator />
    },
    {
        path: '/meter',
        element: <MeterCalculator />
    }
];

export default AppRoutes;
