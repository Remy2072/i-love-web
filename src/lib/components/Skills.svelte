<div class="skills">
	<div class="heading">
		<h3>Tools en programmeertalen<br />waar ik mee werk..</h3>
	</div>

	<div class="stacked-cards">
		<div class="tool-card card-1">
			<img src="../../img/sveltekit.svg" alt="Sveltekit logo" />
		</div>
		<div class="tool-card card-2">
			<img src="../../img/adobe.svg" alt="Adobe logo" />
		</div>
		<div class="tool-card card-3">
			<img src="../../img/figma.svg" alt="Figma logo" />
		</div>
		<div class="tool-card card-4">
			<img src="" alt="" />
		</div>
	</div>
</div>

<style>
	.skills {
		background-color: var(--pale-frost);
		border-radius: 1.25rem;
		box-shadow: var(--box-shadow-card);
		width: 100%;
		padding: 20px;
		position: relative;
		overflow: hidden;
		height: 300px;
	}

	@media (min-width: 900px) {
		.skills {
			height: auto;
		}
	}

	.heading {
		display: grid;
		place-items: center;
		text-align: center;
		padding: 30px 30px;
	}

	.heading h3 {
		font-size: 18px;
		color: rgba(110, 110, 132, 0.4);
	}

	.stacked-cards {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.tool-card {
		background: linear-gradient(120deg, hsla(192, 16%, 94%, 1) 0%, hsla(0, 0%, 100%, 1) 100%);
		border-radius: 10px;
		width: 120px;
		height: 115px;
		position: absolute;
		box-shadow: var(--box-shadow-card);

		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.tool-card img {
		display: grid;
		place-items: center;
	}

	.card-1 {
		transform: rotate(3deg) translateX(0px) translateY(-35px);
		z-index: 4;
	}
	.card-2 {
		transform: rotate(-12deg) translateX(-60px) translateY(-57px);
		z-index: 3;
	}
	.card-3 {
		transform: rotate(15deg) translateX(35px) translateY(-85px);
		z-index: 2;
	}
	.card-4 {
		transform: rotate(-15deg) translateX(0px) translateY(-80px);
		z-index: 1;
	}
</style>
