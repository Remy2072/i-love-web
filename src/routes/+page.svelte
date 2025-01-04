<script>
	import { Hero, Spotify, Card } from '$lib';
</script>

<header>
	<section class="hero-wrapper">
		<Hero subTitle={'Learning journal '} />
		<Spotify />
	</section>
</header>

<main>
	<section class="card-wrapper">
		<Card
			sprintNumber={'Sprint 13'}
			sprintName={'Tribe for Life'}
			firstDay={'2 Sep. t/m '}
			lastDay={'20 Sep.'}
			webLink={'./sprints/sprint13'}
			inputText={'Naar documentatie'}
			emoji={'🛖'}
		/>
		<Card
			sprintNumber={'Sprint 14'}
			sprintName={'Lose Your Head'}
			firstDay={'23 Sep. t/m '}
			lastDay={'11 Okt.'}
			webLink={'./sprints/sprint14'}
			inputText={'Naar documentatie'}
			emoji={'🤯'}
		/>
		<Card
			sprintNumber={'Sprint 15'}
			sprintName={'Choices, Choices'}
			firstDay={'14 Okt. t/m '}
			lastDay={'25 Okt.'}
			webLink={'./sprints/sprint15'}
			inputText={'Naar documentatie'}
			emoji={'🎲'}
		/>
		<Card
			sprintNumber={'Sprint 16'}
			sprintName={"Don't Repeat Yourself"}
			firstDay={'11 Nov. t/m '}
			lastDay={'29 Nov.'}
			webLink={'./sprints/sprint16'}
			inputText={'Naar documentatie'}
			emoji={'🎙️'}
		/>

		<Card
			sprintNumber={'Sprint 17'}
			sprintName={'User Needs'}
			firstDay={'02 Dec. t/m '}
			lastDay={'20 Dec.'}
			webLink={'./sprints/sprint17'}
			inputText={'Naar documentatie'}
			emoji={'💁🏼‍♀️'}
		/>

		<Card
			sprintNumber={'Sprint 18'}
			sprintName={'Release Candidate'}
			firstDay={'06 Jan. t/m '}
			lastDay={'24 Jan.'}
			webLink={'./sprints/sprint18'}
			inputText={'Naar documentatie'}
			emoji={'🍾'}
		/>

		<Card
			sprintNumber={'Sprint 19'}
			sprintName={'Free Space'}
			firstDay={'03 Feb. t/m '}
			lastDay={'11 Apr.'}
			webLink={'./sprints/sprint19'}
			inputText={'Naar documentatie'}
			emoji={'🆓'}
		/>

		<Card
			sprintNumber={'Sprint 20'}
			sprintName={'Final Sprint'}
			firstDay={'14 Apr. t/m '}
			lastDay={'04 Jul.'}
			webLink={'./sprints/sprint20'}
			inputText={'Naar documentatie'}
			emoji={'🏆'}
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
