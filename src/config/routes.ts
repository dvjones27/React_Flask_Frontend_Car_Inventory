import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";


interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean,
}


const routes: RouteType[] =[
    {
      path: "",
      component: Home,
      name: "Home Screen",
      protected: false,
    },
    {
      path: "/about",
      component: About,
      name: "About Screen",
      protected: false,
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard Screen",
      protected: true,
    },
  ];
  
  export default routes
    