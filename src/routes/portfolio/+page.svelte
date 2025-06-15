<script>
	import { Hero, Widget, Card } from '$lib';

	const cardData = [
		{
			sprintNumber: 'Hypersolid',
			sprintName: 'Heineken Kalender',
			firstDay: '2025',
			webLink: 'https://www.heinekenhoreca.nl/',
			inputText: 'Naar project',
			emoji: '🍺'
		},
		{
			sprintNumber: 'Personal',
			sprintName: 'Tic-tac-toe',
			firstDay: '2025',
			webLink: 'https://tic-tac-toe-chi-lilac.vercel.app/',
			inputText: 'Naar project',
			emoji: '⭕'
		},
		{
			sprintNumber: 'Triple',
			sprintName: 'Pokedex',
			firstDay: '2025',
			webLink: 'https://pokemon-app-seven-pied.vercel.app/en',
			inputText: 'Naar project',
			emoji: '🐦‍🔥'
		},
		{
			sprintNumber: 'FDND',
			sprintName: 'We Love Web',
			firstDay: '2025',
			webLink: 'https://weloveweb.agency.fdnd.nl/',
			inputText: 'Naar project',
			emoji: '❤️'
		},
		{
			sprintNumber: 'DEPT®',
			sprintName: 'Weather Planner',
			firstDay: '2024',
			webLink: 'https://proof-of-concept-dg2v.onrender.com/',
			inputText: 'Naar project',
			emoji: '☀️'
		},
		{
			sprintNumber: 'Funda',
			sprintName: 'Gezamenlijke Lijst',
			firstDay: '2024',
			webLink: 'https://pleasurable-ui-qxxg.onrender.com/',
			inputText: 'Naar project',
			emoji: '🏠'
		}
	];
</script>

<header>
	<section class="hero-wrapper">
		<Hero subTitle="Mijn projecten" dotColor="magenta" />
		<Widget />
	</section>
</header>

<main>
	<section class="card-wrapper">
		{#each cardData as card}
			<Card
				sprintNumber={card.sprintNumber}
				sprintName={card.sprintName}
				firstDay={card.firstDay}
				webLink={card.webLink}
				inputText={card.inputText}
				emoji={card.emoji}
			/>
		{/each}
	</section>
</main>

<style>
	.hero-wrapper {
		display: grid;
		width: 90%;
		max-width: 1050px;
		margin: 0 auto;
		margin-top: 3.125rem;
		grid-template-columns: 1fr;
		gap: 1.563rem 0;
	}

	.hero-wrapper::after {
		content: '';
		width: 100%;
		height: 3px;
		background-color: var(--pale-frost);
		margin-top: 1.875rem;
		margin: 1.875rem 0 1.25rem 0;
		border-radius: 10px;
		box-shadow: var(--box-shadow-line);
	}

	.card-wrapper {
		display: grid;
		width: 90%;
		max-width: 1050px;
		margin: 0 auto;
		grid-template-columns: 1fr;
		gap: 0 1.25rem;
		margin-bottom: 3.125rem;
	}

	@media (min-width: 600px) {
		.hero-wrapper::after {
			display: none;
		}
		.card-wrapper {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 900px) {
		.hero-wrapper {
			margin-top: 6.25rem;
			grid-template-columns: 2fr 1fr;
			gap: 0 5rem;
		}

		.card-wrapper {
			margin-top: 3.125rem;
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
