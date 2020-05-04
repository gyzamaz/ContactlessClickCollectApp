<script>
 import { Router, Link, Route } from "svelte-routing";
 import Home from "./pages/Home.svelte";
 import Order from "./pages/Order.svelte";
 import Orders from "./pages/Orders.svelte";

 export let url = "";

 export let siteName;
 console.log(siteName);

 import getData from "./assets/getData";

 localStorage.setItem("collect", JSON.stringify(getData));

 //  if ("serviceWorker" in navigator) {
 //    try {
 //      navigator.serviceWorker.register("serviceWorker.js");
 //      console.log("Service Worker Registered");
 //    } catch (error) {
 //      console.log("Service Worker Registration Failed");
 //    }
 //  }
</script>

<div class="container">
  <header>
    <Router url="{url}">
      <div class="row">
          <div class="col-xs-6 col-md-4"><Link to="/">Home</Link></div>
          <div class="col-xs-6 col-md-4"><Link to="/orders">Orders</Link></div>
      </div>

      <hr />
          
          <Route path="/orders" component="{Orders}" />
    
          <Route path="/orders/:id" let:params>
            <Order params="{params}" />
          </Route>

          <Route path="/"><Home /></Route>
     
     </Router>
  </header>
</div>

  <style lang="scss">
  header {
    padding: 20px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  :global(body) {
    padding: 0;
    margin: 0;
  }
</style>

