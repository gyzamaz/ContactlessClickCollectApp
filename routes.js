import Home from "./pages/Home.svelte";
import Error from "./pages/Error.svelte";
import Orders from "./pages/Orders.svelte";
import Order from "./pages/Order.svelte";

const routes = {
  "/": Home,
  "/orders": Orders,
  "orders/:id": Order,
  "*": Error
};

export default routes;
