<div class="container">
	<div class="title">
		<p class="emoji">🧡</p>
		<h1>Dion Pieters</h1>
		<small>Sprint 15</small>
	</div>

	<h2 class="inhoud">We 🧡 Web met Dion Pieters</h2>

	<h3>Van concept tot creatie: de kunst van ontwikkeling</h3>
	<ul>
		<li>Dion Pieters is co-docent voor eerstejaars FDND.</li>
		<li>
			Hij is zowel developer als designer en heeft ervaring opgedaan bij Build in Amsterdam en
			Active Theory.
		</li>
	</ul>

	<h3>Is je eigen portfolio het lastigste project dat je ooit zult opleveren?</h3>
	<ul>
		<li>Jij bent je eigen klant.</li>
		<li>Wie gaat jouw portfolio ontwerpen? Jijzelf?</li>
		<li>Heb je nog een oud portfolio liggen?</li>
		<li>Voor wie maak je het portfolio?</li>
		<li>Wat wil je laten zien?</li>
		<li>Hoeveel tijd ga je eraan besteden?</li>
		<li>Waarvoor heb je het nodig?</li>
	</ul>

	<h3>Design en Development:</h3>
	<ul>
		<li>Moet een developer kunnen designen? En moet een designer kunnen ontwikkelen?</li>
		<li>
			Voorbeeld: het Sydney Opera House. De architect ontwierp een spectaculair gebouw zonder zich
			te laten beperken door constructiekennis.
		</li>
	</ul>

	<h3>Inspiratie:</h3>
	<ul>
		<li>Kijk naar voorbeelden die je zelf gaaf of inspirerend vindt.</li>
	</ul>

	<h3>Kernwaarden:</h3>
	<ul>
		<li>Wat wil je uitstralen? Bijvoorbeeld speels, minimalistisch, etc.</li>
	</ul>

	<h3>Doel:</h3>
	<ul>
		<li>Wat wil je bereiken met je portfolio? Groei, een showcase, een creatieve speeltuin?</li>
		<li>
			Daarna volgen de eerste stappen in Figma: een goed uitgewerkt concept, maar nog plat.
			Verschillende ideeën uitproberen.
		</li>
	</ul>

	<p>
		Dion werkte samen met twee verschillende designers om tot de uiteindelijke versie te komen. Moet
		elk element op je site een animatie hebben?
	</p>

	<a style="margin-top: 10px;" href="https://www.dionpieters.dev" target="_blank">Portfolio</a>
</div>

<style>
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

	h2 {
		margin-top: 1.875rem;
		font-size: 1.563rem;
	}

	.inhoud {
		margin-top: 4.688rem;
	}

	h3 {
		margin-top: 1.25rem;
		font-size: 1.125rem;
		color: var(--slate-blue);
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

		h2 {
			font-size: 1.563rem;
		}
	}

	@media (min-width: 1300px) {
		.container {
			padding: 0 35%;
		}
	}
</style>
