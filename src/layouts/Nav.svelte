<script>
	import arrowDown from '../assets/chevron-down.png';
	import IconButton from '../components/IconButton.svelte';
	import Dropdown from '../components/Dropdown.svelte';
	import callWaiterIcon from '../assets/notifications_active.png';
	import viewBillIcon from '../assets/receipt.png';
	import myCartIcon from '../assets/shopping_cart.png';
	import tableIcon from '../assets/table.png';

	const languages = [{ name: 'English' }, { name: '한국어' }];
	const tableNumber = '12';

	let isOpen = false;
	let selectedLanguage = languages[0].name;

	function callWaiter() {
		alert('Waiter Called');
	}

	function selectLanguage(language) {
		selectedLanguage = language;
		isOpen = false;
	}
</script>

<nav class="fixed w-full bg-[#24201F] h-14 text-white z-10 text-[0.6px]">
	<Dropdown
		items={languages.map((lang) => lang.name)}
		selected={selectedLanguage}
		onSelect={selectLanguage}
		className="grid-item"
		icon={arrowDown}
	/>

	<IconButton icon={callWaiterIcon} text="Call waiter" action={callWaiter} />
	<IconButton icon={viewBillIcon} text="View Bill" />
	<IconButton icon={myCartIcon} text="My Cart" bubble />
	<IconButton icon={tableIcon} text={tableNumber} />
</nav>

<style>
	nav {
		display: grid;
		grid-template-columns: 0.8fr 1.4fr 1.4fr 1.4fr 0.7fr;
	}
	.grid-item {
		border-right-width: 0.5px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
</style>
