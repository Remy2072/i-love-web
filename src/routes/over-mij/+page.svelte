<script>
	import { Agenda, Info, Maps, Skills, Socials } from '$lib';
</script>

<section class="container">
	<section class="grid-1">
		<Info />
		<Maps />
	</section>
	<section class="grid-2">
		<Socials />
		<Agenda />
		<Skills />
	</section>
</section>

<style>
	.container {
		width: 90%;
		max-width: 1050px;
		margin: 0 auto;
		margin-top: 3.125rem;
	}

	.grid-1,
	.grid-2 {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.25rem;
	}

	.grid-2 {
		margin-top: 1.25rem;
	}

	@media (min-width: 600px) {
		.grid-1 {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto;
		}

		.grid-2 {
			margin-top: 1.25rem;
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 900px) {
		.grid-1 {
			margin-top: 6.25rem;
			grid-template-columns: 2fr 1fr;
		}

		.grid-2 {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
