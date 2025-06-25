<div class="container">
	<div class="title">
		<p class="emoji">⭕️</p>
		<h1>Tic Tac Toe</h1>
		<small>Personal</small>
	</div>
	<img src="/img/tictactoe.png" alt="Screenshot van tic tac toe pagina" />
	<h3>Bekjik hier</h3>
	<a href="https://github.com/Remy2072/tic-tac-toe" target="_blank">Github</a>
	<a href="https://remy-tic-tac-toe.vercel.app" target="_blank">Live omgeving</a>
	<h3>Tech-stack</h3>
	<ul class="tech-stack">
		<li class="tech-stack-list react">React</li>
		<li class="tech-stack-list html">HTML</li>
		<li class="tech-stack-list css">CSS</li>
		<li class="tech-stack-list js">JavaScript</li>
		<li class="tech-stack-list node">Node</li>
	</ul>
	<h3>Het project</h3>
	<p>
		Op mijn afgelopen stage kwam ik in een project waar react als framework werd gebruikt. Ik had
		nog nooit met React gewerkt, dus ik besloot om een klein project te maken om de basis van React
		te leren. Ik heb gekozen voor de klassieker Tic Tac Toe. Het project is volledig opgebouwd met
		React en is een leuke manier om de basisprincipes van React te leren. Het project bevat een
		eenvoudige gebruikersinterface en maakt gebruik van state management om de voortgang van het
		spel bij te houden. Het is een geweldige manier om te leren werken met componenten, props en
		state in React.
	</p>
</div>

<style>
	.tech-stack {
		margin-top: 0.5rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		align-items: center;
		list-style: none;
		padding: 0;
	}

	.tech-stack-list {
		font-size: 1rem;
		border-radius: 10rem;
		padding: 0.1rem 1rem;
		font-size: 1.25rem;
		margin-bottom: 0;
	}

	.html {
		background-color: #f16f4d;
		color: #ffffff;
	}

	.css {
		background-color: #489bef;
		color: #ffffff;
	}

	.js {
		background-color: #fff68f;
		color: #333333;
	}

	.node {
		background-color: #67b26f;
		color: #ffffff;
	}

	.react {
		background-color: #80d8ff;
		color: #0d1c2f;
	}

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

		.tech-stack {
			flex-wrap: nowrap;
		}
	}

	@media (min-width: 1300px) {
		.container {
			padding: 0 35%;
		}
	}
</style>
