<script>
	import Svg from './Svg.svelte';

	export let sprintNumber = '';
	export let sprintName = '';
	export let firstDay = '';
	export let lastDay = '';
	export let webLink = '';
	export let emoji = '';
</script>

<article style="--bg-emoji: '{emoji}'">
	<h2><small>{sprintNumber}</small>{sprintName}</h2>
	<p><time datetime="2024-09-02">{firstDay}</time> t/m <time datetime="2024-09-20">{lastDay}</time></p>
	<a href={webLink}>Naar documentatie<Svg name="arrow"/></a>
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
	}
</style>