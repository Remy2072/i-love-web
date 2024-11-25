<div class="container">
    <div class="title">
        <p class="emoji">🥷🏻</p>
        <h1>Your tribe for life</h1>
        <small>Sprint 13</small>
    </div>
    <h2 class="inhoud">Inhoudsopgave</h2>
    <ul>
        <li>Repositories</li>
        <li>
            Week 1
            <ul>
                <li>Leervragen</li>
                <li>Wat is Svelte en Svelte Kit</li>
                <li>Voordelen van Svelte ten opzichte van React</li>
                <li>Basisinstallatie van Svelte Kit</li>
                <li>Svelte-project opzetten voor de squad page</li>
                <li>Bestandtypen in Svelte Kit</li>
            </ul>
        </li>
        <li>
            Week 2
            <ul>
                <li>Figma workshop</li>
                <li>API-koppeling</li>
            </ul>
        </li>
        <li>
            Week 3
            <ul>
                <li>MoSCoW & Poker</li>
                <li>Van epics naar user stories en taken</li>
                <li>MoSCoW-methode</li>
                <li>Hoe lever je een project op?</li>
            </ul>
        </li>
    </ul>
    <h2>Repositories</h2>
    <ul>
        <li><a href="https://github.com/Remy2072/your-tribe-for-life-profile-card">Profile Card Repository</a></li>
        <li><a href="https://github.com/DamianR2004/your-tribe-for-life-squad-page">Squad Page Repository</a></li>
    </ul>
    <h2>Week 1 | 2 t/m 6 september</h2>
    <p style="margin-top: 1.25rem;">
        In deze sprint zijn we begonnen met Svelte, een component-based framework, en Svelte Kit, een
        app-framework dat server-side rendering (SSR) ondersteunt.
    </p>
    <h3>Leervragen</h3>
    <ul>
        <li>Hoe combineer ik gegevens uit een CMS met een framework?</li>
        <li>Hoe richt ik een project in met een framework?</li>
        <li>Hoe kies ik de juiste tools en frameworks voor een project?</li>
        <li>Wat is de beste manier om mijn learning journal op te zetten?</li>
    </ul>
    <h3>Wat is Svelte en Svelte Kit?</h3>
    <p>
        Svelte is een JavaScript-framework dat zich onderscheidt door de manier waarop het je code
        compileert. In plaats van zware runtime libraries, compileert Svelte de code direct naar
        efficiënte, snelle JavaScript dat meteen in de browser draait. Het is dus lichter en sneller dan
        veel andere frameworks. Svelte Kit is een uitbreiding van Svelte waarmee je complete web-apps
        kunt bouwen. Het biedt handige tools voor routing, server-side rendering, API’s en meer,
        waardoor je in korte tijd een volwaardige app kunt ontwikkelen.
    </p>
    <h3>Voordelen van Svelte ten opzichte van React</h3>
    <ul>
        <li>
            Geen runtime overhead: Svelte compileert direct naar JavaScript, dus geen extra runtime nodig.
        </li>
        <li>
            Snellere prestaties: Door minder runtime-code presteren Svelte-apps beter en zijn ze kleiner
            in bestandsgrootte.
        </li>
        <li>
            Minder boilerplate: De syntax van Svelte is eenvoudiger en vereist minder code dan React voor
            dezelfde functionaliteit.
        </li>
    </ul>
    <h3>Basisinstallatie van Svelte Kit</h3>
    <ul>
        <li>Installeer Node.js.</li>
        <li>Creëer een nieuw project met <code>npm create svelte@latest</code>.</li>
        <li>Kies een projecttemplate.</li>
        <li>Installeer dependencies met <code>npm install</code>.</li>
        <li>Start het project met <code>npm run dev -- --open</code>.</li>
    </ul>
    <h3>Svelte-project opzetten voor de squad Page</h3>
    <p>
        Met behulp van de bovenstaande stappen heb ik een Svelte-project opgezet voor onze squad page.
        Ik heb de database van Directus gekoppeld via een fetch-json.js bestand in de lib-map, dat de
        gegevens ophaalt. Vervolgens heb ik een +page.server.js bestand gemaakt voor het renderen van
        data via een API-link.
    </p>
    <h3>Bestandstypen in Svelte Kit</h3>
    <ul>
        <li>
            <code>+page.svelte</code>: Hier schrijf je HTML, CSS en JavaScript voor een specifieke pagina.
            Svelte genereert automatisch classes, dus je hoeft je geen zorgen te maken dat stijlen
            overlappen tussen pagina’s.
        </li>
        <li>
            <code>+layout.svelte</code>: Code die voor alle child routes geldt, zet je hier, zoals een
            algemene header.
        </li>
        <li><code>+page.server.js</code>: Server-side JavaScript voor de specifieke pagina.</li>
        <li><code>+layout.server.js</code>: Server-side code voor alle child routes.</li>
        <li>
            <code>+server.js</code>: Hierin kun je API-routes definiëren, zoals GET en POST-methodes.
        </li>
    </ul>
    <h2>Week 2 | 9 t/m 13 september</h2>
    <h3>Figma workshop</h3>
    <p>
        In deze workshop kregen we de basis uitgelegd van Figma en enkele handige sneltoetsen om sneller
        te werken. Voor meer shortcuts kun je deze <a href="https://help.figma.com/hc/en-us/articles/360040328653-Keyboard-shortcuts-in-Figma">site</a> checken.
        Deze week heb ik me beziggehouden met mijn profielkaartje. Ik heb de basis setup geïnstalleerd en
        een wireframe van de website gemaakt. We hadden afgesproken dat drie teamleden deze week aan hun
        profielkaart zouden werken en de andere twee aan de squad page. Ik hielp mijn teamgenoten wanneer
        ze problemen hadden.
    </p>
    <h3>API-koppeling</h3>
    <p>
        Voor de API-koppeling maak je een <code>fetch-json.js</code> bestand in de lib-map en gebruik je
        <code>+page.server.js</code>
        om de data in te laden. Een voorbeeld van mijn profielkaart is te vinden op deze
        <a href="https://profilecard-git-main-remys-projects-8b6e8689.vercel.app/">link</a>.
    </p>
    <h2>Week 3 | 16 t/m 20 september</h2>
    <h3>MoSCoW & Poker</h3>
    <p>
        Tijdens de les van maandag hebben we geleerd hoe je de moeilijkheid van een taak kunt inschatten
        en hoeveel tijd je eraan moet besteden. Ook hebben we het MoSCoW-principe behandeld, waarmee je
        prioriteiten stelt voor je taken.
    </p>
    <h3>Van epics naar user stories en taken</h3>
    <p>
        Epics helpen om werk te organiseren door het op te splitsen in kleinere, overzichtelijke
        stukken. Dit zorgt ervoor dat projecten beter beheersbaar worden en regelmatig waarde opleveren
        aan de klant.
    </p>
    <ul>
        <li>Epics: Grote projecten zoals het lanceren van een nieuwe website.</li>
        <li>Stories: Bijvoorbeeld het toevoegen van een winkelmandje.</li>
        <li>
            User stories: "Als bezoeker wil ik producten kunnen toevoegen aan mijn winkelmandje om
            overzicht te houden."
        </li>
        <li>Tasks: Concrete taken zoals het ontwerpen van de interface voor het winkelmandje.</li>
    </ul>
    <h3>MoSCoW-methode</h3>
    <ul>
        <li>Must haves: Deze onderdelen moeten af zijn voor de deadline.</li>
        <li>Should haves: Belangrijk, maar het project kan doorgaan zonder.</li>
        <li>Could haves: Leuk om te hebben als er tijd over is.</li>
        <li>Won’t haves: Goede ideeën, maar geen prioriteit.</li>
    </ul>
    <h3>Hoe lever je een project op?</h3>
    <ul>
        <li>Refactored code: Geoptimaliseerde en gestructureerde code zonder foutmeldingen.</li>
        <li>
            README.md: Beschrijving van het project, installatie-instructies, CMS-handleiding en links.
        </li>
        <li>Live zetten: Bijvoorbeeld via GitHub Pages, Vercel, of Netlify.</li>
    </ul>
    <p>
        Bekijk de live versie van de squad page hier: <a
            href="https://your-tribe-for-life-squad-page-nu.vercel.app/">Squad Page</a
            >.
    </p>
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
	}

	.emoji {
		margin-top: 3.125rem;
		font-size: 3.75rem;
		text-shadow: var(--box-shadow-emoji);
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
		list-style-type: disc;
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