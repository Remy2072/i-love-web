<div class="container">
	<div class="title">
		<p class="emoji">💁🏼‍♀️</p>
		<h1>User Needs</h1>
		<small>Sprint 17</small>
	</div>
	<h2 class="inhoud">Inhoudsopgave</h2>
	<ul>
		<li><strong>Repositories</strong></li>
		<li>
			<strong>Week 1</strong>
			<ul>
				<li>Compositie woordenlijst</li>
				<li>Visuele hierarchie</li>
			</ul>
		</li>
		<li>
			<strong>Week 2</strong>
			<ul>
				<li>View transitions</li>
				<li>Kleur modellen</li>
				<li>Design tips</li>
			</ul>
		</li>
		<li>
			<strong>Bronnen</strong>
		</li>
	</ul>
	<h2>Repositories</h2>
	<ul>
		<li><a href="https://github.com/Remy2072/user-needs">User Needs</a></li>
		<li><a href="https://github.com/Remy2072/i-love-web">i-love-web</a></li>
	</ul>
	<h2>Week 1 | 02 t/m 06 december</h2>
	<p style="margin-top: 1.25rem;">
		Deze sprint richten we ons op creative coding. <strong>Coding Spike:</strong> Experimenteer met leuke,
		speelse code die niet per se functioneel hoeft te zijn.
	</p>

	<h3>Compositie woordenlijst</h3>
	<ul>
		<li>Flow</li>
		<li>Visuele hiërarchie</li>
		<li>Animatie</li>
		<li>Visual weight</li>
		<li>Visual direction</li>
		<li>Dominance</li>
		<li>Focal point</li>
		<li>Composition</li>
		<li>Reading patterns</li>
		<li>Symmetrisch</li>
		<li>Asymmetrisch</li>
		<li>Radiaal</li>
		<li>Mozaïek</li>
		<li>Storytelling</li>
		<li>Scrolly telling</li>
	</ul>

	<h3>Visuele hierarchie</h3>
	<ul>
		<li>Grootte</li>
		<li>Positie op scherm</li>
		<li>Witruimte</li>
		<li>Kleur en contrast</li>
		<li>Animatie</li>
	</ul>

	<h2>Week 2 | 09 t/m 13 december</h2>

	<h3>View transitions</h3>
	<p>
		De View Transitions API maakt het makkelijk om animaties toe te voegen als je schakelt tussen
		verschillende weergaven op een website. Dit werkt zowel binnen een single-page applicatie (SPA)
		als bij het navigeren tussen pagina’s in een multi-page applicatie (MPA).
	</p>

	<h3>Wat is het en waarom gebruiken?</h3>
	<p>
		Viewtransities zijn ideaal om gebruikers een soepelere ervaring te geven. Ze zorgen ervoor dat
		je in de flow blijft, minder moeite hoeft te doen om te begrijpen wat er gebeurt, en het voelt
		alsof alles sneller laadt.
	</p>
	<a
		style="margin-top: 1rem;"
		href="https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API"
		>MDN View Transitions</a
	>

	<h3>Kleur modellen</h3>
	<ul>
		<li><strong>RGB</strong>: Red, Green, Blue</li>
		<li><strong>RGBA</strong>: Red, Green, Blue, Alpha</li>
		<li><strong>CMYK</strong>: Cyan, Magenta, Yellow, Black</li>
		<li><strong>HSL</strong>: Hue, Saturation, Lightness</li>
		<li><strong>HWB</strong>: Hue, Whiteness, Blackness</li>
		<li><strong>LAB</strong>: Lightness, Green to Red, Blue to Yellow</li>
		<li><strong>LCH</strong>: Lightness, Chroma, Hue</li>
		<li><strong>Display-P3</strong>: (?)</li>
	</ul>

	<p>
		Dit zijn een paar van de meest voorkomende kleuren modellen die gebruikt worden in moderne
		vormgeving. Kleuren paletten kan je handig maken met hsl, omdat je van dezelfde kleur meerdere
		varianten kan maken die bij elkaar passen.
	</p>

	<p style="margin-top: 1rem;">
		In een kleurenpalet, kan je ervoor kiezen om de kleuren te verdelen in 3 categorieën.
	</p>

	<ul>
		<li>Primaire</li>
		<li>Accenten</li>
		<li>Neutralen</li>
	</ul>

	<p style="margin-top: 1rem;">
		Tegenwoordig hoef je in css geen rgba meer te gebruiken maar rgb, verder kun je coma’s vergeten
		en gewoon spaties gebruiken. De opacity schrijf je tegenwoordig ook met een / en procenten.
	</p>

	<h3>Nieuw</h3>
	<p>rgb( 255 255 255 / 50%)</p>

	<h3>Legacy</h3>
	<p>rgba( 255, 255, 255, 0.5)</p>

	<h3>Design tips</h3>
	<ul>
		<li>
			Als je gradients gebruikt, is het handig om met <strong>LAB</strong> te werken, omdat LAB meer
			kleurondersteuning biedt in gradients. Hierdoor springen de kleuren er nog meer uit.
		</li>
		<li>Je ontwerp heeft altijd <strong>wit</strong> nodig.</li>
		<li>
			Als je een lichte achtergrond hebt, gebruik dan donkere kleuren op de voorgrond voor een goed
			contrast.
		</li>
		<li>
			Als je een donkere achtergrond hebt, gebruik dan lichte kleuren op de voorgrond voor een goed
			contrast en maak de <strong>line height</strong> wat breder, omdat het dan makkelijker te lezen
			is.
		</li>
		<li>
			Bij het gebruiken van grafieken is het beter om de <strong>saturation</strong> en
			<strong>lightness</strong>
			te veranderen dan de <strong>hue</strong> voor toegankelijkheid.
		</li>
		<li>
			<strong>WCAG3</strong> is bezig met een nieuw contrast systeem genaamd
			<strong
				><a href="https://typefully.com/DanHollick/wcag-3-and-apca-sle13GMW2Brp">APCA</a></strong
			>, dat ervoor moet zorgen dat mensen nog beter een contrastverschil kunnen berekenen.
		</li>
	</ul>

	<h3>Bronnen</h3>
	<ul>
		<li>
			<a href="https://css-tricks.com/basics-css-blend-modes/" target="_blank"
				>Basics of CSS Blend Modes</a
			>
		</li>
		<li><a href="https://css-tricks.com/grainy-gradients/" target="_blank">Grainy Gradients</a></li>
		<li>
			<a
				href="https://css-tricks.com/the-state-of-changing-gradients-with-css-transitions-and-animations/"
				target="_blank">The State of Changing Gradients with CSS Transitions and Animations</a
			>
		</li>
		<li>
			<a
				href="https://frontendmasters.com/blog/split-effects-with-no-content-duplication/"
				target="_blank">Split Effects with No Content Duplication</a
			>.
		</li>
		<li>
			<a
				href="https://tympanus.net/codrops/2021/12/07/coloring-with-code-a-programmatic-approach-to-design/"
				target="_blank">Coloring with Code: A Programmatic Approach to Design</a
			>
		</li>
	</ul>
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
	ul li ul {
		margin-left: 1.25rem;
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
