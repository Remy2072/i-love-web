<div class="container">
	<div class="title">
		<p class="emoji">🗓️</p>
		<h1>Kalender</h1>
		<small>Heineken</small>
	</div>
	<video controls src="/img/kalender-demo.mov">
		<track
			kind="captions"
			src="/captions/kalender-demo.vtt"
			srclang="nl"
			label="Nederlands"
			default
		/>
	</video>
	<em class="note">
		Helaas, dit project staat in een privé-repository en is alleen zichtbaar voor gebruikers met een
		Heineken-account.
	</em>
	<h3>Tech-stack</h3>
	<ul class="tech-stack">
		<li class="tech-stack-list react">React</li>
		<li class="tech-stack-list html">HTML</li>
		<li class="tech-stack-list css">CSS</li>
		<li class="tech-stack-list ts">TypeScript</li>
		<li class="tech-stack-list node">Node</li>
		<li class="tech-stack-list figma">Figma</li>
	</ul>
	<h3>Het project</h3>
	<p>
		Tijdens mijn stage bij Triple heb ik gewerkt aan een project voor Heineken. Het
		Heineken-platform is opgebouwd als een monorepo waarin vier websites zijn ondergebracht. Voor
		mijn afstudeeropdracht heb ik een agenda ontwikkeld. Heineken gebruikte op dat moment een
		eenvoudige lijstweergave voor afspraken, maar deze voldeed niet aan hun wensen. Ik heb een
		volledige kalenderfunctionaliteit gebouwd waarin je afspraken kunt maken, bewerken, starten en
		verwijderen. Gebruikers kunnen vooruit én terugkijken in hun agenda, met verschillende weergaven
		zoals een weekview en een werkweekview. De kalender is ontwikkeld met de React Big
		Calendar-package. Deze heb ik zorgvuldig gekozen na uitgebreid onderzoek, onderbouwd met een
		decision record.
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

	.note {
		color: rgba(110, 110, 132, 0.6);
		font-weight: 400;
		margin-top: 1.25rem;
	}

	.html {
		background-color: #f16f4d;
		color: #ffffff;
	}

	.css {
		background-color: #489bef;
		color: #ffffff;
	}

	.node {
		background-color: #67b26f;
		color: #ffffff;
	}

	.figma {
		background-color: #ff9073;
		color: #ffffff;
	}

	.react {
		background-color: #80d8ff;
		color: #0d1c2f;
	}

	.ts {
		background-color: #7daeff;
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

	video {
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
