<script>
	export let icon;
	export let text;
	export let action = () => {};
	export let bubble;
</script>

<div class="grid-item md:text-lg lg:text-xl" on:click={action}>
	<img class="mr-1 lg:mr-2" src={icon} />
	<span class="mr-1">{text}</span>
	{#if bubble}
		<div
			class="bubble bg-[#56534F] rounded-full ml-2 flex items-center justify-center text-[#B1AEA8]"
		>
			0
		</div>
	{/if}
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
	@media (max-width: 480px) {
		.bubble {
			width: 18px;
			height: 18px;
		}
	}

	@media (min-width: 481px) and (max-width: 880px) {
		.bubble {
			width: 24px;
			height: 24px;
		}
	}

	@media (min-width: 881px) {
		.bubble {
			width: 30px;
			height: 30px;
		}
	}
</style>
