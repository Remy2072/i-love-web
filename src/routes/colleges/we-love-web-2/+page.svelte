<div class="container">
	<div class="title">
		<p class="emoji">❤️</p>
		<h1>Nicolas Garniert</h1>
		<small>Sprint 14</small>
	</div>

	<h2 class="inhoud">We ♥ Web met Nicolas Garniert</h2>

    <p>
        Na het einde van Flash begon JS overal ingezet te worden, en sinds 2018 is Nicolas freelancer in WebGL.
        Hij werkt voor agencies, productteams en start-ups als Creative Developer.
    </p>
    
    <h3>Creative Developer:</h3>
    <ul>
        <li>Een chique term voor een developer met oog voor creativiteit.</li>
        <li>Hij gebruikt alle beschikbare tools:</li>
    </ul>
    
    <h3>Websites, apps, installaties</h3>
    <ul>
        <li>Websites, apps, installaties</li>
        <li>JS, CSS, WebGL, Processing, Unity, GenAI, LLM, enz.</li>
        <li>In de kern draait het om: code, design, beweging en interactie.</li>
        <li>Storytelling op het web!</li>
    </ul>
    
    <h3>Creëer anticipatie en verrassing:</h3>
    <ul>
        <li>Ondersteun het verhaal en zet de sfeer</li>
        <li>Betrek de gebruiker</li>
        <li>Los een design- of technische uitdaging op</li>
    </ul>
    
    <h3>Conclusie:</h3>
    <ul>
        <li>Zie animaties en interacties als een verlengstuk van je oorspronkelijke intentie.</li>
        <li>Blijf open-minded.</li>
        <li>Vraag jezelf af wat het toevoegt en vraag om feedback.</li>
        <li>Wees bereid er veel tijd in te steken.</li>
    </ul>

    <a href="https://nico.computer/">Portfolio</a>
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