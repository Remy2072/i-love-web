<div class="container">
	<div class="title">
		<p class="emoji">🩷</p>
		<h1>Vasilis van Gemert</h1>
		<small>Sprint 13</small>
	</div>

	<h2 class="inhoud">We 🩷 Web met Vasilis van Gemert</h2>

	<h3>Toegankelijkheid, creativiteit en klokken</h3>
	<ul>
		<li>Van kunstenaar naar developer, want kunst is duur.</li>
	</ul>

	<h3>Het nut van onzin:</h3>
	<a href="https://lovenonsense.com">Lovenonsense</a>

	<h3>Waarom het web zo geweldig is:</h3>
	<ul>
		<li>Dingen omdraaien</li>
		<li>Klokken</li>
		<li>Leuke dingen maken met CSS, zelfs binnen serieuze websites en projecten.</li>
	</ul>

	<h3>Klok van foto’s:</h3>
	<ul>
		<li>Hoe maak je deze toegankelijk?</li>
		<li>Elke foto krijgt een tijdsomschrijving voor screen readers.</li>
	</ul>

	<p>100% toegankelijkheid in theorie vs. praktijk: Een vergelijking met het nieuwe HvA-gebouw.</p>

	<h3>Toegankelijkheid hoeft niet saai te zijn!</h3>

	<p>
		Verhaal over een fotograaf-vriend die blind werd en nu audioprojecten maakt. Websites zijn vaak
		verschrikkelijk met een screenreader.
	</p>

	<h3>Aanbevelingen:</h3>
	<ul>
		<li>Toegankelijkheid zorgt ervoor dat iedereen gebruik kan maken van dingen.</li>
		<li>
			Ga verder dan de standaard richtlijnen. Denk echt na over hoe mensen met beperkingen je
			website kunnen gebruiken.
		</li>
		<li>Screen readers lezen alles voor, dus maak het wat levendiger en interessanter.</li>
	</ul>

	<a href="https://vasilis.nl/">Portfolio</a>
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
