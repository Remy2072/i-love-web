<script>
	import { Hero, Spotify, Card } from '$lib';
</script>

<header>
	<section class="hero-wrapper">
		<Hero subTitle={'We love web journal '} dotColor={'red'} />
		<Spotify />
	</section>
</header>

<main>
	<section class="card-wrapper">
		<Card
			sprintNumber={'We 🩷 Web | Sprint 13'}
			sprintName={'Vasilis van Gemert'}
			firstDay={'13 Sep. 2024'}
			webLink={'/colleges/we-love-web-1'}
			inputText={'Naar documentatie'}
			emoji={'🩷'}
		/>
		<Card
			sprintNumber={'We ❤️ Web | Sprint 14'}
			sprintName={'Nicolas Garnier'}
			firstDay={'04 Okt 2024.'}
			webLink={'/colleges/we-love-web-2'}
			inputText={'Naar documentatie'}
			emoji={'❤️'}
		/>
		<Card
			sprintNumber={'We 🧡 Web | Sprint 15'}
			sprintName={'Dion Pieters'}
			firstDay={'18 Okt. 2024'}
			webLink={'/colleges/we-love-web-3'}
			inputText={'Naar documentatie'}
			emoji={'🧡'}
		/>
		<Card
			sprintNumber={'We 💛 Web | Sprint 16'}
			sprintName={'Emiel van Betsbrugge'}
			firstDay={'22 Nov. 2024'}
			webLink={'/colleges/we-love-web-4'}
			inputText={'Naar documentatie'}
			emoji={'💛'}
		/>
		<Card
			sprintNumber={'We 💚 Web | Sprint 17'}
			sprintName={'Justus Sturkenboom'}
			firstDay={'13 Dec. 2024'}
			webLink={'/colleges/we-love-web-5'}
			inputText={'Naar documentatie'}
			emoji={'💚'}
		/>
		<Card
			sprintNumber={'We 🩵 Web | Sprint 18'}
			sprintName={'Dave Bitter'}
			firstDay={'17 Jan. 2025'}
			webLink={'/colleges/we-love-web-6'}
			inputText={'Naar documentatie'}
			emoji={'🩵'}
		/>
		<Card
			sprintNumber={'We 💙 Web | Sprint 19'}
			sprintName={'Kilian Valkhof'}
			firstDay={'14 Feb. 2025'}
			webLink={'/colleges/we-love-web-7'}
			inputText={'Naar documentatie'}
			emoji={'💙'}
		/>
		<Card
			sprintNumber={'We 💜 Web | Sprint 19'}
			sprintName={'Cassie Evans'}
			firstDay={'07 Mrt. 2025'}
			webLink={'/colleges/we-love-web-8'}
			inputText={'Naar documentatie'}
			emoji={'💜'}
		/>
		<Card
			sprintNumber={'We 🤎 Web | Sprint 19'}
			sprintName={'...'}
			firstDay={'2025'}
			webLink={''}
			inputText={'Naar documentatie'}
			emoji={'🤎'}
		/>
		<Card
			sprintNumber={'We 🖤 Web | Sprint 20'}
			sprintName={'...'}
			firstDay={'2025'}
			webLink={''}
			inputText={'Naar documentatie'}
			emoji={'🖤'}
		/>
		<Card
			sprintNumber={'We 🩶 Web | Sprint 20'}
			sprintName={'...'}
			firstDay={'2025'}
			webLink={''}
			inputText={'Naar documentatie'}
			emoji={'🩶'}
		/>
		<Card
			sprintNumber={'We 🤍 Web | Sprint 20'}
			sprintName={'...'}
			firstDay={'2025'}
			webLink={''}
			inputText={'Naar documentatie'}
			emoji={'🤍'}
		/>
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
