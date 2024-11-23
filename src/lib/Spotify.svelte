<div class="spotify">
	<div class="container-1">
		<h2>Onlangs beluisterd</h2>
		<strong>Money Trees</strong>
		<span>Kendrick Lamar</span>
	</div>
	<div class="container-2">
		<img class="img-1" src="/img/album.png" alt="">
		<img  class="img-2" src="/img/record.png" alt="">
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
		right: 2rem;
		display: grid;
		place-items: center;
	}

	.img-1 {
		position: absolute;
		width: 60px;
		height: 60px;
		z-index: 1;
		border-radius: 50%;
	}

	.img-2 {
		position: absolute;
		width: 110px;
		height: 110px;
	}
</style>
