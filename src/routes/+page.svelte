<script>
	import { Nav, Page1, Page2, Page3 } from '$lib';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { derived } from 'svelte/store';

	const activePage = derived(page, ($page) => $page.url.searchParams.get('page'));

	function handlePageChange(event) {
		const newPage = event.detail;
		const currentParams = new URLSearchParams($page.url.searchParams);
		currentParams.set('page', newPage);
		goto(`?${currentParams.toString()}`, { replaceState: true });
	}
</script>

<header>
	<Nav on:pageChange={handlePageChange} />
</header>

<main>
	{#if $activePage === 'sprints'}
		<Page1 />
	{:else if $activePage === 'we ♥ web'}
		<Page2 />
	{:else if $activePage === 'portfolio'}
		<Page3 />
	{/if}
</main>

<style>
	main {
		padding-bottom: 150px;
	}
</style>
