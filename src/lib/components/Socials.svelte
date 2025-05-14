<script>
	import Svg from '../../lib/utils/Svg.svelte';

	const socialLinks = [
		{ name: 'linkedin', label: 'LinkedIn Profile' },
		{ name: 'github', label: 'GitHub Profile' },
		{ name: 'discord', label: 'Discord Profile' },
		{ name: 'email', label: 'Email Contact' }
	];
</script>

<nav class="social-links" aria-label="Social Media Links">
	{#each socialLinks as { name, label }}
		<a href="#/" class="social-link" data-platform={name} aria-label={label}>
			<Svg {name} />
		</a>
	{/each}
</nav>

<style>
	.social-links {
		--border-radius-lg: 1.25rem;
		--border-radius-sm: 7.5px;
		--grid-gap: 1.25rem;
		--padding: 35px;

		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--grid-gap);
		padding: var(--padding);
		border-radius: var(--border-radius-lg);
		width: 100%;
		box-shadow: var(--box-shadow-card);
		background-color: #f0f3f3;
	}

	.social-link {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--border-radius-sm);
		box-shadow: var(--box-shadow-button);
		width: 100%;
		height: 100%;
	}

	/* Platform-specific styles */
	.social-link[data-platform='linkedin'] {
		background: linear-gradient(149deg, rgb(0, 102, 152) 0%, rgb(0, 102, 152) 100%);
	}

	.social-link[data-platform='github'] {
		background: linear-gradient(149deg, rgb(111, 65, 194) 0%, rgb(138, 87, 230) 100%);
	}

	.social-link[data-platform='discord'] {
		background: linear-gradient(149deg, rgb(88, 101, 242) 0%, rgb(125, 135, 247) 100%);
	}

	.social-link[data-platform='email'] {
		background: linear-gradient(149deg, rgb(237, 241, 242) 0%, rgb(255, 255, 255) 100%);
	}
</style>
