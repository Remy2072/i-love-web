<script>
	import Hero from '$lib/Hero.svelte';
	import Card from '$lib/Card.svelte';
</script>

<header>
	<section class="hero-wrapper">
		<Hero />
	</section>
</header>

<main>
	<section class="card-wrapper">
		<Card
			sprintNumber={'Sprint 13'}
			sprintName={'Tribe for Life'}
			firstDay={'2 Sep.'}
			lastDay={'20 Sep.'}
			webLink={'/sprint13'}
			emoji={'🥷🏼'}
		/>
		<Card
			sprintNumber={'Sprint 14'}
			sprintName={'Lose Your Head'}
			firstDay={'23 Sep.'}
			lastDay={'11 Okt.'}
			webLink={'/sprint14'}
			emoji={'🤯'}
		/>
		<Card
			sprintNumber={'Sprint 15'}
			sprintName={'Choices, Choices'}
			firstDay={'14 Okt.'}
			lastDay={'25 Okt.'}
			webLink={'/sprint15'}
			emoji={'🎲'}
		/>
		<Card
			sprintNumber={'Sprint 16'}
			sprintName={"Don't Repeat Yourself"}
			firstDay={'11 Nov.'}
			lastDay={'29 Nov.'}
			webLink={'/sprint16'}
			emoji={'🎙️'}
		/>

		<Card
			sprintNumber={'Sprint 17'}
			sprintName={'User Needs'}
			firstDay={'02 Dec.'}
			lastDay={'20 Dec.'}
			webLink={'/sprint17'}
			emoji={'💁🏼‍♀️'}
		/>

		<Card
			sprintNumber={'Sprint 18'}
			sprintName={'Release Candidate'}
			firstDay={'06 Jan.'}
			lastDay={'24 Jan.'}
			webLink={'/sprint18'}
			emoji={'🍾'}
		/>

		<Card
			sprintNumber={'Sprint 19'}
			sprintName={'Free Space'}
			firstDay={'03 Feb.'}
			lastDay={'11 Apr.'}
			webLink={'/sprint19'}
			emoji={'🆓'}
		/>

		<Card
			sprintNumber={'Sprint 20'}
			sprintName={'Final Sprint'}
			firstDay={'14 Apr.'}
			lastDay={'04 Jul.'}
			webLink={'/sprint20'}
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
		gap: 1.25rem 0;
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
