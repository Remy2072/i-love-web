<script>
	import { Agenda, Info, Maps, Skills, Socials } from '$lib';
</script>

<section class="grid">
	<Info />
	<Maps />
	<Socials />
	<Agenda />
	<Skills />
</section>

<style>
	.grid {
		display: grid;
		width: 90%;
		max-width: 1050px;
		margin: 0 auto;
		margin-top: 3.125rem;
		grid-template-columns: 1fr;
		gap: 1rem;
		grid-auto-rows: 1fr;
	}

	@media (min-width: 600px) {
		.grid {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto;
		}
	}

	@media (min-width: 900px) {
		.grid {
			margin-top: 6.25rem;
			grid-template-columns: 2fr 1fr;
			grid-template-rows: 1fr 1fr;
		}
	}
</style>
