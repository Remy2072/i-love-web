<div class="container">
	<div class="title">
		<p class="emoji">🍾</p>
		<h1>Release Candidate</h1>
		<small>Sprint 18</small>
	</div>

	<h2 class="inhoud">Inhoudsopgave</h2>
	<ul>
		<li><strong>Repositories</strong></li>
		<li>
			<strong>Week 1</strong>
			<ul>
				<li>Software Release Life Cycle (SRLC)</li>
				<li>Geen TLA's meer!</li>
				<li>GSAB</li>
			</ul>
		</li>
		<li>
			<strong>Week 2</strong>
			<ul>
				<li>Clean code</li>
				<li>Refactoring</li>
			</ul>
		</li>
		<li>
			<strong>Week 3</strong>
			<ul>
				<li>Three.js</li>
				<li>Van offerte naar productie</li>
			</ul>
		</li>
		<li><strong>Bronnen</strong></li>
	</ul>
	<h2>Repositories</h2>
	<ul>
		<li><a href="https://github.com/fdnd-agency/fdnd" target="_blank">Release Candidate</a></li>
		<li><a href="https://github.com/Remy2072/i-love-web" target="_blank">i-love-web</a></li>
	</ul>

	<h2>Week 1 | 06 t/m 10 januari</h2>
	<p style="margin-top: 1.25rem;">
		Dit is de laatste sprint waarin we les krijgen op school. De komende colleges mochten we zelf
		invullen met onderwerpen waar we graag meer over wilden leren.
	</p>

	<h3>Software Release Life Cycle (SRLC)</h3>
	<p>
		De Software Release Life Cycle beschrijft het proces van het ontwikkelen, testen en distribueren
		van software. Dit proces bestaat doorgaans uit de volgende fases:
	</p>
	<ul style="margin-top: 1.25rem;">
		<li>
			<strong>Pre-alpha:</strong>
			In deze fase wordt de software ontworpen en gebouwd. Dit is een vroege ontwikkelingsfase waarin
			nog geen uitgebreide tests worden uitgevoerd.
		</li>

		<li>
			<strong>Alpha:</strong>
			De eerste fase van formele tests. Hier wordt de software intern getest binnen de organisatie. Het
			doel is om initiële fouten op te sporen.
		</li>

		<li>
			<strong>Beta:</strong>
			Een grotere gebruikersgroep buiten de organisatie test de software. De focus ligt op het verzamelen
			van gebruikersfeedback en het minimaliseren van gebruiksproblemen.
		</li>

		<li>
			<strong>Release Candidate (RC):</strong>
			Ook wel "gamma testing" of "going silver" genoemd. Dit is een versie die bijna klaar is voor release,
			tenzij ernstige bugs worden ontdekt. Alle functies zijn geïmplementeerd en getest.
		</li>

		<li>
			<strong>Final Release ("Gold"):</strong>
			De uiteindelijke versie van de software die publiek beschikbaar wordt gemaakt.
		</li>
	</ul>

	<h3>Code-Complete:</h3>
	<p>
		Wanneer een release als code-complete wordt beschouwd, betekent dit dat er geen nieuwe broncode
		meer wordt toegevoegd. Er kunnen nog wel bugfixes en updates voor documentatie worden
		doorgevoerd.
	</p>

	<h3>Geen TLA's meer!</h3>
	<p>Hieronder een overzicht van enkele belangrijke termen:</p>
	<ul style="margin-top: 1.25rem;">
		<li>
			<strong>CSR (Client-Side Rendering):</strong> De browser laadt een leeg HTML-bestand en gebruikt
			JavaScript (JS) en CSS om verbinding te maken met de backend. Daarna wordt de pagina gerenderd.
		</li>
		<li>
			<strong>SSR (Server-Side Rendering):</strong> Bij elke aanvraag wordt de HTML op de server gerenderd
			en als complete pagina naar de browser gestuurd.
		</li>
		<li>
			<strong>SSG (Static Site Generation):</strong> Tijdens het buildproces worden alle mogelijke pagina's
			vooraf gerenderd. Het resultaat is een statische website die eenvoudig te hosten is.
		</li>
		<li>
			<strong>ISR (Incremental Static Regeneration):</strong> Een variant van SSG waarbij de build periodiek
			wordt uitgevoerd. Alleen pagina's met gewijzigde content worden opnieuw gerenderd.
		</li>
		<li>
			<strong>CDN (Content Delivery Network):</strong> Een netwerk van servers die statische bestanden
			snel en efficiënt naar gebruikers verspreiden.
		</li>
		<li>
			<strong>CI (Continuous Integration):</strong> Een ontwikkelpraktijk waarbij codewijzigingen automatisch
			worden getest en geïntegreerd in de hoofdcodebase.
		</li>
	</ul>

	<h3>GSAP</h3>
	<p>
		GSAP is een krachtige en flexibele JavaScript-bibliotheek die speciaal is ontworpen voor het
		maken van animaties op het web. Het wordt beschouwd als een industriestandaard voor webanimaties
		vanwege de hoge prestaties en veelzijdigheid.
	</p>

	<h3>Belangrijkste kenmerken van GSAP:</h3>
	<ul>
		<li>
			<strong>Hoge performance:</strong> GSAP biedt vloeiende animaties, zelfs op apparaten met lagere
			specificaties, en is geoptimaliseerd voor moderne browsers.
		</li>
		<li>
			<strong>Efficiënt gebruik van CSS:</strong> Waar mogelijk maakt GSAP gebruik van CSS-transformaties
			(zoals transform en opacity) om animaties efficiënter te maken.
		</li>
		<li>
			<strong>JavaScript voor meer controle:</strong> Wanneer iets niet mogelijk is met CSS alleen, schakelt
			GSAP over op JavaScript voor precieze controle en complexere animaties.
		</li>
		<li>
			<strong>Geoptimaliseerde prestaties:</strong> Alle animaties zijn uiterst geoptimaliseerd om soepel
			te werken, ongeacht de complexiteit van de animatie.
		</li>
	</ul>

	<h3>Waarom GSAB?</h3>
	<ul>
		<li>
			<strong>Hoge performance:</strong> GSAP biedt vloeiende animaties, zelfs op apparaten met lagere
			specificaties, en is geoptimaliseerd voor moderne browsers.
		</li>
		<li>
			<strong>Efficiënt gebruik van CSS:</strong> Waar mogelijk maakt GSAP gebruik van CSS-transformaties
			(zoals transform en opacity) om animaties efficiënter te maken.
		</li>
		<li>
			<strong>JavaScript voor meer controle:</strong> Wanneer iets niet mogelijk is met CSS alleen, schakelt
			GSAP over op JavaScript voor precieze controle en complexere animaties.
		</li>
		<li>
			<strong>Geoptimaliseerde prestaties:</strong> Alle animaties zijn uiterst geoptimaliseerd om soepel
			te werken, ongeacht de complexiteit van de animatie.
		</li>
		<li>
			<strong>Breed scala aan animaties:</strong> Het ondersteunt een breed scala aan animaties, van
			eenvoudige bewegingen tot geavanceerde tijdlijnen.
		</li>
		<li>
			<strong>Gemakkelijke integratie:</strong> Het kan gemakkelijk geïntegreerd worden met frameworks
			zoals React, Vue en Angular.
		</li>
		<li>
			<strong>Actieve community en documentatie:</strong> GSAP heeft een actieve community
		</li>
	</ul>

	<h2>Week 2 | 13 t/m 17 januari</h2>

	<h3>Clean Code</h3>
	<p>
		Het schrijven van clean code is een essentiële vaardigheid voor elke professional in
		softwareontwikkeling. Het stelt je in staat om code te creëren die niet alleen functioneel is,
		maar ook begrijpelijk en onderhoudbaar. Hieronder worden de belangrijkste principes en
		richtlijnen voor clean code uitgelegd.
	</p>

	<h3>Wat is Clean Code?</h3>
	<ul>
		Clean code is code die:
		<li style="margin-top: 1.25rem;">
			<strong>Gemakkelijk te begrijpen</strong> is door iedereen in het team.
		</li>
		<li>
			<strong>Leesbaar</strong>, <strong>aanpasbaar</strong>, <strong>uitbreidbaar</strong> en
			<strong>onderhoudbaar</strong> is.
		</li>
		<li>
			Kan worden gelezen en verbeterd door andere ontwikkelaars, ook als zij niet de oorspronkelijke
			auteurs zijn.
		</li>
	</ul>

	<h3>Tips voor Clean Code</h3>

	<h3>1. Gebruik duidelijke namen</h3>
	<ul>
		<li>Kies beschrijvende en betekenisvolle namen voor variabelen, functies en bestanden.</li>
		<li>
			Vermijd cryptische afkortingen of generieke namen zoals <code>a</code>, <code>x</code>,
			<code>data</code>, of <code>temp</code>.
		</li>
	</ul>

	<h3>2. Schrijf kleine functies</h3>
	<ul>
		<li>
			<strong>Houd functies klein:</strong> een functie zou slechts één verantwoordelijkheid moeten
			hebben (volg het <em>Single Responsibility Principle</em>).
		</li>
		<li>
			Minimaliseer het aantal parameters:
			<ul>
				<li>Voorkeur voor monadische functies (één parameter).</li>
				<li>Gebruik diadische functies (twee parameters) indien nodig.</li>
				<li>Vermijd triadische functies (drie parameters) of meer.</li>
			</ul>
		</li>
		<li>
			Vermijd side-effects: een functie moet alleen werken met de meegegeven parameters en een
			duidelijke output teruggeven.
		</li>
	</ul>

	<h3>3. Gebruik goed commentaar</h3>
	<ul>
		<li>
			<strong>Less is more:</strong> Schrijf code die zichzelf uitlegt, zodat weinig commentaar nodig
			is.
		</li>
		<li>Gebruik commentaar alleen als extra context noodzakelijk is.</li>
		<li>
			Verwijder uitgecommentarieerde code uit de codebase; gebruik versiebeheer (bijvoorbeeld Git)
			om eerdere versies te raadplegen.
		</li>
	</ul>

	<h3>4. Maak code leesbaar</h3>
	<ul>
		<li>Code wordt vaker gelezen dan geschreven. Zorg dat het intuïtief en helder is.</li>
		<li>Gebruik consistente stijl, inspringing, en witruimte.</li>
		<li>Volg de code-conventies binnen je team of organisatie.</li>
	</ul>

	<h3>5. Kleine opruimacties</h3>
	<p>
		Het verbeteren van code hoeft geen grote verandering te zijn. Kleine acties maken een verschil:
	</p>
	<ul>
		<li>Hernoem één variabele naar een duidelijkere naam.</li>
		<li>Splits een te grote functie op.</li>
		<li>Elimineer een kleine duplicatie.</li>
		<li>Maak samengestelde if-statements overzichtelijker.</li>
	</ul>

	<h3>Refactoring</h3>
	<p>
		Refactoring is het proces van het verbeteren van de structuur van code zonder het gedrag ervan
		te veranderen. Het doel is om de code:
	</p>
	<ul>
		<li><strong>Leesbaarder</strong>,</li>
		<li><strong>Eenvoudiger te begrijpen</strong>,</li>
		<li><strong>Makkelijker onderhoudbaar</strong>, en</li>
		<li><strong>Uitbreidbaar</strong> te maken.</li>
	</ul>

	<h3>Belangrijke Refactoring-patronen</h3>

	<h4>1. Hernoem functie declaratie</h4>
	<ul>
		<li>
			Verander de naam, parameters, of volgorde van parameters van een functie om deze beter te
			laten aansluiten bij de behoeften van de codebase.
		</li>
		<li>Dit verbetert de leesbaarheid, begrijpelijkheid en testbaarheid van de code.</li>
	</ul>

	<h4>2. Verwijder dode code</h4>
	<ul>
		<li>Identificeer en verwijder overbodige of ongebruikte functies, variabelen of klassen.</li>
		<li>
			Dit voorkomt dat ontwikkelaars worden afgeleid door irrelevante of verouderde onderdelen, en
			verbetert de onderhoudbaarheid van de codebase.
		</li>
	</ul>

	<h4>3. Verschuif statements</h4>
	<ul>
		<li>Plaats gerelateerde statements dichter bij elkaar.</li>
		<li>Verplaats irrelevante of afleidende stukken code naar een geschiktere locatie.</li>
		<li>
			Door statements logisch te ordenen wordt de structuur van methoden duidelijker, wat leidt tot
			beter begrip en eenvoudiger onderhoud.
		</li>
	</ul>

	<h3>Voorbeeld:</h3>
	<div class="code-block">
		// Voor refactoring<br />
		const pricePlan = retrievePricePlan();<br />
		const order = retrieveOrder();<br />
		let charge;<br />
		const chargePerUnit = pricePlan.unit;<br /><br />

		// Na refactoring<br />
		const pricePlan = retrievePricePlan();<br />
		const chargePerUnit = pricePlan.unit;<br />
		const order = retrieveOrder();<br />
		let charge;<br />
	</div>

	<h2>Week 3 | 20 t/m 24 januari</h2>

	<h3>Three.js</h3>
	<p>
		Three.js is een krachtige JavaScript-bibliotheek waarmee je 3D-graphics kunt maken in de
		browser. Hieronder vind je een overzicht van de belangrijkste concepten en basiselementen van
		Three.js.
	</p>

	<h3>Camera</h3>
	<p>
		De <strong>Camera</strong> bepaalt het perspectief van waaruit je de 3D-wereld bekijkt. Er zijn twee
		veelgebruikte cameratypes:
	</p>
	<ul>
		<li>
			<strong>Perspective Camera:</strong> Deze camera simuleert diepte zoals het menselijk oog dat doet.
			Perfect voor realistische 3D-scenes.
		</li>
		<li>
			<strong>Orthographic Camera:</strong> Deze camera heeft geen perspectivische vervorming, waardoor
			objecten dezelfde grootte blijven ongeacht hun afstand.
		</li>
	</ul>

	<h3>Render</h3>
	<p>
		De <strong>Renderer</strong> zorgt ervoor dat de 3D-scène daadwerkelijk wordt weergegeven in de
		browser. De meest gebruikte renderer in Three.js is de <strong>WebGLRenderer</strong>.
	</p>

	<h3>Belangrijke Componenten</h3>

	<ul>
		<li>
			<strong>Mesh</strong>: Een Mesh combineert geometrie (de vorm van een object) en materiaal
			(hoe het object eruitziet) om een renderbaar object te creëren.
		</li>
		<li>
			<strong>Light</strong>: Light (licht) is essentieel voor het bepalen van hoe objecten worden
			verlicht en weergegeven in de scène. Er zijn verschillende soorten lichten zoals Ambient
			Light, Point Light, en Directional Light.
		</li>
		<li>
			<strong>Shader</strong>: Een Shader is een stukje code dat bepaalt hoe pixels op het scherm
			worden weergegeven. Met shaders kun je aangepaste visuele effecten creëren.
		</li>
	</ul>

	<h3>Van offerte naar productie</h3>

	<h3>Timeline</h3>
	<p>Vraag, Gesprek, Offerte, Design, Development, Oplevering, SLA</p>

	<h3>Hoe kom je aan projecten?</h3>
	<p>Je hebt een netwerk nodig</p>
	<ul style="margin-top: 1.25rem;">
		<li>Klas genoten</li>
		<li>Collega’s op je werk</li>
		<li>Vrienden, familie en kennissen</li>
	</ul>

	<h3>Wat wil de opdrachtgever (echt)</h3>
	<ul>
		<li>Briefing</li>
		<li>Verwachtingen</li>
		<li>Wat kan jij, wat kan ik</li>
		<li>Nee zeggen, wil ik dit wel?</li>
	</ul>

	<h3>Vragen die je kan stellen aan de klant</h3>
	<ul>
		<li>Wat wil je met de site?</li>
		<li>Wat is het doel?</li>
		<li>Wil je informatie geven?</li>
		<li>Of producten verkopen?</li>
	</ul>
	<p>Past het binnen mijn kennis?</p>

	<h3>Wat staat er in een offerte</h3>
	<ul>
		<li>Wat ga je doen</li>
		<li>Begroting</li>
		<li>Planning en afspraken</li>
		<li>Algemene voorwaarden</li>
	</ul>
	<p>
		Bepaal je uurloon maar hou rekening met de sector. Voor culturele diensten vraag je vaak een
		lager uurloon dan voor een commeriecele dienst.
	</p>

	<h3>Van schets naar ontwerp</h3>
	<ul>
		<li>Grove schetsen</li>
		<li>Hi-Fi design</li>
		<li>Development</li>
		<li>Design changes on the way</li>
	</ul>

	<h3>Het bouwproces</h3>
	<ul>
		<li>Fundering datamodel</li>
		<li>Framework kiezen</li>
		<li>CMS uitkiezen</li>
		<li>
			Testen
			<ul>
				<li>HTML validator</li>
				<li>Lighthouse test</li>
			</ul>
		</li>
		<li>
			Acceptatie omgeving opzetten
			<ul>
				<li>Development omgeving (voor mij)</li>
				<li>Test server (voor mij en andere devs)</li>
				<li>Acceptatie omgeving (voor de klant)</li>
				<li>Productie omgeving (live voor iedereen)</li>
			</ul>
		</li>
	</ul>

	<h3>Afspraken over oplevering</h3>
	<ul>
		<li>Nooit vrijdag live gaan</li>
		<li>Garantie & bugs fixing</li>
		<li>
			Betalingsmethode
			<ul>
				<li>Voorschot van 40% achteraf 60%</li>
				<li>Alles achteraf</li>
			</ul>
		</li>
		<li>Factuur sturen</li>
	</ul>

	<p>Maak een uren overzicht voor jezelf en eventueel voor de klant.</p>
	<p style="margin-top: 1.25rem;">
		Altijd iets meer uren inschatten dan je nodig hebt voor marge en winst.
	</p>

	<h3>Service Level Agreement</h3>
	<p>Wat ga of kan je doen voor de klant na het project?</p>
	<ul>
		<li>Hosting & e-mail</li>
		<li>Vaste aantal uren per maand voor features & onderhoud</li>
		<li>
			<strong>Tarieven:</strong>
			<ul>
				<li>Vaak lager uurtarief omdat het een passieve inkomstenbron is</li>
				<li>Voor losse features en onderhoud: standaard uurtarief</li>
				<li>Voor maandelijkse features en onderhoud: lager uurtarief</li>
			</ul>
		</li>
	</ul>

	<h3>Bronnen</h3>
	<ul>
		<li>
			<a href="https://en.wikipedia.org/wiki/Software_release_life_cycle" target="_blank"
				>Software release life cycle
			</a>
		</li>
		<li>
			<a href="https://gsap.com" target="_blank">GSAB</a>
		</li>
		<li>
			<a href="https://threejs-journey.com/" target="_blank">Three.js journey</a>
		</li>
		<li>
			<a href="https://tympanus.net/codrops/" target="_blank">Cod Drops</a>
		</li>
		<li>
			<a href="https://thebookofshaders.com/" target="_blank">The Book of Shaders</a>
		</li>
	</ul>
</div>

<style>
	* {
		font-size: 1.125rem;
		line-height: 1.5;
	}

	.code-block {
		box-shadow: var(--box-shadow-hero);
		border-radius: 1.25rem;
		padding: 2.188rem;
		margin-top: 1.25rem;
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
