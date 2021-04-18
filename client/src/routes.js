import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
export const publicRoutes = [
  {
    path: "/",
    Component: Shop,
  },
  {
    path: "/login",
    Component: Auth,
  },
  {
    path: "/registration",
    Component: Auth,
  },
  {
    path: "/device" + "/:id",
    Component: DevicePage,
  },
];
