<pre>
    Sprint-13

Inhoudsopgave 
	•	Repositories
	•	Week 1
	•	Leervragen
	•	Wat is Svelte en Svelte Kit
	•	Voordelen van Svelte ten opzichte van React
	•	Basisinstallatie van Svelte Kit
	•	Svelte-project opzetten voor de squad page
	•	Bestandtypen in Svelte Kit
	•	Week 2
	•	Figma workshop
	•	API-koppeling
	•	Week 3
	•	MoSCoW & Poker
	•	Van epics naar user stories en taken 
	•	MoSCoW-methode
	•	Hoe lever je een project op?

Repositories
	•	Profile Card Repository
	•	Squad Page Repository

Week 1 | 2 t/m 6 september
In deze sprint zijn we begonnen met Svelte, een component-based framework, en Svelte Kit, een app-framework dat server-side rendering (SSR) ondersteunt.

Leervragen:
	•	Hoe combineer ik gegevens uit een CMS met een framework?
	•	Hoe richt ik een project in met een framework?
	•	Hoe kies ik de juiste tools en frameworks voor een project?
	•	Wat is de beste manier om mijn learning journal op te zetten?

Wat is Svelte en Svelte Kit?
Svelte is een JavaScript-framework dat zich onderscheidt door de manier waarop het je code compileert. In plaats van zware runtime libraries, compileert Svelte de code direct naar efficiënte, snelle JavaScript dat meteen in de browser draait. Het is dus lichter en sneller dan veel andere frameworks.

Svelte Kit is een uitbreiding van Svelte waarmee je complete web-apps kunt bouwen. Het biedt handige tools voor routing, server-side rendering, API’s en meer, waardoor je in korte tijd een volwaardige app kunt ontwikkelen.

Voordelen van Svelte ten opzichte van React:
	•	Geen runtime overhead: Svelte compileert direct naar JavaScript, dus geen extra runtime nodig.
	•	Snellere prestaties: Door minder runtime-code presteren Svelte-apps beter en zijn ze kleiner in bestandsgrootte.
	•	Minder boilerplate: De syntax van Svelte is eenvoudiger en vereist minder code dan React voor dezelfde functionaliteit.

Basisinstallatie van Svelte Kit:
	0.	Installeer Node.js.
	0.	Creëer een nieuw project met npm create svelte@latest.
	0.	Kies een projecttemplate.
	0.	Installeer dependencies met npm install.
	0.	Start het project met npm run dev -- --open.

Svelte-project opzetten voor de squad Page
Met behulp van de bovenstaande stappen heb ik een Svelte-project opgezet voor onze squad page. Ik heb de database van Directus gekoppeld via een fetch-json.js bestand in de lib-map, dat de gegevens ophaalt. Vervolgens heb ik een +page.server.js bestand gemaakt voor het renderen van data via een API-link.

Bestandstypen in Svelte Kit:
	•	+page.svelte: Hier schrijf je HTML, CSS en JavaScript voor een specifieke pagina. Svelte genereert automatisch classes, dus je hoeft je geen zorgen te maken dat stijlen overlappen tussen pagina’s.
	•	+layout.svelte: Code die voor alle child routes geldt, zet je hier, zoals een algemene header.
	•	+page.server.js: Server-side JavaScript voor de specifieke pagina.
	•	+layout.server.js: Server-side code voor alle child routes.
	•	+server.js: Hierin kun je API-routes definiëren, zoals GET en POST-methodes.

Week 2 | 9 t/m 13 september

Figma workshop 
In deze workshop kregen we de basis uitgelegd van Figma en enkele handige sneltoetsen om sneller te werken. Voor meer shortcuts kun je deze site checken.
Deze week heb ik me beziggehouden met mijn profielkaartje. Ik heb de basis setup geïnstalleerd en een wireframe van de website gemaakt. We hadden afgesproken dat drie teamleden deze week aan hun profielkaart zouden werken en de andere twee aan de squad page. Ik hielp mijn teamgenoten wanneer ze problemen hadden.

API-koppeling 
Voor de API-koppeling maak je een fetch-json.js bestand in de lib-map en gebruik je +page.server.js om de data in te laden. Een voorbeeld van mijn profielkaart is te vinden op deze link.

Week 3 | 16 t/m 20 september

MoSCoW & Poker 
Tijdens de les van maandag hebben we geleerd hoe je de moeilijkheid van een taak kunt inschatten en hoeveel tijd je eraan moet besteden. Ook hebben we het MoSCoW-principe behandeld, waarmee je prioriteiten stelt voor je taken.

Van epics naar user stories en taken 
Epics helpen om werk te organiseren door het op te splitsen in kleinere, overzichtelijke stukken. Dit zorgt ervoor dat projecten beter beheersbaar worden en regelmatig waarde opleveren aan de klant.
	•	Epics: Grote projecten zoals het lanceren van een nieuwe website.
	•	Stories: Bijvoorbeeld het toevoegen van een winkelmandje.
	•	User stories: "Als bezoeker wil ik producten kunnen toevoegen aan mijn winkelmandje om overzicht te houden."
	•	Tasks: Concrete taken zoals het ontwerpen van de interface voor het winkelmandje.

MoSCoW-methode:
	•	Must haves: Deze onderdelen moeten af zijn voor de deadline.
	•	Should haves: Belangrijk, maar het project kan doorgaan zonder.
	•	Could haves: Leuk om te hebben als er tijd over is.
	•	Won’t haves: Goede ideeën, maar geen prioriteit.

Hoe lever je een project op?
	•	Refactored code: Geoptimaliseerde en gestructureerde code zonder foutmeldingen.
	•	README.md: Beschrijving van het project, installatie-instructies, CMS-handleiding en links.
	•	Live zetten: Bijvoorbeeld via GitHub Pages, Vercel, of Netlify.
Bekijk de live versie van de squad page hier: Your Tribe for Life Squad Page.

</pre>

<style>
    pre {
        color: var(--slate-blue);
    }
</style>