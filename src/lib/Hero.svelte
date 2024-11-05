<article class="welcome">
	<div class="article-wrapper">
		<h1>Remy Duivesteijn</h1>
		<p>Learning journal <span>·</span> FDND</p>
	</div>
	<img src="/img/memoji.svg" alt="svg van zelfportret"/>
</article>
<div class="spotify"></div>

<style>
	.welcome {
		background: var(--gradient-hero);
		box-shadow: var(--box-shadow-card);
		border-radius: 1.25rem;
		width: 100%;
		position: relative;
		height: 8.75rem;
	}

	.article-wrapper {
		margin-top: 1.25rem;
		margin-left: 1.563rem;
	}

	h1 {
		font-size: 1.875rem;
		max-width: 50%;
	}

	p {
		margin-top: 5px;
		font-weight: var(--font-weight-regular);
		color: var(--dusty-lavender);
	}

	span {
		color: var(--tropical-cyan);
	}

	img {
		width: 170px;
		height: 169px;
		position: absolute;
		bottom: 0;
		right: -1rem;
	}

	.spotify {
		background-color: var(--pale-frost);
		border-radius: 1.25rem;
		box-shadow: var(--box-shadow-hero);
		width: 100%;
	}

	@media (min-width: 600px) {
		.welcome {
			height: 10rem;
		}

		.article-wrapper {
			margin-top: 1.875rem;
			margin-left: 2.813rem;
		}

		h1 {
			font-size: 2.5rem;
			max-width: 100%;
		}

		p {
			font-size: 1.25rem;
		}
	}

	@media (min-width: 1065px) {
		h1 {
			font-size: 3.125rem;
		}

		p {
			font-size: 1.563rem;
		}

		img {
			width: 208px;
			height: 207px;
			right: -1.2rem;
		}
	}
</style>