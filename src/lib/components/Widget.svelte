<div class="spotify">
	<div class="container-1">
		<h2>Onlangs beluisterd</h2>
		<strong>Money Trees</strong>
		<span>Kendrick Lamar</span>
	</div>
	<div class="container-2">
		<img class="img-1" src="/img/moneyTrees.png" alt="" />
		<img class="img-2" src="/img/record.png" alt="" />
	</div>
</div>

<style>
	.spotify {
		background-color: var(--pale-frost);
		border-radius: 1.25rem;
		box-shadow: var(--box-shadow-hero);
		width: 100%;
		display: flex;
		flex-direction: row;
		position: relative;
	}

	.container-1 {
		padding: 22px 0 22px 25px;
		display: flex;
		flex-direction: column;
		height: 100%;
		gap: 5px;
	}

	h2 {
		font-size: 1rem;
		font-weight: var(--font-weight-medium);
		color: var(--dusty-lavender);
	}

	strong {
		font-size: 1.5rem;
		font-weight: var(--font-weight-semi-bold);
		color: var(--slate-blue);
		margin-top: auto;
	}

	span {
		font-size: 14px;
		color: var(--dusty-lavender);
	}

	.container-2 {
		position: absolute;
		top: 50%;
		right: 4rem;
		display: grid;
		place-items: center;
	}

	@media (min-width: 900px) {
		.container-2 {
			right: 1.5rem;
		}
	}

	@media (min-width: 950px) {
		.container-2 {
			right: 2rem;
		}
	}

	.img-1 {
		position: absolute;
		width: 50px;
		height: 50px;
		z-index: 1;
		border-radius: 50%;
	}

	@media (min-width: 900px) {
		.img-1 {
			width: 60px;
			height: 60px;
		}
	}

	.img-2 {
		position: absolute;
		width: 95px;
		height: 95px;
	}

	@media (min-width: 900px) {
		.img-2 {
			width: 110px;
			height: 110px;
		}
	}
</style>
