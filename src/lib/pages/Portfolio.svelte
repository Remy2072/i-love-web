<script>
	import { Hero, Spotify, Card } from '$lib';
</script>

<header>
	<section class="hero-wrapper">
		<Hero subTitle={'Mijn projecten '} dotColor={'magenta'} />
		<Spotify />
	</section>
</header>

<main>
	<section class="card-wrapper">
		<Card
			sprintNumber={'HvA | FDND'}
			sprintName={'We Love Web'}
			firstDay={'2024 - 2025'}
			webLink={''}
			inputText={'Naar project'}
			emoji={'❤️'}
		/>

		<Card
			sprintNumber={'FDND'}
			sprintName={'Profiel card'}
			firstDay={'2024'}
			webLink={''}
			inputText={'Naar project'}
			emoji={'🙋🏻‍♂️'}
		/>

		<Card
			sprintNumber={'DEPT®'}
			sprintName={'Weather Planner'}
			firstDay={'2024'}
			webLink={''}
			inputText={'Naar project'}
			emoji={'☀️'}
		/>

		<Card
			sprintNumber={'Funda'}
			sprintName={'Gezamenlijke lijst'}
			firstDay={'2024'}
			webLink={''}
			inputText={'Naar project'}
			emoji={'🏠'}
		/>

		<Card
			sprintNumber={'Endeavour'}
			sprintName={'Parley'}
			firstDay={'2023'}
			webLink={''}
			inputText={'Naar project'}
			emoji={'😁'}
		/>

		<Card
			sprintNumber={'Mediacollege'}
			sprintName={'Ecosy'}
			firstDay={'2021'}
			webLink={''}
			inputText={'Naar project'}
			emoji={'♻️'}
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
