<script>
	import Svg from '../../lib/utils/Svg.svelte';

	const socialLinks = [
		{
			name: 'linkedin',
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/remy-duivesteijn-4a2221224/',
			aria: 'LinkedIn profiel van Remy Duivesteijn'
		},
		{
			name: 'github',
			label: 'GitHub',
			href: 'https://github.com/Remy2072',
			aria: 'GitHub profiel van Remy Duivesteijn'
		},
		{
			name: 'discord',
			label: 'Discord',
			href: 'https://discordapp.com/users/remy2072',
			aria: 'Discord profiel van Remy Duivesteijn'
		},
		{
			name: 'email',
			label: 'Email',
			href: 'mailto:remyd03@icloud.com',
			aria: 'Stuur een email naar Remy Duivesteijn'
		}
	];
</script>

<nav class="social-links" aria-label="Social Media Links">
	{#each socialLinks as { name, label, href, aria }}
		<a
			{href}
			class="social-link"
			data-platform={name}
			aria-label={aria}
			target="_blank"
			rel="noopener noreferrer"
		>
			<Svg {name} />
			<span class="label">{label}</span>
		</a>
	{/each}
</nav>

<style>
	.social-links {
		--border-radius-lg: 1.25rem;
		--border-radius-sm: 7.5px;
		--grid-gap: 1.25rem;
		--padding: 35px;
		--transition-speed: 350ms;

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
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--border-radius-sm);
		box-shadow: var(--box-shadow-button);
		width: 100%;
		height: 106px;
		overflow: hidden;
		transition: transform var(--transition-speed) ease;
	}

	.social-link:hover {
		transform: scale(1.05);
	}

	/* SVG styling */
	.social-link :global(svg) {
		height: 45%;
		width: 45%;
		transition: all var(--transition-speed) ease;
	}

	.social-link:hover :global(svg) {
		transform: scale(0.8) translateY(-37.5%);
	}

	/* Label styling */
	.label {
		position: absolute;
		left: 50%;
		bottom: 0.7em;
		font-size: 1.15em;
		font-weight: 500;
		color: white;
		transform: translate(-50%, 80%) scale(0.75);
		opacity: 0;
		transition: all var(--transition-speed) ease;
		pointer-events: none;
	}

	.social-link:hover .label {
		transform: translate(-50%, 0) scale(1);
		opacity: 1;
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

	/* Email-specific text color */
	.social-link[data-platform='email'] .label {
		color: #333;
	}
</style>
