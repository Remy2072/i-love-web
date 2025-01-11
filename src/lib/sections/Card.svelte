<script>
	import Svg from '../Svg.svelte';

	export let sprintNumber = '';
	export let sprintName = '';
	export let firstDay = '';
	export let lastDay = '';
	export let webLink = '';
	export let inputText = '';
	export let emoji = '';
</script>


	<article style="--bg-emoji: '{emoji}'">
		<h2><small>{sprintNumber}</small>{sprintName}</h2>
		<p><time datetime="2024-09-02">{firstDay}</time><time datetime="2024-09-20">{lastDay}</time></p>
		<a href={webLink}>{inputText}<Svg name="arrow" /></a>
	</article>


<style>
	article {
		width: 100%;
		background: var(--gradient-card);
		box-shadow: var(--box-shadow-card);
		border-radius: 15px;
		padding: 1.25rem;
		position: relative;
		margin-top: 1.563rem;
		cursor: pointer;
	}

	article:hover {
		transform: scale(1.02);
		transition: 0.5s;
	}

	article::after {
		content: var(--bg-emoji);
		position: absolute;
		top: 0;
		transform: translateY(-30%);
		right: 1.25rem;
		font-size: 3.75rem;
		display: inline-block;
		text-shadow: var(--box-shadow-emoji);
	}

	h2 {
		color: var(--slate-blue);
		font-weight: var(--font-weight-semi-bold);
		font-size: 1.563rem;
	}

	h2 small {
		display: block;
		font-size: 1rem;
		color: var(--dusty-lavender);
		font-weight: var(--font-weight-medium);
		margin-bottom: 5px;
	}

	p {
		font-size: 14px;
		color: var(--dusty-lavender);
		margin-top: 1.875rem;
		margin-left: 4px;
	}

	a {
		background: var(--gradient-button);
		box-shadow: var(--box-shadow-button);
		width: 100%;
		height: 3.125rem;
		color: var(--tropical-cyan);
		border-radius: 7.5px;
		text-decoration: none;
		margin-top: 15px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 18px;
		position: relative;
	}

	a:hover {
		transition: background-color 0.3s ease;
	}

	@property --angle {
		syntax: '<angle>';
		initial-value: 0deg;
		inherits: false;
	}

	a::before,
	a::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: conic-gradient(from var(--angle), transparent 70%, var(--tropical-cyan));
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		z-index: -1;
		padding: 3px;
		animation: none;
		opacity: 0;
		transition: opacity 0.3s ease;
		border-radius: 7.5px;
	}

	a::before {
		filter: blur(1.5rem);
	}

	article:hover a::after,
	article:hover a::before {
		animation: 3s spin linear infinite;
		opacity: 1;
	}

	@keyframes spin {
		from {
			--angle: 0deg;
		}
		to {
			--angle: 360deg;
		}
	}
</style>
