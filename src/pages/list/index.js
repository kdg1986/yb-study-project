import { useRoutes } from "react-router-dom";
import routes from "@PAGES/list/list.routes";

export default function List() {
  return useRoutes(routes);
}
