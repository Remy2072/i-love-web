<script>
	import { page } from '$app/stores';

	let navMarker;
	let navItems = [];

	function updateIndicator(target) {
		if (navMarker && target) {
			// Always get the parent <a> in case the span is clicked
			const linkElement = target.closest('a');
			if (linkElement) {
				navMarker.style.left = `${linkElement.offsetLeft}px`;
				navMarker.style.width = `${linkElement.offsetWidth}px`;
			}
		}
	}

	const pages = [
		{ name: 'sprints', emoji: '🚀', href: '/' },
		{ name: 'we ♥ web', emoji: '🌍', href: '/we-love-web' },
		{ name: 'portfolio', emoji: '👨🏻‍💻', href: '/portfolio' },
		{ name: 'over mij', emoji: '🤙🏼', href: '/over-mij' }
	];

	$: {
		const activeItem = navItems.find((item) => item?.classList.contains('active'));
		if (activeItem) {
			updateIndicator(activeItem);
		}
	}
</script>

<header>
	<nav>
		<ul>
			{#each pages as { name, emoji, href }, i}
				<li>
					<a
						{href}
						class:active={$page.url.pathname === href}
						bind:this={navItems[i]}
						on:click={(event) => updateIndicator(event.target)}
					>
						<span class="emoji">{emoji}</span>
						{name.charAt(0).toUpperCase() + name.slice(1)}
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

	.emoji {
		font-size: 2.188rem;
		position: absolute;
		left: 50%;
		top: 0;
		transform: translateX(-50%) translateY(-2.5rem);
		transition: 500ms ease;
		cursor: pointer;
	}

	@media (min-width: 485px) {
		.emoji {
			font-size: 2.813rem;
		}
	}

	header nav ul li a.active .emoji {
		transform: translateX(-50%) translateY(-2.813rem) scale(1.15);
	}
</style>
