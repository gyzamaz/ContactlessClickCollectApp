<script>
	import { orders } from "../stores/orders.js";

	export let params;
	let store_orders;

	const unsubscribe = orders.subscribe(orders => {
	  store_orders = orders;
	});

	// console.log(store_orders);

	const element = store_orders.find(o => o.id === params.id);

	// console.log("element");
	// console.log(element);

	const order = element.order;
	const contractor = element.contractor;
	const pickup = element.pickup;
</script>

<div>
  

<div class="card">
  <h5 class="card-header"> <h1>Number: #{order.number} </h1></h5>
  <div class="card-body">
    <h5 class="card-title">status: { element.status} </h5>
	
	  <p class="card-text">
		
		{#if order.items}
			{#each order.items as { name, quantity, price, tax} , i}
				Order name: { name } <br>
				Qty: { quantity }<br>
				Price: { price.value } {price.currency } <br>
			{/each}
		{/if}
		<br>
		
		</p>
  
	<div>
		<div class="text-right"><img src="{contractor.logo}" alt="" /></div>
		<div>
			<h3>Contractor name:	{contractor.name}</h3>
			<div>description: {contractor.description}</div>
		</div>
  </div>
	<br>		
  <h3>Odbiór: {pickup.name}</h3>
	<div>
	address: {pickup.address}<br>
  description: {pickup.description}<br>
	contact: {pickup.contact.phone}<br>
	location lat/long/range: {pickup.location.lat} {pickup.location.long} {pickup.location.range} 
	</div>
</div>


  </div>
</div>

 