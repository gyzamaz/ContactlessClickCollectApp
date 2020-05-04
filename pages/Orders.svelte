<script>
  import { link } from "svelte-routing";
  import { orders } from "../stores/orders.js";

  export let location;
  console.log(location);
</script>


<h1>Orders</h1>

{#each $orders as {id, order, contractor, pickup, status}}

<div class="card">
  <div class="card-body">
<div class="">
Numer przesyłki: {order.number}<br>
</div>

<div class="text-right">
Status przesyłki: {status} <br>
</div>

<div class="">
Nadawca: {contractor.name}<br>
</div>


<br>
<div class="">
<a class="btn btn-primary" use:link href="/orders/{id}">szczegóły</a>    
</div>
</div>
</div>
<br>
<br>
{/each}
