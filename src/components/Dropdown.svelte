<script>
	export let items = [];
	export let selected = items[0];
	export let onSelect = (item) => {};
	export let className = '';
	export let icon = '';
	let isOpen = false;

	function selectItem(item) {
		onSelect(item);
		isOpen = false;
	}
</script>

<div class={`${className} relative justify-around cursor-pointer`}>
	<div
		class="flex items-center w-full justify-around md:text-lg lg:text-xl"
		on:click={() => (isOpen = !isOpen)}
	>
		<span>{selected}</span>
		<img src={icon} />
	</div>
	<div
		class={`absolute top-full mt-1 w-full bg-[#24201F] rounded-md shadow-lg ${
			isOpen ? 'block' : 'hidden'
		}`}
	>
		{#each items as item}
			<div class="p-2 hover:bg-gray-200 cursor-pointer" on:click={() => selectItem(item)}>
				{item}
			</div>
		{/each}
	</div>
</div>

<style>
	.grid-item {
		border-right-width: 0.5px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
</style>
