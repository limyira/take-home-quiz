<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	const apiURL = `${import.meta.env.VITE_API_URL}/product`;
	const { id } = $page.params;
	let orderData;
	let productOrder;
	onMount(async () => {
		try {
			const res = await (
				await fetch(`${apiURL}/${id}`, {
					method: 'GET'
				})
			).json();
			orderData = res.orderData;
			productOrder = res.orderedProducts;
		} catch (err) {
			alert('error:', err);
		}
	});
</script>

<svelte:head>
	<title>take-quiz | product</title>
</svelte:head>
<section class=" w-screen p-5 md:p-14 md:pt-20 lg:p-14 pt-20 lg:pt-20">
	{#if !orderData}
		<h1 class="text-3xl">is Loading...</h1>
	{:else}
		<div class="flex w-full h-fit items-center mb-6">
			<button
				on:click={() => window.history.back()}
				class="bg-white p-2 pl-4 pr-4 md:p-4 md:pl-6 md:pr-6 lg:p-4 lg:pl-6 lg:pr-6 rounded-xl shadow-lg shadow-2lg mr-5"
				>&larr;</button
			>
			<h1 class="text-lg md:text-3xl lg:text-3xl mr-5">{orderData.name}</h1>
			{#if orderData.description}
				<h2 class="mr-5">・</h2>
				<h2 class="text-lg md:text-2xl lg:text-2xl text-[#535150]">{orderData.description}</h2>
			{/if}
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full h-fit gap-5">
			{#if productOrder && productOrder.length > 0}
				{#each productOrder as product}
					<div class=" rounded-xl flex flex-col items-center h-fit">
						{#if product.picture}
							<img class="grid-item rounded-xl mb-3" src={product.picture} />
						{:else}
							<div
								class="grid-item placeholder rounded-md mb-3 bg-[#E8E6E5] text-white w-full p-5 text-3xl font-bold"
							>
								{product.name}
							</div>
						{/if}
						<span class="text-2xl mb-2">{product.name}</span>
						<p>
							{(product.price / 100).toLocaleString('en-US', {
								style: 'currency',
								currency: 'USD'
							})}
						</p>
					</div>
				{/each}
			{:else}
				<p>제품이 없습니다.</p>
			{/if}
		</div>
	{/if}
</section>

<style>
	.aspect-ratio-4-3 {
		position: relative;
		padding-top: 75%;
		overflow: visible;
	}
	.grid-item {
		width: 100%;
		aspect-ratio: 4/3;
	}
</style>
