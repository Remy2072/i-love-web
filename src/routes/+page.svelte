<script>
	import { Nav, Page1, Page2, Page3 } from '$lib';

	let activePage = 'sprints';

	function handlePageChange(event) {
		activePage = event.detail;
	}
</script>

<header>
	<Nav on:pageChange={handlePageChange} />
</header>

<main>
	{#if activePage === 'sprints'}
		<Page1 />
	{:else if activePage === 'we ♥ web'}
		<Page2 />
	{:else if activePage === 'portfolio'}
		<Page3 />
	{/if}
</main>

<style>
	main {
		padding-bottom: 150px;
	}
</style>
