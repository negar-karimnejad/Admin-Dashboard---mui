import Contacts from "./pages/Contacts";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Team from "./pages/Team";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/team", element: <Team /> },
  { path: "/contacts", element: <Contacts /> },
];

export default routes;
