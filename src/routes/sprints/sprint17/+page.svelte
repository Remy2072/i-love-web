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
				<!-- <li></li> -->
            </ul>
        </li>
        <li>
            <strong>Week 3</strong>
            <ul>
                <!-- <li></li> -->
            </ul>
        </li>
    </ul>
    <h2>Repositories</h2>
    <ul>
        <li><a href="https://github.com/Remy2072/user-needs">User Needs</a></li>
        <li><a href="https://github.com/Remy2072/i-love-web">i-love-web</a></li>
    </ul>
    <h2>Week 1 | 02 t/m 06 december</h2>
    <p style="margin-top: 1.25rem;">
        Deze sprint richten we ons op creative coding. <strong>Coding Spike:</strong> Experimenteer met leuke, speelse code die niet per se functioneel hoeft te zijn.
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
		<li>Positie op scherm </li>
		<li>Witruimte</li>
		<li>Kleur en contrast</li>
		<li>Animatie</li>
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
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(5px, 5px) rotate(5deg); }
  50% { transform: translate(0, 0) rotate(0eg); }
  75% { transform: translate(-5px, 5px) rotate(-5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
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
