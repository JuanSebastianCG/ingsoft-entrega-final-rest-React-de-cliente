import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

import AdminHome from "../pages/Admin/Admin";
import AdminSignIn from "../pages/Admin/SignIn/SignIn";
import Home from "../pages/Home";
import notfound from "../pages/NotFound/NotFound"
import Contact from "../pages/Contact";

const AdminRoutes = [
  {
    path: "/admin",
    layout: LayoutAdmin,
    component: AdminHome,
  },
  {
    path: "/admin/login/*",
    layout: LayoutAdmin,
    component: AdminSignIn,
  },
];

const routesClient = [
    {
        path:"/",
        layout:LayoutBasic,
        component:Home
    },
    {
        path:"/contact",
        layout:LayoutBasic,
        component:Contact
    }
]
const NotFoundRoute = [
    {
        path:"*",
        layout: LayoutBasic,
        component: notfound
    }

];

const routes = [...AdminRoutes, ...NotFoundRoute,...routesClient];

export default routes;
