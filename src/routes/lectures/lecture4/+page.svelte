<div class="container">
	<div class="title">
		<p class="emoji">💛</p>
		<h1>Emiel van Betsbrugge</h1>
		<small>Sprint 16</small>
	</div>

    <h2 class="inhoud">We 💛 Web met met Emiel van Betsbrugge</h2>

    <div style="margin-top: 1.25rem;">
        <p><strong>Proces & Polish: From Pitch to Production</strong></p>
        <p>Een presentatie door Emiel over zijn workflow en aanpak van projecten, van begin tot eind.</p>
    
        <p><strong>Van pitch tot productie: een ontwikkelingsproces in zeven stappen:</strong></p>
        <p>Emiel heeft 8 jaar ervaring en is voormalig Devine-student uit Kortrijk.  
          Hij combineert technische kennis met creativiteit en werkt momenteel bij Active Theory.</p>
        <p><em>Hoe transformeer je een idee in een afgerond project?</em></p>
    
        <h3>Pitch:</h3>
        <ul>
          <li>Wie is de klant?</li>
          <li>Hoe pakken we dit project aan?</li>
          <li>Wanneer kunnen we starten?</li>
          <li>Wat gaan we maken?</li>
          <li>Wat is het budget?</li>
        </ul>
        <p><strong>Mensen in dit stadium:</strong></p>
        <ul>
          <li>Producers</li>
          <li>Sales</li>
          <li>Design Director</li>
          <li>Tech Director/Lead</li>
        </ul>
        <p><strong>Details:</strong></p>
        <ul>
          <li>Vaak optioneel en tegen betaling.</li>
          <li>Dit kan een intensieve designfase zijn, soms concurrerend met andere agencies.</li>
        </ul>
    
        <h3>Discovery:</h3>
        <p>Hier tackelen we de grootste vragen over de build.</p>
        <p>Geschikt als klant en agency nog niet zeker zijn, maar wel willen samenwerken.</p>
    
        <h3>Design & Early Development:</h3>
        <ul>
          <li>Statement of work (SOW) wordt ondertekend.</li>
          <li>Schattingen en sprintplanning worden gemaakt.</li>
          <li>Basisopzet (scaffolding) wordt opgezet.</li>
        </ul>
    
        <h3>Development:</h3>
        <p><strong>Emiels aanpak:</strong></p>
        <ul>
          <li>Start snel en grof: <em>Quick and dirty flow.</em></li>
          <li>Los fouten op: <em>Fix Fix Fix Fix Fix.</em></li>
          <li>Werk het af: <em>Polish Polish Polish.</em></li>
        </ul>
        <p><strong>Tips voor polish:</strong></p>
        <ul>
          <li>Denk na: maakt dit echt een verschil?</li>
          <li>Quick wins?</li>
          <li>Focus on low effort, big impact.</li>
          <li>Wat maakt jouw project uniek?</li>
          <li>Test grondig en blijf kritisch.</li>
          <li>Geen shortcuts nemen.</li>
        </ul>
    
        <h3>QA (Quality Assurance):</h3>
        <ul>
          <li>Functional QA.</li>
          <li>Taal QA (LQA).</li>
          <li>Acceptatie van de build.</li>
          <li>Laatste polish.</li>
        </ul>
        <p><strong>Details:</strong></p>
        <ul>
          <li>Vaak uitgevoerd door een externe partij.</li>
          <li>Goede voorbereiding is essentieel.</li>
        </ul>
    
        <h3>Go Live:</h3>
        <p>Met een druk op de knop live gaan.</p>
        <p>Vaak niet direct na het einde van de build.</p>
    
        <h3>Retrospective:</h3>
        <ul>
          <li>Wat ging goed?</li>
          <li>Wat kan beter?</li>
          <li>Wat moeten we anders doen?</li>
          <li>Boilerplate aanpassen?</li>
        </ul>
    
        <h3>Afsluiting:</h3>
        <p>Snelheid is belangrijk, maar kwaliteit is het einddoel.</p>
        <p>Blijf experimenteren.</p>
        <p>Maak het internet weer leuk.</p>
        <p>Jullie kunnen dit – jullie zitten op de juiste plek!</p>
      </div>
	  <a style="margin-top: 10px;" href="https://emielvanbetsbrugge.be/">Portfolio</a>
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
		margin-bottom: 200px;
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

	img {
		margin-top: 1.25rem;
		border-radius: 15px;
		border: 3px solid var(--dusty-lavender);
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
