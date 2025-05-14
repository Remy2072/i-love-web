<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	const DAYS = ['ZONDAG', 'MAANDAG', 'DINSDAG', 'WOENSDAG', 'DONDERDAG', 'VRIJDAG', 'ZATERDAG'];
	const UPDATE_INTERVAL = 60000;

	let currentDate = browser ? new Date() : null;
	let interval;

	$: dayName = currentDate ? DAYS[currentDate.getDay()] : '';
	$: dayNumber = currentDate ? currentDate.getDate() : '';

	const trainingSchema = [
		{ day: 'MAANDAG', workout: 'Chest Day', time: null },
		{ day: 'DINSDAG', workout: 'Pull Day', time: null },
		{ day: 'WOENSDAG', workout: 'Leg Day', time: null },
		{ day: 'DONDERDAG', workout: 'Chest Day', time: null },
		{ day: 'VRIJDAG', workout: 'Pull Day', time: null },
		{ day: 'ZATERDAG', workout: 'Werken', time: '16:00 - 21:00' },
		{ day: 'ZONDAG', workout: 'Werken', time: '16:00 - 21:00' }
	];

	$: currentTraining = trainingSchema.find((item) => item.day === dayName);

	onMount(() => {
		if (browser) {
			interval = setInterval(() => {
				currentDate = new Date();
			}, UPDATE_INTERVAL);
		}
	});

	onDestroy(() => {
		if (interval) clearInterval(interval);
	});
</script>

<aside class="calendar-widget">
	<time datetime={currentDate?.toISOString().slice(0, 10)} class="calendar-date">
		<span>{dayName}</span>
		<strong>{dayNumber}</strong>
	</time>

	<h2>VANDAAG</h2>

	{#if currentTraining}
		<article class="calendar-event">
			<div class="calandar-event-wrapper">
				<h3>{currentTraining.workout}</h3>
				{#if currentTraining.time}
					<time datetime="16:00-21:00">{currentTraining.time}</time>
				{:else}
					<time datetime="12:00-13:00">12:00 - 13:00</time>
				{/if}
			</div>
		</article>
	{/if}

	<div class="calendar-summary">
		<p>Nog 1 activiteit</p>
	</div>
</aside>

<style>
	.calendar-widget {
		--color-primary: #9974d1;
		--color-secondary: #eb2329;
		--color-text: #68646f;
		--border-radius: 1.25rem;
		--border-radius-sm: 4px;

		box-shadow: var(--box-shadow-card);
		background: linear-gradient(149deg, rgba(255, 255, 255, 1) 0%, rgba(237, 241, 242, 1) 100%);
		border-radius: var(--border-radius);
		padding: 35px;
	}

	.calendar-date {
		display: block;
	}

	.calendar-date span {
		display: block;
		font-size: 18px;
		font-weight: 700;
		color: var(--color-secondary);
	}

	.calendar-date strong {
		display: block;
		font-size: 75px;
		font-weight: 600;
		color: #000;
	}

	.calendar-widget h2 {
		font-size: 18px;
		font-weight: 600;
		color: rgba(104, 100, 111, 0.75);
	}

	.calendar-event {
		width: 100%;
		position: relative;
		margin-top: 8px;
		padding-left: 6px;
	}

	.calendar-event::before {
		content: '';
		width: 3px;
		height: 100%;
		background-color: var(--color-primary);
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 99px;
	}

	.calandar-event-wrapper {
		padding: 4px 0 7px 10px;
		background: linear-gradient(
			90deg,
			rgba(186, 154, 234, 0.25) 0%,
			rgba(153, 116, 209, 0.25) 100%
		);
		border-radius: var(--border-radius-sm);
	}

	.calendar-event h3 {
		font-size: 20px;
		font-weight: 500;
		color: var(--color-primary);
	}

	.calendar-event time {
		display: block;
		font-size: 14px;
		margin-top: 2px;
		color: var(--color-primary);
	}

	.calendar-summary {
		margin-top: 10px;
		position: relative;
		padding-left: 6px;
	}

	.calendar-summary::before {
		content: '';
		position: absolute;
		width: 3px;
		height: 100%;
		top: 0;
		left: 0;
		background-color: #36a9e9;
		border-radius: 99px;
	}

	.calendar-summary p {
		color: var(--color-text);
		opacity: 0.45;
		font-weight: 400;
	}
</style>
