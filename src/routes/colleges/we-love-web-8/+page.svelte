<div class="container">
	<div class="title">
		<p class="emoji">💜</p>
		<h1>Cassie Evans</h1>
		<small>Sprint 19</small>
	</div>

	<h2 class="inhoud">We 💜 Web met Cassie Evans</h2>

<div>
    <h3>Over Cassie Evans</h3>
    <ul>
        <li>
            Expertise: 
            <ul>
                <li>Gespecialiseerd in web animaties</li>
                <li>Expert in GSAP (GreenSock Animation Platform)</li>
            </ul>
        </li>
    </ul>

    <h3>Wat is GSAP?</h3>
    <p>
        GSAP is een uitgebreid framework waarmee je UI, 2D en 3D elementen kunt animeren. Het biedt een complete toolbox voor animaties met:
    </p>
    <ul>
        <li>
            <strong>Methoden en doelen:</strong>
            <ul>
                <li>Positie en richting bepaling</li>
                <li>Scroll-gebaseerde animaties</li>
                <li>Container animaties</li>
            </ul>
        </li>
    </ul>

    <h3>GSAP Utils</h3>
    <p>
        GSAP biedt verschillende utility functies om code efficiënter te maken:
    </p>
    <ul>
        <li>
            <strong>Beschikbare Utils:</strong>
            <ul>
                <li>utils.random() - Voor willekeurige waarden</li>
                <li>utils.mapRange() - Voor het mappen van bereiken</li>
                <li>utils.wrap() - Voor het omwikkelen van waarden</li>
                <li>utils.pipe() - Voor het combineren van functies</li>
            </ul>
        </li>
    </ul>

    <h3>Animatie Tips</h3>
    <ul>
        <li>
            <strong>Easing:</strong>
            <ul>
                <li>Gebruik de Ease Visualizer voor het perfect afstemmen van animaties</li>
                <li>Experimenteer met glitch-effecten via easing</li>
            </ul>
        </li>
        <li>
            <strong>Responsive Animaties:</strong>
            <ul>
                <li>Gebruik matchMedia voor schermgrootte-specifieke animaties</li>
                <li>Implementeer verschillende animaties voor verschillende gebruikersvoorkeuren</li>
            </ul>
        </li>
    </ul>

    <h3>Control Methods</h3>
    <ul>
        <li>
            <strong>Beschikbare methoden:</strong>
            <ul>
                <li>play() - Start de animatie</li>
                <li>pause() - Pauzeert de animatie</li>
                <li>resume() - Hervat de animatie</li>
                <li>reverse() - Keert de animatie om</li>
                <li>restart() - Herstart de animatie</li>
            </ul>
        </li>
    </ul>

    <h3>Timeline Features</h3>
    <ul>
        <li>
            <strong>Mogelijkheden:</strong>
            <ul>
                <li>Container animaties voor geneste effecten</li>
                <li>Motion paths voor complexe bewegingen</li>
                <li>Enter en exit animaties</li>
            </ul>
        </li>
    </ul>
</div>
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
