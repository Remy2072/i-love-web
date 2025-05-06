<div class="container">
	<div class="title">
		<p class="emoji">🩵</p>
		<h1>Dave Bitter</h1>
		<small>Sprint 18</small>
	</div>

	<h2 class="inhoud">We 🩵 Web met met Dave Bitter</h2>

	<div>
		<h3>Over is Dave</h3>
		<ul>
			<li>
				Ervaring:
				<ul>
					<li>Gewerkt bij ANWB.</li>
					<li>Momenteel Frontend Lead bij IO Digital.</li>
				</ul>
			</li>
			<li>
				Expertise: Gespecialiseerd in AI-gestuurde spraakinterfaces en front-end technologieën.
			</li>
			<li>
				Website: <a href="https://www.iodigital.com" target="_blank">IO Digital</a> (voor meer informatie
				en inspiratie).
			</li>
		</ul>

		<h3>AIva: De AI-gestuurde stemassistent</h3>
		<p>
			Voor de AIva-bot heeft Dave Bitter, Frontend Lead bij IO, verschillende
			persoonlijkheidskenmerken en animaties geïmplementeerd om de gebruikerservaring te verbeteren:
		</p>
		<ul>
			<li>
				<strong>Animaties:</strong>
				<ul>
					<li>Idling (ruststand)</li>
					<li>Listening (luisteren)</li>
					<li>Responding (reageren)</li>
				</ul>
			</li>
			<li>
				<strong>Principes:</strong>
				<ul>
					<li>"Performance boven alles"</li>
					<li>"Vergeet oude technieken niet"</li>
					<li>"Maak coole dingen"</li>
				</ul>
			</li>
			<li>
				<strong>Hoe de AI wordt gebruikt:</strong>
				<ul>
					<li>
						<strong>Persoonlijkheid van de AI:</strong> De AI reageert op basis van de door de gebruiker
						gekozen rol of context.
					</li>
					<li>
						<strong>Context bieden:</strong> De gebruiker kan specifieke rollen of taken aan de AI toewijzen,
						zoals informatie verstrekken of problemen oplossen.
					</li>
				</ul>
			</li>
		</ul>

		<h3>Een korte geschiedenis van Spraakherkenning</h3>
		<p>
			Spraakherkenning heeft een lange weg afgelegd sinds de eerste experimenten in de jaren 1950.
			Hier is een overzicht van de belangrijkste mijlpalen:
		</p>
		<ul>
			<li>
				<strong>1950s-1960s:</strong> Eerste pogingen om spraakherkenning te ontwikkelen. Deze systemen
				konden slechts enkele woorden herkennen.
			</li>
			<li>
				<strong>1970s-1980s:</strong> Verbeteringen brachten meer nauwkeurigheid, maar de technologie
				bleef beperkt tot eenvoudige toepassingen.
			</li>
			<li>
				<strong>1990s:</strong> Software zoals DragonDictate en IBM ViaVoice maakte spraakherkenning
				toegankelijker voor consumenten.
			</li>
			<li>
				<strong>2000s:</strong> Google introduceerde spraakherkenning en integreerde dit in zijn zoekdiensten.
			</li>
			<li>
				<strong>2010s:</strong> De opkomst van slimme assistenten zoals Google Assistant, Alexa en Siri
				bracht spraakherkenning naar de mainstream.
			</li>
			<li>
				<strong>2020s:</strong> Technologieën zoals live transcriptie werden alledaags en steeds nauwkeuriger.
			</li>
		</ul>

		<h3>Web Speech API</h3>
		<ul>
			<li>
				Hoe werkt het?
				<ul>
					<li>De gebruiker spreekt.</li>
					<li>De API registreert en verwerkt de audio.</li>
					<li>De woorden worden vertaald naar tekst of acties.</li>
				</ul>
			</li>
		</ul>
		<p>
			Deze technologie maakt spraakgestuurde interacties mogelijk, zoals live transcripties,
			spraakgestuurde zoekopdrachten en assistenten die commando's begrijpen.
		</p>

		<h3>Gebruik van de Web Speech API</h3>
		<p>
			Met de Web Speech API kun je eenvoudig spraakherkenning integreren in webapplicaties. Dit
			werkt als volgt:
		</p>
		<ul>
			<li>
				Verbinding maken met de AI: Gebruik JavaScript-functies zoals <code
					>useSpeechRecognition</code
				> om de API te activeren.
			</li>
			<li>
				Demo en toepassing: Bekijk een demo of implementeer eigen functies door het koppelen van
				commando's aan acties.
			</li>
			<li>
				Meer inzicht: Raadpleeg de officiële documentatie voor diepgaande informatie over
				instellingen en optimalisatie.
			</li>
		</ul>

		<h3>Bronnen</h3>
		<ul>
			<li><a href="https://www.davebitter.com/">Portfolio</a></li>
			<li><a href="https://techhub.iodigital.com/">IO Techhub</a></li>
		</ul>
	</div>
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
