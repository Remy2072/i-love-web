<header class="profile-card">
	<h1>Hallo daar! 👋🏼</h1>
	<p>
		Ik ben <mark>Remy Duivesteijn,</mark> een creatieve frontend developer & designer uit
		<mark>Amsterdam.</mark>
		Ik heb een passie voor alles wat digitaal is. Ik ontwerp en bouw websites die niet alleen
		<mark>snel</mark>
		en
		<mark>gebruiksvriendelijk</mark>
		zijn, maar er ook nog eens strak uitzien ✨. Wil je meer weten over mij of mijn werk? Stuur me gerust
		een <mark>berichtje</mark> 💬.
	</p>

	<img src="/img/memoji.png" alt="Zelfportret van Remy Duivesteijn" />
</header>

<style>
	.profile-card {
		background: var(--gradient-hero);
		position: relative;
		color: #6e6e84bf;
		padding: 1.25rem;
		border-radius: 1.25rem;
		width: 100%;
		box-shadow: var(--box-shadow-card);
	}

	.profile-card h1 {
		color: #6e6e84;
		font-size: 1.5rem;
		font-weight: normal;
	}

	.profile-card p {
		margin-top: 10px;
		font-size: 1.2rem;
	}

	.profile-card mark {
		color: #1b9cb7;
		background: none;
	}

	.profile-card img {
		width: 100px;
		height: 99px;
		position: absolute;
		top: 0;
		transform: translateY(-52%);
		left: 66%;
	}
	@media (min-width: 900px) {
		.profile-card {
			display: flex;
			flex-direction: row;
			align-items: flex-start;
			justify-content: space-between;
			position: relative;
			padding: 2.813rem 12.5rem 2.813rem 2.813rem;
		}

		.profile-card h1 {
			position: absolute;
			top: 22px;
			right: 25px;
			margin: 0;
			font-size: 1rem;
		}

		.profile-card p {
			flex: 2;
			font-size: 1.2rem;
		}

		@media (min-width: 900px) {
			.profile-card img {
				position: absolute;
				width: 208px;
				height: 207px;
				top: auto;
				transform: none;
				bottom: 0;
				left: 66%;
			}
		}
	}
</style>
