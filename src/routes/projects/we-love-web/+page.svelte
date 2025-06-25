<div class="container">
	<div class="title">
		<p class="emoji">❤️</p>
		<h1>We Love Wev</h1>
		<small>FDND</small>
	</div>
	<img src="/img/weloveweb.png" alt="Screenshot van We Love Web pagina" />
	<h3>Bekjik hier</h3>
	<a href="https://github.com/Remy2072/we-love-web" target="_blank">Github</a>
	<a href="https://remy-we-love-web.vercel.app" target="_blank">Live omgeving</a>
	<h3>Tech-stack</h3>
	<ul class="tech-stack">
		<li class="tech-stack-list svelteKit">SvelteKit</li>
		<li class="tech-stack-list html">HTML</li>
		<li class="tech-stack-list css">CSS</li>
		<li class="tech-stack-list js">JavaScript</li>
		<li class="tech-stack-list node">Node</li>
		<li class="tech-stack-list figma">Figma</li>
	</ul>
	<h3>Het project</h3>
	<p>
		De We Love Web pagina is een project dat ik heb ontwikkeld tijdens mijn opleiding Front-end
		Design & Development. Het doel van dit project was om een overzichtspagina te maken waarop alle
		aankomende en afgelopen colleges zichtbaar zijn vergelijkbaar met een agenda. Het project
		bestond uit drie pagina’s: een main page, een detailpagina en een archiefpagina. Ons
		oorspronkelijke ontwerp werd echter afgekeurd omdat het niet volledig aansloot bij de stijlguide
		van de opleiding. Daarom hebben we het aangepast naar een meer basic, gestroomlijnd design. De
		applicatie is gebouwd met SvelteKit en maakt gebruik van Directus om de data dynamisch op te
		halen. De pagina is volledig responsive en werkt soepel op zowel desktop als mobiele apparaten.
	</p>
	<h3>Ons design</h3>
	<p>
		Dit was het orginele design die ik had ontworpen met mijn teamgenoot voor de We Love Web pagina.
	</p>
	<img src="/img/welovewebdesign.png" alt="Screenshot van We Love Web pagina" />
</div>

<style>
	.tech-stack {
		margin-top: 0.5rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		align-items: center;
		list-style: none;
		padding: 0;
	}

	.tech-stack-list {
		font-size: 1rem;
		border-radius: 10rem;
		padding: 0.1rem 1rem;
		font-size: 1.25rem;
		margin-bottom: 0;
	}

	.html {
		background-color: #f16f4d;
		color: #ffffff;
	}

	.css {
		background-color: #489bef;
		color: #ffffff;
	}

	.js {
		background-color: #fff68f;
		color: #333333;
	}

	.node {
		background-color: #67b26f;
		color: #ffffff;
	}

	.svelteKit {
		background-color: #ff6f43;
		color: #ffffff;
	}

	.figma {
		background-color: #f87655;
		color: #ffffff;
	}

	* {
		font-size: 1.125rem;
		line-height: 1.5;
	}

	.container {
		display: flex;
		align-items: left;
		flex-direction: column;
		justify-content: center;
		padding: 0 10%;
		margin-bottom: 12.5rem;
	}

	.emoji {
		margin-top: 3.125rem;
		font-size: 3.75rem;
		text-shadow: var(--box-shadow-emoji);
		cursor: pointer;
	}

	.emoji:hover {
		animation: 1s tilt-n-move-shaking linear infinite;
	}

	@keyframes tilt-n-move-shaking {
		0% {
			transform: translate(0, 0) rotate(0deg);
		}
		25% {
			transform: translate(5px, 5px) rotate(5deg);
		}
		50% {
			transform: translate(0, 0) rotate(0eg);
		}
		75% {
			transform: translate(-5px, 5px) rotate(-5deg);
		}
		100% {
			transform: translate(0, 0) rotate(0deg);
		}
	}

	.title {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	h1 {
		font-size: 2.188rem;
	}

	small {
		margin-top: 10px;
		font-size: 1.25rem;
		font-weight: 300;
	}

	h3 {
		margin-top: 1.25rem;
		font-size: 1.125rem;
		color: var(--slate-blue);
	}

	img {
		margin-top: 1.25rem;
		border-radius: 15px;
		border: 3px solid var(--dusty-lavender);
	}

	ul {
		list-style-type: revert;
		padding-left: 1.25rem;
	}
	ul li {
		margin-bottom: 0.5em;
	}

	a {
		color: var(--tropical-cyan);
		text-decoration: underline;
		margin: 0;
	}

	@media (min-width: 600px) {
		.container {
			padding: 0 20%;
		}
	}

	@media (min-width: 900px) {
		.container {
			padding: 0 30%;
		}

		h1 {
			font-size: 3.125rem;
		}

		.tech-stack {
			flex-wrap: nowrap;
		}
	}

	@media (min-width: 1300px) {
		.container {
			padding: 0 35%;
		}
	}
</style>
