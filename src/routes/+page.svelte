<script>
	import { categoryOrder, categories } from '../mockupData';
</script>

<svelte:head>
	<title>take-quiz | Home</title>
</svelte:head>

<section class="h-fit w-screen flex p-7 pt-28">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-full gap-10">
		{#each categoryOrder as categoryId, index (index)}
			<div
				class="aspect-ratio-4-3 bg-[#FAFBF9] flex flex-col items-center w-full cursor-pointer rounded-2xl overflow-hidden"
			>
				<a
					href={`/product/${categoryId}`}
					rel="prefetch"
					class="absolute inset-0 flex flex-col items-center"
				>
					<img
						class="absolute rounded-full h-3/4 w-3/5 mb-2 top-[-20px]"
						src={categories[categoryId].picture}
						alt={categories[categoryId].name}
					/>
					<h3 class="absolute bottom-6 text-center text-xl lg:text-2xl">
						{categories[categoryId].name}
					</h3>
				</a>
			</div>
		{/each}
	</div>
</section>

<style>
	.aspect-ratio-4-3 {
		position: relative;
		padding-top: 75%;
		overflow: visible;
	}
</style>
