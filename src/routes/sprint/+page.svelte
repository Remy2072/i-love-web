<script>
	import { Hero, Widget, Card } from '$lib';

	const cardData = [
		{
			number: 'Sprint 13',
			name: 'Tribe for Life',
			firstDay: '2 Sep. t/m ',
			lastDay: '20 Sep.',
			webLink: '../journal/sprint13',
			inputText: 'Naar documentatie',
			emoji: '🛖'
		},
		{
			number: 'Sprint 14',
			name: 'Lose Your Head',
			firstDay: '23 Sep. t/m ',
			lastDay: '11 Okt.',
			webLink: '../journal/sprint14',
			inputText: 'Naar documentatie',
			emoji: '🤯'
		},
		{
			number: 'Sprint 15',
			name: 'Choices, Choices',
			firstDay: '14 Okt. t/m ',
			lastDay: '25 Okt.',
			webLink: '../journal/sprint15',
			inputText: 'Naar documentatie',
			emoji: '🎲'
		},
		{
			number: 'Sprint 16',
			name: "Don't Repeat Yourself",
			firstDay: '11 Nov. t/m ',
			lastDay: '29 Nov.',
			webLink: '../journal/sprint16',
			inputText: 'Naar documentatie',
			emoji: '🎙️'
		},
		{
			number: 'Sprint 17',
			name: 'User Needs',
			firstDay: '02 Dec. t/m ',
			lastDay: '20 Dec.',
			webLink: '../journal/sprint17',
			inputText: 'Naar documentatie',
			emoji: '💁🏼‍♀️'
		},
		{
			number: 'Sprint 18',
			name: 'Release Candidate',
			firstDay: '06 Jan. t/m ',
			lastDay: '24 Jan.',
			webLink: '../journal/sprint18',
			inputText: 'Naar documentatie',
			emoji: '🍾'
		},
		{
			number: 'Sprint 19',
			name: 'Free Space',
			firstDay: '03 Feb. t/m ',
			lastDay: '11 Apr.',
			webLink: '../journal/sprint19',
			inputText: 'Naar documentatie',
			emoji: '🆓'
		},
		{
			number: 'Sprint 20',
			name: 'Final Sprint',
			firstDay: '14 Apr t/m ',
			lastDay: '04 Jul.',
			webLink: '../journal/sprint20',
			inputText: 'Naar documentatie',
			emoji: '🏆'
		}
	].reverse();
</script>

<header>
	<section class="hero-wrapper">
		<Hero subTitle="Learning journal" />
		<Widget />
	</section>
</header>

<main>
	<section class="card-wrapper">
		{#each cardData as card}
			<Card
				sprintNumber={card.number}
				sprintName={card.name}
				firstDay={card.firstDay}
				lastDay={card.lastDay}
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
