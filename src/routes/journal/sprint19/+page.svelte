<div class="container">
	<div class="title">
		<p class="emoji">🆓</p>
		<h1>Free Space</h1>
		<small>Sprint 19</small>
	</div>

	<h2 class="inhoud">Inhoudsopgave</h2>
	<ul>
		<li>
			<strong>Meeloopstage stage</strong>
			<ul>
				<li>Leerpunten uit de Pokémon App</li>
				<li>Leerpunten uit de Tic Tac Toe App</li>
			</ul>
		</li>
	</ul>

	<h2>Leerpunten uit de Pokémon App</h2>

	<h3>1. Frameworks en Tools</h3>
	<ul>
		<li>
			Next.js
			<ul>
				<li>
					Gebruik van Next.js voor server-side rendering, routing en het optimaliseren van de
					performance van de applicatie.
				</li>
			</ul>
		</li>
		<li>
			TypeScript
			<ul>
				<li>
					TypeScript biedt statische typecontrole, wat resulteert in robuustere en onderhoudbare
					code.
				</li>
			</ul>
		</li>
		<li>
			Tailwind CSS
			<ul>
				<li>
					Tailwind CSS wordt ingezet voor snelle, flexibele en consistente styling van de
					gebruikersinterface.
				</li>
			</ul>
		</li>
	</ul>

	<h3>2. API en Data Management</h3>
	<ul>
		<li>
			Pokémon API
			<ul>
				<li>
					De applicatie maakt gebruik van een externe Pokémon API als primaire bron voor alle
					Pokémon-gegevens.
				</li>
			</ul>
		</li>
		<li>
			Data Modellen
			<ul>
				<li>
					Definitie van de structuur van de data (zoals Pokémon en evolutieketens) om een
					consistente verwerking van gegevens te garanderen.
				</li>
			</ul>
		</li>
		<li>
			DTO's (Data Transfer Objects)
			<ul>
				<li>
					Gebruik van DTO's om de ruwe data van de API te standaardiseren en om te zetten naar
					interne formaten.
				</li>
			</ul>
		</li>
		<li>
			Transformers
			<ul>
				<li>
					Transformers zetten de opgehaalde ruwe data om naar de gewenste interne modellen, zodat de
					data correct en uniform kan worden gebruikt binnen de applicatie.
				</li>
			</ul>
		</li>
	</ul>

	<h3>3. Data Ophalen en State Management</h3>
	<ul>
		<li>
			GET Requests
			<ul>
				<li>Implementatie van GET-requests voor het ophalen van data uit de API.</li>
			</ul>
		</li>
		<li>
			Hooks
			<ul>
				<li>
					Gebruik van custom React hooks om API-calls af te handelen en de data efficiënt te
					beheren.
				</li>
			</ul>
		</li>
		<li>
			useState
			<ul>
				<li>
					Toepassing van de useState-hook voor het dynamisch beheren van de state binnen
					componenten.
				</li>
			</ul>
		</li>
	</ul>

	<h3>4. UI Componenten en Layouts</h3>
	<ul>
		<li>
			Componenten
			<ul>
				<li>
					Ontwikkeling van herbruikbare en modulaire UI-componenten voor een consistente
					gebruikerservaring.
				</li>
			</ul>
		</li>
		<li>
			Layouts
			<ul>
				<li>
					Structurering van de pagina's met overzichtelijke layouts, wat bijdraagt aan een
					gebruiksvriendelijke navigatie en presentatie van data.
				</li>
			</ul>
		</li>
		<li>
			Translations Files
			<ul>
				<li>
					Integratie van vertaling bestanden om meertaligheid te ondersteunen en de applicatie
					toegankelijk te maken voor een breder publiek.
				</li>
			</ul>
		</li>
	</ul>

	<h3>5. Testing</h3>
	<ul>
		<li>
			Unit Tests
			<ul>
				<li>
					Schrijven en uitvoeren van unit tests om de functionaliteit van individuele onderdelen te
					verifiëren en toekomstige regressies te voorkomen.
				</li>
			</ul>
		</li>
	</ul>

	<h3>Gedetailleerde Indeling</h3>

	<h3>1. Data Modellen en DTO's</h3>
	<ul>
		<li>
			pokemon.ts
			<ul>
				<li>
					Doel: Definieert het Pokémon-model (bijv. id, name, types, abilities, sprites,
					statistieken, etc.).
				</li>
				<li>Waarom eerst?: Dit is de basisstructuur voor alle Pokémon-gegevens.</li>
			</ul>
		</li>
		<li>
			evolutions.ts
			<ul>
				<li>Doel: Definieert het Evolution-model voor het opslaan van evolutieketens.</li>
				<li>
					Waarom?: Evoluties zijn onderdeel van de Pokémon-data en bouwen voort op het
					Pokémon-model.
				</li>
			</ul>
		</li>
		<li>
			speciesDTO.ts
			<ul>
				<li>Doel: DTO voor soort gegevens van een Pokémon (bijv. evolution_chain url).</li>
				<li>Waarom?: Nodig voor het ophalen van soort informatie via de API.</li>
			</ul>
		</li>
		<li>
			pokemonDTO.ts
			<ul>
				<li>Doel: DTO voor de ruwe Pokémon-gegevens zoals door de API geretourneerd.</li>
				<li>Waarom?: Zorgt voor een gestandaardiseerde structuur van de opgehaalde gegevens.</li>
			</ul>
		</li>
		<li>
			evolutionDTO.ts
			<ul>
				<li>Doel: DTO voor de evolutieketen van een Pokémon.</li>
				<li>Waarom?: Biedt een uniforme structuur voor evolutiedata.</li>
			</ul>
		</li>
	</ul>

	<h3>2. Transformers</h3>
	<ul>
		<li>
			evolutionTransformer.ts
			<ul>
				<li>Doel: Transformeert de ruwe evolutiedata naar het interne evolutiedata-formaat.</li>
				<li>
					Waarom?: Om de door de API opgehaalde evolutiedata bruikbaar te maken in de applicatie.
				</li>
			</ul>
		</li>
		<li>
			pokemonTransformer.ts
			<ul>
				<li>Doel: Transformeert ruwe Pokémon-gegevens naar het interne Pokémon-model.</li>
				<li>
					Waarom?: Zorgt ervoor dat de gegevens conform het model zijn voordat ze verder worden
					gebruikt.
				</li>
			</ul>
		</li>
	</ul>

	<h3>3. API Services</h3>
	<ul>
		<li>
			getPokemon.ts
			<ul>
				<li>Doel: Haalt de gegevens van een specifieke Pokémon op via de API.</li>
				<li>
					Waarom?: Gebruikt het model en de transformer om gedetailleerde Pokémon-gegevens op te
					halen.
				</li>
			</ul>
		</li>
		<li>
			getEvolutionChain.ts
			<ul>
				<li>Doel: Haalt de evolutieketen op voor een Pokémon via de API.</li>
				<li>
					Waarom?: Combineert soort informatie en evolutietransformatie om de keten te verkrijgen.
				</li>
			</ul>
		</li>
		<li>
			getPokemonList.ts
			<ul>
				<li>Doel: Haalt een lijst van Pokémon op (met paginering) via de API.</li>
				<li>
					Waarom?: Voor de overzichtspagina's waar een complete lijst van Pokémon wordt getoond.
				</li>
			</ul>
		</li>
		<li>
			getSpecies.ts
			<ul>
				<li>Doel: Haalt de soort informatie (species data) van een Pokémon op via de API.</li>
				<li>
					Waarom?: Nodig voor het ophalen van evolutie-gerelateerde data en aanvullende soort
					informatie.
				</li>
			</ul>
		</li>
	</ul>

	<h3>4. React Hooks (Data- en State-management)</h3>
	<ul>
		<li>
			usePokemon.ts
			<ul>
				<li>
					Doel: Een hook die specifieke Pokémon-gegevens ophaalt (maakt gebruik van getPokemon.ts).
				</li>
				<li>
					Waarom?: Zorgt voor een eenvoudige interface om gedetailleerde gegevens in componenten te
					laden.
				</li>
			</ul>
		</li>
		<li>
			useEvolutionChain.ts
			<ul>
				<li>
					Doel: Een hook die de evolutieketen van een Pokémon beheert (via getSpecies.ts en
					getEvolutionChain.ts).
				</li>
				<li>
					Waarom?: Voor het dynamisch ophalen en weergeven van evolutieketens op detailpagina's.
				</li>
			</ul>
		</li>
		<li>
			usePokemonList.ts
			<ul>
				<li>Doel: Een hook die de lijst van Pokémon ophaalt en beheert (inclusief paginering).</li>
				<li>
					Waarom?: Zorgt ervoor dat de lijstdata in overzichtspagina's efficiënt wordt geladen.
				</li>
			</ul>
		</li>
		<li>
			useSearch.ts
			<ul>
				<li>
					Doel: Een hook die zoekfunctionaliteit biedt door de Pokémon lijst te filteren op basis
					van een zoekterm (met debouncing).
				</li>
				<li>Waarom?: Voor een responsieve zoekervaring binnen de Pokémon lijst.</li>
			</ul>
		</li>
	</ul>

	<h3>5. UI Componenten en Layouts</h3>
	<ul>
		<li>
			navigation.ts
			<ul>
				<li>Doel: Beheert de meertalige navigatie en routing binnen de applicatie.</li>
				<li>Waarom?: Zorgt voor consistente navigatie-ondersteuning over de hele app.</li>
			</ul>
		</li>
		<li>
			button.tsx
			<ul>
				<li>
					Doel: Een herbruikbare knopcomponent met meerdere stijlen (variants) en functionaliteiten.
				</li>
				<li>Waarom?: Wordt gebruikt in diverse componenten voor consistente knoppen.</li>
			</ul>
		</li>
		<li>
			pokemonCard.tsx
			<ul>
				<li>Doel: Toont een kaart met basisinformatie van een Pokémon (naam, afbeelding, type).</li>
				<li>Waarom?: Wordt herhaald gebruikt in de overzichtspagina voor elke Pokémon.</li>
			</ul>
		</li>
		<li>
			PokemonDetailLayout.tsx
			<ul>
				<li>
					Doel: Layout voor de detailpagina van een specifieke Pokémon, met uitgebreide informatie
					(zoals afbeelding, ID, evoluties).
				</li>
				<li>Waarom?: Biedt de gebruiker een gedetailleerd overzicht van een gekozen Pokémon.</li>
			</ul>
		</li>
		<li>
			PokemonLayout.tsx
			<ul>
				<li>
					Doel: Layout voor de overzichtspagina met een lijst van Pokémon, inclusief
					zoekfunctionaliteit en load-more functionaliteit.
				</li>
				<li>Waarom?: Dit is de hoofdpagina waar gebruikers door alle Pokémon kunnen bladeren.</li>
			</ul>
		</li>
	</ul>

	<h3>6. Vertalingen</h3>
	<ul>
		<li>
			en.json
			<ul>
				<li>
					Doel: Bevat de Engelse vertalingen voor alle tekstuele elementen in de applicatie (zoals
					knoppen, titels, labels).
				</li>
				<li>
					Waarom?: Zorgt voor meertaligheid en dynamische tekstweergave op basis van de taalvoorkeur
					van de gebruiker.
				</li>
			</ul>
		</li>
	</ul>

	<h3>Samenvattend</h3>
	<ul>
		<li>Basisgegevens: Worden gedefinieerd in de models en DTO's (bestanden 1 t/m 5).</li>
		<li>Transformers: (bestanden 6 en 7) Zetten de ruwe API-data om naar deze modellen.</li>
		<li>Services: (bestanden 8 t/m 11) Halen de data op via de API.</li>
		<li>
			Hooks: (bestanden 12 t/m 15) Beheren de data-ophaling en filtering binnen de React applicatie.
		</li>
		<li>
			UI Componenten en Layouts: (bestanden 16 t/m 20) Gebruiken de hooks en services om de gegevens
			aan de gebruiker te tonen.
		</li>
	</ul>

	<h2>Leerpunten uit de Tic Tac Toe App</h2>

	<h3>1. Componenten en Props</h3>
	<ul>
		<li>
			Square Component
			<ul>
				<li>
					Het Square-component is verantwoordelijk voor het weergeven van een enkel vakje op het
					bord. Het ontvangt twee props: value (de waarde van het vakje: 'X', 'O', of null) en
					onSquareClick (de call back functie die wordt aangeroepen bij een klik op het vakje).
				</li>
			</ul>
		</li>
		<li>
			Board Component
			<ul>
				<li>Het Board-component bevat de logica voor het spelbord. Het ontvangt drie props:</li>
				<li>xIsNext (een boolean die aangeeft of het de beurt is van 'X'),</li>
				<li>squares (de huidige staat van de 9 vakjes op het bord),</li>
				<li>onPlay (een functie die wordt aangeroepen wanneer een speler een zet doet).</li>
			</ul>
		</li>
		<li>
			Game Component
			<ul>
				<li>
					Het Game-component is de hoofdcontainer voor de applicatie. Het beheert de geschiedenis
					van de zetvolgorde, de huidige zet en de weergave van het bord. Het ontvangt geen props,
					omdat het de staat zelf beheert via useState.
				</li>
			</ul>
		</li>
	</ul>

	<h3>2. State en State Management</h3>
	<ul>
		<li>
			useState Hook
			<ul>
				<li>
					De applicatie maakt gebruik van de useState-hook om de toestand van het spel te beheren.
					Er zijn twee belangrijke stukjes staat:
				</li>
				<li>history (de lijst van alle voorgaande bord configuraties),</li>
				<li>
					currentMove (de huidige zet in de geschiedenis, waarmee de voortgang van het spel wordt
					gevolgd).
				</li>
			</ul>
		</li>
		<li>
			State Wijzigingen
			<ul>
				<li>
					Elke keer dat een speler een zet doet, wordt de toestand van het bord bijgewerkt via de
					handlePlay-functie. Deze functie voegt de nieuwe bord configuratie toe aan de
					history-array en wijzigt currentMove om de huidige zet bij te houden.
				</li>
			</ul>
		</li>
	</ul>

	<h3>3. Game Logica</h3>
	<ul>
		<li>
			handleClick Functie
			<ul>
				<li>
					In het Board-component wordt de handleClick-functie aangeroepen wanneer een speler op een
					vakje klikt. Als er al een winnaar is of het vakje is al bezet, gebeurt er verder niets.
					Anders wordt het vakje geüpdatet met de waarde 'X' of 'O', afhankelijk van de beurt van de
					speler.
				</li>
			</ul>
		</li>
		<li>
			calculateWinner Functie
			<ul>
				<li>
					Deze functie controleert of er een winnaar is door te kijken naar alle mogelijke
					combinaties van drie vakjes op het bord (de lijnen). Als er een winnende lijn is,
					retourneert het de waarde van de winnaar ('X' of 'O'). Als er geen winnaar is, retourneert
					het null.
				</li>
			</ul>
		</li>
		<li>
			Status Weergave
			<ul>
				<li>
					De status van het spel wordt dynamisch bijgewerkt afhankelijk van de voortgang van het
					spel. Het toont de winnaar, een gelijkspel of de volgende speler die aan de beurt is.
				</li>
			</ul>
		</li>
	</ul>

	<h3>4. Historie en Navigatie</h3>
	<ul>
		<li>
			Zetgeschiedenis
			<ul>
				<li>
					De applicatie houdt de volledige geschiedenis bij van alle zetten die zijn gedaan. Elke
					zet wordt toegevoegd aan de history-array. Dit maakt het mogelijk om terug te gaan naar
					eerdere zetten, wat wordt weergegeven in een lijst onder het bord.
				</li>
			</ul>
		</li>
		<li>
			jumpTo Functie
			<ul>
				<li>
					Met de jumpTo-functie kunnen gebruikers teruggaan naar een specifieke zet in de
					geschiedenis. De functie past de currentMove aan, zodat de gebruiker de voortgang van het
					spel op een eerder moment kan zien.
				</li>
			</ul>
		</li>
	</ul>

	<h3>5. UI en Layout</h3>
	<ul>
		<li>
			React Components voor het UI
			<ul>
				<li>
					De UI bestaat uit herbruikbare componenten zoals Square, Board en Game. Deze zijn op een
					manier gestructureerd die zorgt voor een duidelijke scheiding van verantwoordelijkheden en
					een modulaire opbouw:
				</li>
				<li>Square: Toont een enkel vakje van het bord en verwerkt klik interacties.</li>
				<li>Board: Bevat de logica voor het spelbord en beheert de individuele vakjes.</li>
				<li>Game: Beheert de spelstaat en de weergave van de geschiedenis.</li>
			</ul>
		</li>
		<li>
			CSS Klassen
			<ul>
				<li>
					De applicatie maakt gebruik van eenvoudige CSS-klassen om de layout van het bord en de
					knoppen te bepalen. Bijvoorbeeld, de square-klasse wordt toegepast op de individuele
					vakjes om ze als knoppen weer te geven.
				</li>
			</ul>
		</li>
	</ul>

	<h3>6. Event Handling</h3>
	<ul>
		<li>
			onClick Event
			<ul>
				<li>
					In zowel het Square-component als het Board-component wordt gebruik gemaakt van de
					onClick-event handler om interactie van de gebruiker met de UI te beheren. De
					onSquareClick wordt aan elk vakje toegewezen en leidt naar de handleClick-functie in het
					Board-component.
				</li>
			</ul>
		</li>
	</ul>

	<h3>7. Herbruikbaarheid en Modulariteit</h3>
	<ul>
		<li>
			Modulaire Componenten
			<ul>
				<li>
					Elk component (zoals Square, Board, en Game) heeft één specifieke verantwoordelijkheid,
					waardoor de app gemakkelijk te begrijpen en uit te breiden is. Dit maakt het onderhoud
					eenvoudiger en vergroot de herbruikbaarheid van de componenten in andere applicaties of
					projecten.
				</li>
			</ul>
		</li>
	</ul>

	<h3>Gedetailleerde Indeling</h3>
	<ul>
		<li>
			Square Component
			<ul>
				<li>Doel: Weergeeft een enkel vakje en verwerkt klikken op het vakje.</li>
				<li>
					Props:
					<ul>
						<li>value: de waarde van het vakje (null, 'X', 'O').</li>
						<li>onSquareClick: een callback-functie voor het verwerken van klikken.</li>
					</ul>
				</li>
				<li>
					Waarom eerst?: Dit component is essentieel voor de weergave van het bord en interactie met
					de gebruiker.
				</li>
			</ul>
		</li>
		<li>
			Board Component
			<ul>
				<li>Doel: Bevat de logica voor het spelbord en beheert de interactie met de vakjes.</li>
				<li>
					Props:
					<ul>
						<li>xIsNext: bepaalt welke speler aan de beurt is.</li>
						<li>squares: de huidige toestand van de vakjes.</li>
						<li>onPlay: een functie om de nieuwe staat van het bord te verwerken.</li>
					</ul>
				</li>
				<li>
					Waarom eerst?: Dit is het centrum van de logica voor het weergeven en beheren van het
					bord.
				</li>
			</ul>
		</li>
		<li>
			Game Component
			<ul>
				<li>
					Doel: Beheert de staat van het spel, de geschiedenis van zetten en de huidige voortgang.
				</li>
				<li>
					Waarom eerst?: Het beheert de globale staat van het spel en biedt de gebruikersinterface
					voor het teruggaan naar eerdere zetten.
				</li>
			</ul>
		</li>
		<li>
			calculateWinner Functie
			<ul>
				<li>Doel: Controleert of er een winnaar is.</li>
				<li>
					Waarom eerst?: De winconditie is essentieel voor het beëindigen van het spel en voor het
					updaten van de status.
				</li>
			</ul>
		</li>
	</ul>

	<h3>Samenvattend</h3>
	<ul>
		<li>Componenten: Square, Board, en Game vormen de kern van de applicatie.</li>
		<li>
			State: Wordt beheerd met de useState-hook voor het bord, de geschiedenis en de huidige zet.
		</li>
		<li>
			Logica: De spelwinst wordt gecontroleerd via de calculateWinner-functie, en de voortgang wordt
			beheerd via de history.
		</li>
		<li>
			UI en Event Handling: Modulariteit en eenvoudige event handling zorgen voor een
			overzichtelijke en gebruiksvriendelijke ervaring.
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
