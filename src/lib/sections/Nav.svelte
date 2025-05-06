<script>
	import { onMount, createEventDispatcher, tick } from 'svelte';

	let navMarker;
	let navItems = [];
	let activeIndex = 0;
	const dispatch = createEventDispatcher();

	const pages = ['sprints', 'we ♥ web', 'portfolio', 'over mij'];

	function updateIndicator(target) {
		if (navMarker && target) {
			navMarker.style.left = `${target.offsetLeft}px`;
			navMarker.style.width = `${target.offsetWidth}px`;
		}
	}

	function setActive(index, event, page) {
		event.preventDefault();
		activeIndex = index;
		updateIndicator(event.target);
		dispatch('pageChange', page);

		const url = new URL(window.location);
		url.searchParams.set('page', page); 
		window.history.pushState({}, '', url);
	}

	async function setActiveFromURL() {
		const urlParams = new URLSearchParams(window.location.search);
		const currentPage = urlParams.get('page');
		const index = pages.indexOf(currentPage);
		if (index !== -1) {
			activeIndex = index;
			await tick();
			updateIndicator(navItems[index]);
		} else {
			activeIndex = 0;
			await tick();
			updateIndicator(navItems[0]);
		}
	}

	onMount(() => {
		setActiveFromURL();
	});
</script>

<header>
	<nav>
		<ul>
			{#each ['sprints', 'we ♥ web', 'portfolio', 'over mij'] as page, i}
				<li>
					<a
						href="/"
						class:active={activeIndex === i}
						bind:this={navItems[i]}
						on:click={(event) => setActive(i, event, page)}
						on:keydown={(event) => handleKeydown(event, i, page)}
						tabindex="0"
						role="button"
					>
						<span
							>{#if i === 0}🚀{:else if i === 1}🌍{:else if i === 2}👨🏻‍💻{:else}🤙🏼{/if}</span
						>
						{page.charAt(0).toUpperCase() + page.slice(1)}
					</a>
				</li>
			{/each}
		</ul>
		<div bind:this={navMarker}></div>
	</nav>
</header>

<style>
	header {
		position: fixed;
		bottom: 0;
		width: 100%;
		padding-bottom: 1.25rem;
		z-index: 2;
	}

	header::before {
		position: absolute;
		content: '';
		left: 0;
		bottom: 0;
		right: 0;
		height: 12.5rem;
		background: linear-gradient(
			180deg,
			rgba(240, 243, 243, 0) 0%,
			rgba(240, 243, 243, 0.75) 50%,
			rgba(240, 243, 243, 1) 75%,
			rgba(240, 243, 243, 1) 100%
		);
	}

	header nav {
		width: fit-content;
		margin: 0 auto;
		height: 4.063rem;
		border-radius: 1.25rem;
		position: relative;
		background-color: var(--pale-frost);
		box-shadow: var(--box-shadow-hero);
	}

	@media (min-width: 485px) {
		header nav {
			height: 5rem;
		}
	}

	header nav div {
		position: absolute;
		height: calc(100% - 1.125rem);
		background: linear-gradient(-45deg, rgba(255, 255, 255, 1) 0%, rgba(240, 243, 243, 1) 100%);
		box-shadow: var(--box-shadow-button);
		bottom: 9px;
		transition: all 0.3s ease;
		border-radius: 12.5px;
	}

	header nav ul {
		display: flex;
		list-style: none;
		align-items: flex-end;
		gap: 5px;
		height: 100%;
		z-index: 1;
		position: relative;
		padding: 0 10px;
	}

	header nav ul li {
		padding: 0;
	}

	header nav ul li a {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		color: #a0a0ae;
		font-weight: 500;
		cursor: pointer;
		position: relative;
		outline: none;
		padding: 11px;
		font-size: 14px;
	}

	@media (min-width: 485px) {
		header nav ul li a {
			padding: 1.25rem;
			font-size: 1rem;
		}
	}

	header nav ul li a.active {
		color: var(--tropical-cyan);
	}

	a:focus-visible {
		color: black;
		outline-offset: 4px;
	}

	span {
		font-size: 2.188rem;
		position: absolute;
		left: 50%;
		top: 0;
		transform: translateX(-50%) translateY(-2.5rem);
		pointer-events: none;
		transition: 500ms ease;
	}

	@media (min-width: 485px) {
		span {
			font-size: 2.813rem;
		}
	}

	header nav ul li a.active span {
		transform: translateX(-50%) translateY(-2.813rem) scale(1.15);
	}
</style>
