<script>
	import { onMount, createEventDispatcher } from 'svelte';

	let navMarker;
	let navItems = [];
	let activeIndex = 0;
	const dispatch = createEventDispatcher();

	function updateIndicator(target) {
		if (navMarker) {
			navMarker.style.left = `${target.offsetLeft}px`;
			navMarker.style.width = `${target.offsetWidth}px`;
		}
	}

	function setActive(index, event, page) {
		activeIndex = index;
		updateIndicator(event.target);
		dispatch('pageChange', page);
	}

	onMount(() => {
		if (navItems.length > 0 && navMarker) {
			updateIndicator(navItems[0]);
		}
	});

	function handleKeydown(event, index, page) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			setActive(index, event, page);
		}
	}
</script>

<header>
	<nav>
		<ul>
			<li>
				<a
					href="/"
					class:active={activeIndex === 0}
					bind:this={navItems[0]}
					on:click={(event) => setActive(0, event, 'sprints')}
					on:keydown={(event) => handleKeydown(event, 0, 'sprints')}
					tabindex="0"
				>
					<span>🚀</span>
					Sprints
				</a>
			</li>
			<li>
				<a
					href="/"
					class:active={activeIndex === 1}
					bind:this={navItems[1]}
					on:click={(event) => setActive(1, event, 'weloveweb')}
					on:keydown={(event) => handleKeydown(event, 1, 'weloveweb')}
					tabindex="0"
				>
					<span>🌍</span>
					We ♥ web
				</a>
			</li>
			<li>
				<a
					href="/"
					class:active={activeIndex === 2}
					bind:this={navItems[2]}
					on:click={(event) => setActive(2, event, 'portfolio')}
					on:keydown={(event) => handleKeydown(event, 2, 'portfolio')}
					tabindex="0"
				>
					<span>👨🏿‍💻</span>
					Projecten
				</a>
			</li>
			<li>
				<a
					href="/"
					class:active={activeIndex === 3}
					bind:this={navItems[3]}
					on:click={(event) => setActive(3, event, 'overmij')}
					on:keydown={(event) => handleKeydown(event, 3, 'overmij')}
					tabindex="0"
				>
					<span>🤙🏼</span>
					Over mij
				</a>
			</li>
		</ul>
		<div bind:this={navMarker}></div>
	</nav>
</header>

<style>
	header {
		position: fixed;
		bottom: 0;
		width: 100%;
		padding-bottom: 20px;
		z-index: 10; /* Zorgt dat de navigatie boven andere elementen staat */
	}

	header::before {
		position: absolute;
		content: '';
		left: 0;
		bottom: 0;
		right: 0;
		height: 200px;
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
		margin-top: 500px;
		height: 80px;
		border-radius: 20px;
		position: relative;
		background-color: var(--pale-frost);
		box-shadow: var(--box-shadow-hero);
	}

	header nav div {
		position: absolute;
		height: calc(100% - 18px);
		background: linear-gradient(-45deg, rgba(255, 255, 255, 1) 0%, rgba(240, 243, 243, 1) 100%);
		box-shadow: var(--box-shadow-button);
		bottom: 9px;
		transition: all 0.3s ease;
		z-index: 0;
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
		padding: 20px;
		text-decoration: none;
		color: #a0a0ae;
		font-weight: 500;
		cursor: pointer;
		position: relative;
		outline: none;
	}

	header nav ul li a.active {
		color: var(--tropical-cyan);
	}

	span {
		font-size: 45px;
		position: absolute;
		left: 50%;
		top: 0;
		transform: translateX(-50%) translateY(-40px);
		pointer-events: none;
		transition: 500ms ease;
	}

	header nav ul li a.active span {
		transform: translateX(-50%) translateY(-45px) scale(1.15);
	}
</style>
