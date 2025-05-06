<script>
	import { Hero, Widget, Card } from '$lib';

	const cardData = [
		{
			sprintNumber: 'We 🩷 Web | Sprint 13',
			sprintName: 'Vasilis van Gemert',
			firstDay: '13 Sep. 2024',
			webLink: '../lectures/lecture1',
			inputText: 'Naar documentatie',
			emoji: '🩷'
		},
		{
			sprintNumber: 'We ❤️ Web | Sprint 14',
			sprintName: 'Nicolas Garnier',
			firstDay: '04 Okt 2024.',
			webLink: '../lectures/lecture2',
			inputText: 'Naar documentatie',
			emoji: '❤️'
		},
		{
			sprintNumber: 'We 🧡 Web | Sprint 15',
			sprintName: 'Dion Pieters',
			firstDay: '18 Okt. 2024',
			webLink: '../lectures/lecture3',
			inputText: 'Naar documentatie',
			emoji: '🧡'
		},
		{
			sprintNumber: 'We 💛 Web | Sprint 16',
			sprintName: 'Emiel van Betsbrugge',
			firstDay: '22 Nov. 2024',
			webLink: '../lectures/lecture4',
			inputText: 'Naar documentatie',
			emoji: '💛'
		},
		{
			sprintNumber: 'We 💚 Web | Sprint 17',
			sprintName: 'Justus Sturkenboom',
			firstDay: '13 Dec. 2024',
			webLink: '../lectures/lecture5',
			inputText: 'Naar documentatie',
			emoji: '💚'
		},
		{
			sprintNumber: 'We 🩵 Web | Sprint 18',
			sprintName: 'Dave Bitter',
			firstDay: '17 Jan. 2025',
			webLink: '../lectures/lecture6',
			inputText: 'Naar documentatie',
			emoji: '🩵'
		},
		{
			sprintNumber: 'We 💙 Web | Sprint 19',
			sprintName: 'Kilian Valkhof',
			firstDay: '14 Feb. 2025',
			webLink: '../lectures/lecture7',
			inputText: 'Naar documentatie',
			emoji: '💙'
		},
		{
			sprintNumber: 'We 💜 Web | Sprint 19',
			sprintName: 'Cassie Evans',
			firstDay: '07 Mrt. 2025',
			webLink: '../lectures/lecture8',
			inputText: 'Naar documentatie',
			emoji: '💜'
		},
		{
			sprintNumber: 'We 🤎 Web | Sprint 19',
			sprintName: '...',
			firstDay: '2025',
			webLink: '',
			inputText: 'Naar documentatie',
			emoji: '🤎'
		},
		{
			sprintNumber: 'We 🖤 Web | Sprint 20',
			sprintName: '...',
			firstDay: '2025',
			webLink: '',
			inputText: 'Naar documentatie',
			emoji: '🖤'
		},
		{
			sprintNumber: 'We 🩶 Web | Sprint 20',
			sprintName: '...',
			firstDay: '2025',
			webLink: '',
			inputText: 'Naar documentatie',
			emoji: '🩶'
		},
		{
			sprintNumber: 'We 🤍 Web | Sprint 20',
			sprintName: '...',
			firstDay: '2025',
			webLink: '',
			inputText: 'Naar documentatie',
			emoji: '🤍'
		}
	];
</script>

<header>
	<section class="hero-wrapper">
		<Hero subTitle="We love web journal" dotColor="red" />
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
