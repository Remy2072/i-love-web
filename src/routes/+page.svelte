<script>
	import Nav from '$lib/sections/Nav.svelte';
	import Sprints from '$lib/pages/Sprints.svelte';
	import WeloveWeb from '$lib/pages/WeloveWeb.svelte';
	import Portfolio from '$lib/pages/Portfolio.svelte';

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
		<Sprints />
	{:else if activePage === 'weloveweb'}
		<WeloveWeb />
	{:else if activePage === 'portfolio'}
		<Portfolio />
	{/if}
</main>

<style>
	main {
		padding-bottom: 150px; /* Ruimte voor de navigatie */
	}
</style>
