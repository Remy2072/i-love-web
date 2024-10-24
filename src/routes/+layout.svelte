<main>
	<section class="card-wrapper">
		<slot />
	</section>
</main>

<style>
	.card-wrapper {
		display: grid;
		width: 90%;
		max-width: 1050px;
		margin: 0 auto;
		grid-template-columns: 1fr; 
		gap: 0 1.25rem; 
	}

	@media (min-width: 600px) {
		.card-wrapper {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 900px) {
		.card-wrapper {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
