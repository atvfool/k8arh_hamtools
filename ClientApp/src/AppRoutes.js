import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Calculators } from "./components/Calculators";

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
        path: '/calculators',
        element: <Calculators />
    },
    {
        path: '/hambandspng',
        file: '/HambandsVertical.png'
    }
];

export default AppRoutes;
