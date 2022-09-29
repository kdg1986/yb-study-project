import Login from "./pages/login";
import List from "./pages/list";
import Reply from "./pages/reply";

const routes = [
  { path: "", element: <>empty</> },
  { path: "login/*", element: <Login /> },
  { path: "list/*", element: <List /> },
  { path: "reply/*", element: <Reply /> }
];

export default routes;
