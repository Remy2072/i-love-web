<div class="container">
	<div class="title">
		<p class="emoji">🤯</p>
		<h1>Lose Your Head</h1>
		<small>Sprint 14</small>
	</div>
	<h2 class="inhoud">Inhoudsopgave</h2>
	<ul>
		<li><strong>Repositories</strong></li>
		<li>
			<strong>Week 1</strong>
			<ul>
				<li>Nieuw project</li>
			</ul>
		</li>
		<li>
			<strong>Week 2</strong>
			<ul>
				<li>Mentor dag week 1</li>
				<li>Structuur en werking overzicht</li>
				<li>10 Principles of good design</li>
				<li>Error page</li>
			</ul>
		</li>
		<li>
			<strong>Week 3</strong>
			<ul>
				<li>Waterval vs Agile</li>
				<li>FDND agile woordenlijst</li>
				<li>Layout</li>
				<li>Mentor dag week 2</li>
				<li>Database Readme</li>
			</ul>
		</li>
		<li>Frontend ontwikkelingen</li>
	</ul>
	<h2>Repositories</h2>
	<ul>
		<li><a href="https://github.com/Remy2072/fdnd">FDND We Love Web</a></li>
		<li><a href="https://github.com/Remy2072/i-love-web">i-love-web</a></li>
	</ul>
	<h2>Week 1 | 23 t/m 27 september</h2>
	<p style="margin-top: 1.25rem;">
		In deze sprint zijn we begonnen met Svelte, een component-based framework, en Svelte Kit, een
		app-framework dat server-side rendering (SSR) ondersteunt.
	</p>
	<h3>Nieuw project</h3>
	<p>
		Deze week kregen we een nieuwe opdracht van FDND: het ontwikkelen van een "We Love Web" website.
		Deze website geeft een overzicht van zowel aankomende als afgelopen We Love Web-sessies, bedoeld
		voor studenten en docenten. Samen met Jaymar ben ik aan deze opdracht begonnen. We startten met
		het opzetten van de basis van de site door een sitemap, datamodel en teamcanvas te maken. Dit is
		allemaal vastgelegd in ons projectboard, dat te vinden is via de volgende link: Project Board
		FDND We Love Web
	</p>
	<h2>Week 2 | 30 September t/m 4 oktober</h2>
	<h3>Mentor dag week 1</h3>
	<p>
		Tijdens deze week kregen de eerstejaars een college over het grid-systeem. In groepjes werkten
		ze aan verschillende lay-outs, waarbij ik mijn groepje hielp wanneer ze vastliepen.
	</p>
	<h3>Structuur en werking overzicht</h3>
	<p>In week 2 werd de structuur en werking van het project verduidelijkt:</p>
	<h3>3. Structuur</h3>
	<ul>
		<li>De code bevindt zich in de <code>src</code> map.</li>
		<li>
			<code>/routes</code> bevat zowel dynamische als statische pagina’s. Server-side code hoort in
			<code>src/lib/server/</code>.
		</li>
		<li>De <code>static</code> map bevat onder andere PDF's en globale CSS.</li>
	</ul>
	<h3>2. Routing</h3>
	<ul>
		<li>Standaard routing-methodes voor dynamische en statische routes worden toegepast.</li>
	</ul>
	<h3>3. Error Handling</h3>
	<ul>
		<li>
			Foutpagina's worden gemaakt via <code>/routes/+error.svelte</code> en
			<code>/routes/+layout.svelte</code>.
		</li>
	</ul>
	<h3>4. Data Laden</h3>
	<ul>
		<li>
			Data wordt opgehaald met <code>page.js</code> en <code>page.server.js</code>. Server-side
			functies zijn <code>async</code>.
		</li>
	</ul>
	<h3>5. Binding</h3>
	<ul>
		<li>Variabelen worden aan elementen gebonden met <code>bind:value=var</code>.</li>
	</ul>
	<h3>6. Library</h3>
	<ul>
		<li>Componenten worden geïmporteerd uit <code>src/lib</code> via <code>$lib</code>.</li>
	</ul>
	<h3>7. Components</h3>
	<ul>
		<li>Je kunt variabelen exporteren binnen componenten met <code>export let variabele</code>.</li>
	</ul>
	<h3>10 Principles of Good Design</h3>
	<p>Hierbij een samenvatting van de 10 principes van goed design:</p>
	<ul>
		<li>Innovatief</li>
		<li>Bruikbaar</li>
		<li>Esthetisch</li>
		<li>Begrijpelijk</li>
		<li>Onopvallend</li>
		<li>Eerlijk</li>
		<li>Duurzaam</li>
		<li>Grondig tot in de details</li>
		<li>Milieuvriendelijk</li>
		<li>Zo minimaal mogelijk</li>
	</ul>
	<h3>Error page</h3>
	<p>
		Op basis van Justus' presentatie heb ik een error-pagina gemaakt die gebruik maakt van
		`$page.status` om de foutstatus weer te geven:
	</p>
	<h2>Week 3 | 7 t/m 11 oktober</h2>
	<h3>Waterval vs Agile</h3>
	<ul>
		<li>Waterval: Hierbij worden alle specificaties van tevoren vastgelegd.</li>
		<li>
			Agile: Flexibel en iteratief werken, waarbij aanpassingen mogelijk zijn gedurende het project.
		</li>
	</ul>
	<h3>FDND agile woordenlijst</h3>
	<ul>
		<li>
			<strong>Agile Development:</strong> Een iteratieve benadering van softwareontwikkeling waarbij
			teams in korte sprints werken om flexibel in te spelen op veranderingen.
		</li>
		<li>
			<strong>Backlog:</strong> Een prioriteitenlijst met taken, functionaliteiten of vereisten die moeten
			worden uitgevoerd of geïmplementeerd.
		</li>
		<li>
			<strong>Business owner:</strong> De persoon die de zakelijke belangen van een project vertegenwoordigt,
			vaak verantwoordelijk voor het uiteindelijke resultaat.
		</li>
		<li>
			<strong>Continuous Integration:</strong> Een software ontwikkel praktijk waarbij ontwikkelaars
			regelmatig nieuwe code integreren in de hoofdtak van de broncode, met automatische tests om fouten
			te ontdekken.
		</li>
		<li>
			<strong>Daily Scrum:</strong> Een korte dagelijkse bijeenkomst waarin teamleden hun voortgang bespreken
			en obstakels delen.
		</li>
		<li>
			<strong>Definition of done:</strong> De criteria waaraan een taak of user story moet voldoen om
			als volledig afgerond te worden beschouwd.
		</li>
		<li>
			<strong>Epic:</strong> Een grote user story die kan worden opgedeeld in kleinere, beter beheersbare
			user stories of taken.
		</li>
		<li>
			<strong>Feature:</strong> Een functionele eigenschap of mogelijkheid van een product of systeem.
		</li>
		<li>
			<strong>Iteration:</strong> Een enkele cyclus van een herhalend proces, vaak een korte periode
			waarin een team bepaalde doelen probeert te bereiken.
		</li>
		<li>
			<strong>Minimal viable product:</strong> De meest eenvoudige versie van een product die nog steeds
			waarde biedt aan de gebruikers, vaak gebruikt om snel feedback te verzamelen.
		</li>
		<li>
			<strong>MoSCoW:</strong> Een prioriteringstechniek die taken indeelt in Must haves, Should haves,
			Could haves en Won’t haves (voor nu).
		</li>
		<li>
			<strong>Optimum viable product:</strong> Het product met de optimale balans tussen functies en
			waarde voor gebruikers, een stap verder dan een minimal viable product.
		</li>
		<li>
			<strong>Planning poker:</strong> Een techniek voor het inschatten van de omvang van taken of user
			stories, waarbij teamleden cijfers toewijzen aan de moeilijkheidsgraad.
		</li>
		<li>
			<strong>Product owner:</strong> De rol binnen een scrum-team die verantwoordelijk is voor het maximaliseren
			van de waarde van het product door het beheren van de product backlog.
		</li>
		<li>
			<strong>Refactoring:</strong> Het herschrijven van bestaande code zonder de externe functionaliteit
			te wijzigen, om de leesbaarheid en onderhoudbaarheid te verbeteren.
		</li>
		<li>
			<strong>Release:</strong> De uitgave van een nieuwe versie van een product aan gebruikers of klanten.
		</li>
		<li>
			<strong>Retrospective:</strong> Een bijeenkomst aan het einde van een sprint waarin het team bespreekt
			wat goed ging, wat beter kan, en hoe ze hun processen kunnen verbeteren.
		</li>
		<li>
			<strong>Scrum:</strong> Een framework voor agile projectmanagement waarbij teams werken in iteratieve
			cycli, of sprints.
		</li>
		<li>
			<strong>Scrum master:</strong> De facilitator van een scrum-team die verantwoordelijk is voor het
			waarborgen van de juiste uitvoering van scrum-principes.
		</li>
		<li>
			<strong>Scrum team:</strong> Een cross-functioneel team dat gezamenlijk verantwoordelijk is voor
			het opleveren van incrementele waarde in een project.
		</li>
		<li>
			<strong>Sprint:</strong> Een afgebakende werkperiode (meestal 1-4 weken) waarin een scrum-team
			aan een vooraf vastgesteld doel werkt.
		</li>
		<li>
			<strong>Sprint goal:</strong> Het specifieke doel dat het team binnen een sprint probeert te bereiken.
		</li>
		<li>
			<strong>Sprint planning:</strong> Een bijeenkomst aan het begin van een sprint waarin het team
			de taken en doelen voor de sprint vastlegt.
		</li>
		<li>
			<strong>Sprint review:</strong> Een bijeenkomst aan het einde van een sprint waarin het opgeleverde
			werk wordt gedemonstreerd aan de stakeholders.
		</li>
		<li>
			<strong>Stand-up:</strong> Een korte dagelijkse bijeenkomst waarin teamleden hun voortgang en eventuele
			obstakels delen.
		</li>
		<li>
			<strong>Stakeholders:</strong> Personen of groepen die belang hebben bij het succes van een project,
			zoals klanten, managers of eindgebruikers.
		</li>
		<li>
			<strong>Task:</strong> Een specifieke, vaak kleine eenheid van werk die moet worden uitgevoerd
			binnen een project.
		</li>
		<li>
			<strong>Task board:</strong> Een visueel hulpmiddel dat de voortgang van taken binnen een project
			toont, vaak in de vorm van een kanban-bord.
		</li>
		<li>
			<strong>Task points:</strong> Een maatstaf om de moeilijkheidsgraad of inspanning van taken te
			schatten.
		</li>
		<li>
			<strong>Velocity:</strong> De snelheid waarmee een team werk kan afronden, vaak gemeten in het
			aantal afgewerkte user stories of taakpunten per sprint.
		</li>
	</ul>
	<h3>Layout</h3>
	<p>
		Met behulp van Justus en Dorien heb ik meer geleerd over het gebruik van layouts in onze
		projecten. Door gebruik te maken van `slot`, kan specifieke content geladen worden, terwijl de
		navigatie en footer consistent blijven op alle pagina's.
	</p>
	<h3>Mentor dag week 2</h3>
	<p>Tijdens deze week heb ik verschillende studenten begeleid:</p>
	<ul>
		<li>
			<strong>Süleyman en Kerem:</strong> Tips gegeven voor het schrijven van een gestructureerde README.
		</li>
		<li>
			<strong>Mikiyas:</strong> Advies gegeven over wat hij moest afronden voor de sprint review en feedback
			op zijn code.
		</li>
		<li><strong>Luuk:</strong> Uitleg gegeven over het maken van een inhoudsopgave in Markdown.</li>
		<li>
			<strong>Arman:</strong> Zijn README nagekeken en geadviseerd om een live link en installatie-instructies
			toe te voegen.
		</li>
	</ul>
	<h3>Database</h3>
	<p>
		Samen met Justus heb ik een database opgezet voor de "We Love Web"-presentaties. Ik heb een
		datamodel opgesteld dat alle benodigde velden bevat voor een presentatie. Een voorbeeld van een
		database-item:
	</p>
	<h3>Readme</h3>
	<p>
		Een duidelijke README is van groot belang om toekomstige developers en potentiële sponsoren een
		goed inzicht te geven in het project. Hier is een voorbeeld van mijn README voor FDND: README.md
	</p>
	<h3>Frontend ontwikkelingen</h3>
	<p>Dit zijn de websites die ik gebruik om up to date te zijn met het web.</p>
	<ul>
		<li><a href="https://dev.to/">Dev.to</a></li>
		<li><a href="https://www.reddit.com/r/Frontend/?rdt=58073">Reddit</a></li>
		<li><a href="https://css-tricks.com/">CSS-tricks</a></li>
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
