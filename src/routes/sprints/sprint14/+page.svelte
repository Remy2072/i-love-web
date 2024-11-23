<pre>
    Sprint 14

 Inhoudsopgave
*  Repositories
*  Week 1
    * Nieuw project 
*  Week 2
    * Mentor dag week 1
    * Structuur en werking overzicht
    * 10 Principles of good design 
    * Error page  
*  Week 3
    * Waterval vs Agile 
    * FDND agile woordenlijst  
    * Layout  
    * Mentor dag week 2  
    * Database  
    * Readme  
* Frontend ontwikkelingen 

 Repositories
*  FDND We Love Web
*  i-love-web

Week 1 | 23 t/m 27 september

Nieuw project
Deze week kregen we een nieuwe opdracht van FDND: het ontwikkelen van een "We Love Web" website. Deze website geeft een overzicht van zowel aankomende als afgelopen We Love Web-sessies, bedoeld voor studenten en docenten. Samen met Jaymar ben ik aan deze opdracht begonnen. We startten met het opzetten van de basis van de site door een sitemap, datamodel en teamcanvas te maken. Dit is allemaal vastgelegd in ons projectboard, dat te vinden is via de volgende link: Project Board FDND We Love Web

Week 2 | 30 september t/m 4 oktober

Mentor dag week 1  
Tijdens deze week kregen de eerstejaars een college over het grid-systeem. In groepjes werkten ze aan verschillende lay-outs, waarbij ik mijn groepje hielp wanneer ze vastliepen.

Structuur en werking overzicht  
In week 2 werd de structuur en werking van het project verduidelijkt:

1. Structuur  
* De code bevindt zich in de `src` map.
* `/routes` bevat zowel dynamische als statische pagina’s. Server-side code hoort in `src/lib/server/`.
* De `static` map bevat onder andere PDF's en globale CSS.

2. Routing  
* Standaard routing-methodes voor dynamische en statische routes worden toegepast.

3. Error Handling  
* Foutpagina's worden gemaakt via `/routes/+error.svelte` en `/routes/+layout.svelte`.

4. Data Laden  
* Data wordt opgehaald met `page.js` en `page.server.js`. Server-side functies zijn `async`.

5. Binding  
* Variabelen worden aan elementen gebonden met `bind:value= var.

6. Library  
*  Componenten worden geïmporteerd uit `src/lib` via `$lib`.

7. Components  
* Je kunt variabelen exporteren binnen componenten met `export let variabele`.

10 Principles of good design  
Hierbij een samenvatting van de 10 principes van goed design:

1. Innovatief  
2. Bruikbaar  
3. Esthetisch  
4. Begrijpelijk  
5. Onopvallend  
6. Eerlijk  
7. Duurzaam  
8. Grondig tot in de details  
9. Milieuvriendelijk  
10. Zo minimaal mogelijk

Error page  
Op basis van Justus' presentatie heb ik een error-pagina gemaakt die gebruik maakt van `$page.status` om de foutstatus weer te geven:

Week 3 | 7 t/m 11 oktober

Waterval vs Agile 
* Waterval: Hierbij worden alle specificaties van tevoren vastgelegd.  
* Agile: Flexibel en iteratief werken, waarbij aanpassingen mogelijk zijn gedurende het project.

FDND agile woordenlijst  
1. Agile Development: Een iteratieve benadering van softwareontwikkeling waarbij teams in korte sprints werken om flexibel in te spelen op veranderingen.
2. Backlog: Een prioriteitenlijst met taken, functionaliteiten of vereisten die moeten worden uitgevoerd of geïmplementeerd.
3. Business owner: De persoon die de zakelijke belangen van een project vertegenwoordigt, vaak verantwoordelijk voor het uiteindelijke resultaat.
4. Continuous Integration: Een software ontwikkel praktijk waarbij ontwikkelaars regelmatig nieuwe code integreren in de hoofdtak van de broncode, met automatische tests om fouten te ontdekken.
5. Daily Scrum: Een korte dagelijkse bijeenkomst waarin teamleden hun voortgang bespreken en obstakels delen.
6. Definition of done: De criteria waaraan een taak of user story moet voldoen om als volledig afgerond te worden beschouwd.
7. Epic: Een grote user story die kan worden opgedeeld in kleinere, beter beheersbare user stories of taken.
8. Feature: Een functionele eigenschap of mogelijkheid van een product of systeem.
9. Iteration: Een enkele cyclus van een herhalend proces, vaak een korte periode waarin een team bepaalde doelen probeert te bereiken.
10. Minimal viable product: De meest eenvoudige versie van een product die nog steeds waarde biedt aan de gebruikers, vaak gebruikt om snel feedback te verzamelen.
11. MoSCoW: Een prioriterings techniek die taken indeelt in Must haves, Should haves, Could haves en Won’t haves (voor nu).
12. Optimum viable product: Het product met de optimale balans tussen functies en waarde voor gebruikers, een stap verder dan een minimal viable product.
13. Planning poker: Een techniek voor het inschatten van de omvang van taken of user stories, waarbij teamleden cijfers toewijzen aan de moeilijkheidsgraad.
14. Product owner: De rol binnen een scrum-team die verantwoordelijk is voor het maximaliseren van de waarde van het product door het beheren van de product backlog.
15. Refactoring: Het herschrijven van bestaande code zonder de externe functionaliteit te wijzigen, om de leesbaarheid en onderhoudbaarheid te verbeteren.
16. Release: De uitgave van een nieuwe versie van een product aan gebruikers of klanten.
17. Retrospective: Een bijeenkomst aan het einde van een sprint waarin het team bespreekt wat goed ging, wat beter kan, en hoe ze hun processen kunnen verbeteren.
18. Scrum: Een framework voor agile projectmanagement waarbij teams werken in iteratieve cycli, of sprints.
19. Scrum master: De facilitator van een scrum-team die verantwoordelijk is voor het waarborgen van de juiste uitvoering van scrum-principes.
20. Scrum team: Een cross-functioneel team dat gezamenlijk verantwoordelijk is voor het opleveren van incrementele waarde in een project.
21. Sprint: Een afgebakende werkperiode (meestal 1-4 weken) waarin een scrum-team aan een vooraf vastgesteld doel werkt.
22. Sprint goal: Het specifieke doel dat het team binnen een sprint probeert te bereiken.
23. Sprint planning: Een bijeenkomst aan het begin van een sprint waarin het team de taken en doelen voor de sprint vastlegt.
24. Sprint review: Een bijeenkomst aan het einde van een sprint waarin het opgeleverde werk wordt gedemonstreerd aan de stakeholders.
25. Stand-up: Een korte dagelijkse bijeenkomst waarin teamleden hun voortgang en eventuele obstakels delen.
26. Stakeholders: Personen of groepen die belang hebben bij het succes van een project, zoals klanten, managers of eindgebruikers.
27. Task: Een specifieke, vaak kleine eenheid van werk die moet worden uitgevoerd binnen een project.
28. Task board: Een visueel hulpmiddel dat de voortgang van taken binnen een project toont, vaak in de vorm van een kanban-bord.
29. Task points: Een maatstaf om de moeilijkheidsgraad of inspanning van taken te schatten.
30. Velocity: De snelheid waarmee een team werk kan afronden, vaak gemeten in het aantal afgewerkte user stories of taakpunten per sprint.

Layout  
Met behulp van Justus en Dorien heb ik meer geleerd over het gebruik van layouts in onze projecten. Door gebruik te maken van `<slot />`, kan specifieke content geladen worden, terwijl de navigatie en footer consistent blijven op alle pagina's.

Mentor dag week 2  
Tijdens deze week heb ik verschillende studenten begeleid:

* Süleyman en Kerem: Tips gegeven voor het schrijven van een gestructureerde README.
* Mikiyas: Advies gegeven over wat hij moest afronden voor de sprint review en feedback op zijn code.
* Luuk: Uitleg gegeven over het maken van een inhoudsopgave in Markdown.
* Arman: Zijn README nagekeken en geadviseerd om een live link en installatie-instructies toe te voegen.

Database  
Samen met Justus heb ik een database opgezet voor de "We Love Web"-presentaties. Ik heb een datamodel opgesteld dat alle benodigde velden bevat voor een presentatie. Een voorbeeld van een database-item:

Readme
Een duidelijke README is van groot belang om toekomstige developers en potentiële sponsoren een goed inzicht te geven in het project. Hier is een voorbeeld van mijn README voor FDND: README.md

Frontend ontwikkelingen 
Dit zijn de websites die ik gebruik om up to date te zijn met het web.

* dev.to
* reddit
* css-tricks
</pre>