import Login from "./pages/login";
import List from "./pages/list";

const routes = [
  { path: "", element: <>empty</> },
  { path: "login/*", element: <Login /> },
  { path: "list/*", element: <List /> }
];

export default routes;
