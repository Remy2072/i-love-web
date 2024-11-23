<pre>
    Sprint 15

Inhoudsopgave
	•	Repositories
	•	Week 1
	•	Presentatie Directus
	•	Presentatie Triple
	•	Argumentatie 
	•	Astro
	•	Mentor dag week 3
	•	Week 2
	•	Schets je ontwikkeling 
	•	Mentor rol do’s and dont’s
	•	Eerste versie i love web
	•	Stagemarkt

Repositories
	•	Choices-choices-the-tech-stack
	•	Justify-your-tech-stack
	•	Schets-je-ontwikkeling-s3
	•	I-love-web

Week 1 | 14 t/m 18 oktober 
In deze sprint werken we met een framework naar keuze. We hebben de taak gekregen om een nieuwe tech-stack te selecteren en onze keuze te onderbouwen met duidelijke argumenten.

Presentatie Directus
Vandaag kwam Kevin van Directs een backend developer hij vertelde ons hoe Directus zo groot is geworden en hoe het bedrijf in elkaar zat. De belangrijkste dingen die mij zijn bij gebleven zijn dat:

Choices are about tradeoffs


Performance vs maintainability 
	•	By what degree (how long can you work on it)
	•	Over what scale (how many users)

Mistakes are good learn from them.

Presentatie Triple
We kregen ook een presentatie van Shaynta Vleugel. Zij is een teamlead bij Triple en werkt al zeven jaar bij dit bedrijf. Zij is hier gekomen nadat ze was afgestudeerd op CMD.

Triple is een bedrijf dat 25 jaar geleden is opgericht, en het is nu zo groot geworden dat ze al 250 werknemers hebben. Sinds kort zijn ze samengevoegd met Hypersolid.

Onze core 
	•	Development
	•	Design 
	•	Technical operations 
	•	Data en insights 

Onze klanten 
	•	Heineken 
	•	Citizen
	•	Ajax 
	•	Qmusic
	•	ANWB 
	•	Postnl
	•	Vodafone 
	•	Ziggo
	•	Disney
	•	Talpa

Mooie dingen maken met leuke mensen

Webteam
Wij begonnen met het framework Angular, maar zijn snel overgestapt naar React. Tegenwoordig maken we apps in Svelte. Als er een bestaand project in React is, bouwen we daar verder op, behalve als de klant wil betalen om het project opnieuw te maken. Verder maken we smart TV-apps met Svelte.

Way of working 
Scrum 
	•	Daily stand-ups
	•	Refinements 
	•	Retrospectives
	•	Sprint review / planning
	•	Tech lead / product owner rol
	•	Jira ticket manager
	•	Git code reviews
	•	Conventinal commits

Commits
	•	Fix 
	•	Feature
	•	Chor

Vier Stappen voor het Opstellen van een Argumentatie

Formuleer een standpunt en selecteer argumenten
	•	P1: Als je onderzoek doet, kun je een standpunt innemen.
	•	P2: Jij verricht onderzoek naar een tech stack.
	•	C: Dus jij kunt een standpunt innemen.

P = propositie, C = conclusie

Bedenk zowel argumenten voor als tegen jouw gekozen tech stack. Houd rekening met de vraag van de opdrachtgever, de behoeften van de gebruiker, de Developer Experience, enzovoort.

Maak een argumentatieschema
	•	Enkelvoudige argumentatie: één argument ter ondersteuning van het standpunt.
	•	Meervoudige argumentatie: meerdere, afzonderlijke argumenten ter ondersteuning van het standpunt.
	•	Nevenschikkende argumentatie: meerdere argumenten die gezamenlijk het standpunt ondersteunen.
	•	Onderschikkende argumentatie: een argument dat zelf weer ondersteund wordt door een ander argument.
	•	Beoordeel de aanvaardbaarheid van de argumentatie

Is de argumentatie voldoende uitgewerkt?
	•	Is de argumentatie inhoudelijk correct?
	•	Ondersteunt de argumentatie het ingenomen standpunt?

Werk het argumentatieschema uit
	•	Schrijf een alinea waarin je de conclusie presenteert en je argumentatie helder uiteenzet.

Astro
Na wat research heb ik gekozen voor het framework Astro. De opdracht was dat ik het werk van de vorige sprint zou overzetten in astro, zonder een tooltje ervoor te gebruiken. Ik begon met de nieuwe repo te forken en te clonen. Daarna pakte ik de documentatie van Astro erbij en doorliep ik de installatie stappen.

Stap 1
Open je terminal en voer deze line code in. Hiermee creëer je een nieuw Astro project

```
npm create astro@latest
```

Stap 2
Nu krijg je meerdere opties kies je instelingen en druk op verder.

Stap 3
Voeg deze line toe zodat de juiste packages worden geïnstalleerd.

```
Npm install
```

Stap 4
Type daarna deze line code om je project op te starten en je kan beginnen met coderen 

```
npm run dev
```

Mappen structuur 

Astro's focus op meerdere frameworks: 
In Astro kun je componenten van verschillende frameworks (Svelte, React, Vue) naast elkaar gebruiken. Dit zie je terug in de src/components map waar Astro-componenten (en andere framework-componenten) naast elkaar kunnen bestaan.

/src 
	/components
	/layouts 
	/pages 
	/styles 
	/scripts 
   public 
   astro.config.mjs 
   package.json 


Svelte's focus op één framework: 
Svelte's mappenstructuur is eenvoudiger en meer gericht op de component-gebaseerde structuur. Vooral met SvelteKit wordt de focus gelegd op een map voor routes (/routes), terwijl Astro een gescheiden benadering gebruikt (/pages).

/src 
	/components
	/routes 
	/stores 
	/styles 
	/assets 
   public 
   svelte.config.js 
   package.json 

Het enige verschil wat ik tot nu toe echt heb gemerkt is dat je de exports iets anders doet.

In svelte gebruik je een script tag.

In Astro gebruik je - - - om je exports in te zetten.

Check mijn repo: justify-your-tech-stack Voor een in depth review.

Mentor dag week 3

Testen
De eerste jaars studenten kregen een college over test principes. Daarna ging ik samen met 4 studenten aan een tafel zitten en gingen we verschillende test principes opschrijven op een bord. Daarna verdeelde we de studenten in groepjes van 2 en gingen ze de site van het groepje tegenover hun testen en van een groepje van een andere tafel, ze moesten issues inschieten en eventueel mondeling tips geven. Ik ging de website van Rick en Sascha testen en ik schoot een paar issues in hun repo.
	•	Feedback op Rick
	•	Feedback op Sascha

Design review
In het tweede gedeelte van de les moesten er studenten naar de mentoren toe komen als ze hun design beoordeeld wilden hebben voor eventuele tips en tops. Anouar en Kerem kwamen naar mij toe en presenteerde hun Design en huidige website aan mij, ik gaf hun daarop gepaste feedback en gaf ook bronnen waar ze meer informatie uit konden halen.
	•	Feedback op Anouar
	•	Feedback op Kerem

Week 2 | 21 t/m 25 oktober

Schets je ontwikkeling
Agelopen maandag hebben we 3 teken opdrachten gemaakt. In de eerste opdracht moest je een skill tree maken en tekenen hoe ver jij bent met de dlc, daarna moesten wij een tekening maken met de vraag waar ben ik over een jaar, wat kan ik, wat doe ik, wat denk ik en wat zeg ik. En als laatst moesten ik een tijdlijn maken met mijn tools en skills, houding en soft skills. Daarna ging ik dit vergelijken met een van mijn klas genoten en vroeg ik feedback wat hij ervan vond.



Mentor rol do’s and dont’s
Samen met de klas hebben we do’s en dont’s gemaakt wat je wel en niet hoort / kan doen tijdens je mentor rol.

Do's
	•	Weet waar de les over gaat, zodat je actief mee kan doen.
	•	Pro actieve houding, vragen stellen, erbij gaan zitten. Vier stadia van bekwaamheid (google het).
	•	Vragen met een tegenvraag beantwoorden, mensen op weg helpen naar het antwoord zonder het voor te kauwen.
	•	Bewust informatie doseren, neem niveau mee in feedback. Constructieve feedback geven. Houd het klein, ga niet op alles dat je ziet feedback geven maar hou het op de inhoud van de les.
	•	Feedback in issues schrijven maar ook mondeling uitleggen. Geef ook een bron mee.
	•	Communiceren over planning met docenten.
	•	Kijk naar mentor planning, letten op diversiteit. Let op samenstelling van mentoren op de dagen, zorg voor diversiteit in het mentoren team per dag.
	•	Sandwich methode op feedback, Top, Tip en weer een Top. 
	•	Als mentor hoef je niet alles te weten, je kunt samen op zoek gaan naar het antwoord. 
	•	Squad leader vragen naar meer uitdaging voor de studenten die al verder zijn.- Vraag feedback aan je studenten of je de mentor rol goed uitvoert.

Dont's
	•	Teveel grappen maken met je mede mentoren.
	•	Te streng zijn.- Afdwalen en op teveel feedback geven.
	•	Lang wegblijven en niet de halve les wegblijven.
	•	Niet aanwezig zijn / te laat komen.
	•	Mensen afkraken.
	•	Geïrriteerd reageren als mensen dezelfde vraag blijven stellen.

Eerste versie i love web
	•	Design en code 

Stage markt
Op school kwamen er 11 bedrijven waar je een potentiële stage kon krijgen. We hadden drie sessies waar je met drie bedrijven kon praten waarin ze vertelde over hun bedrijf wat je kan verwachten en eventuele vrije vragen.  Ik heb bij Triple / Hypersolid gezeten, Funda en Future ready design. Alle drie de bedrijven waren wel goed maar bij Triple / Hypersolid voelde ik de meeste affectie omdat het een grote agency had met een goede structuur en zij werkte met het framework waar ik interesse in heb. Verder ben ik nu bezig met een portfolio en projecten te verzamelen zodat ik kan solliciteren bij hun.
 
VRIJDAG ?
</pre>