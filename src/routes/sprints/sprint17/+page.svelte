<div class="container">
    <div class="title">
        <p class="emoji">💁🏼‍♀️</p>
        <h1>User Needs</h1>
        <small>Sprint 17</small>
    </div>
	<h2 class="inhoud">Inhoudsopgave</h2>
    <ul>
        <li>Repositories</li>
        <li>
            Week 1
            <ul>
				<!-- <li></li> -->
            </ul>
        </li>
        <li>
            Week 2
            <ul>
				<!-- <li></li> -->
            </ul>
        </li>
        <li>
            Week 3
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
		list-style-type: disc;
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
