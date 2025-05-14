<script>
	import Svg from '../../lib/utils/Svg.svelte';

	import 'leaflet/dist/leaflet.css';
	import { onMount, onDestroy } from 'svelte';

	let mapDiv;
	let leafletMap;

	let latitude = 52.398808;
	let longitude = 4.937553;
	let popupText = 'Amsterdam Noord';

	function openGoogleMaps() {
		const encodedAddress = encodeURIComponent(popupText);
		const googleMapsUrl = `https://www.google.com/maps?q=${encodedAddress}`;
		window.open(googleMapsUrl, '_blank');
	}

	onMount(async () => {
		const L = await import('leaflet');

		// Create custom marker icon
		const customIcon = L.divIcon({
			className: 'custom-marker',
			html: `<svg width="25" height="41" viewBox="0 0 25 41" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M12.5 0C5.59644 0 0 5.59644 0 12.5C0 21.875 12.5 41 12.5 41C12.5 41 25 21.875 25 12.5C25 5.59644 19.4036 0 12.5 0ZM12.5 17C10.0147 17 8 14.9853 8 12.5C8 10.0147 10.0147 8 12.5 8C14.9853 8 17 10.0147 17 12.5C17 14.9853 14.9853 17 12.5 17Z" fill="#1b9cb7"/>
			</svg>`,
			iconSize: [25, 41],
			iconAnchor: [12.5, 41],
			popupAnchor: [0, -41]
		});

		leafletMap = L.map(mapDiv, {
			attributionControl: false
		}).setView([latitude, longitude], 15);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: ''
		}).addTo(leafletMap);

		// Use the custom icon for the marker
		L.marker([latitude, longitude], { icon: customIcon })
			.addTo(leafletMap)
			.bindPopup(popupText)
			.openPopup();

		setTimeout(() => {
			leafletMap.invalidateSize();
		}, 0);
	});

	onDestroy(() => {
		if (leafletMap) {
			leafletMap.remove();
		}
	});
</script>

<svelte:head>
	<title>Remy Duivesteijn</title>
	<meta name="description" content="Remy Duivesteijn's Portfolio" />
</svelte:head>

<section class="top-grid">
	<div class="one">
		<span class="hello gray">Hallo daar! 👋🏼</span>
		<p class="text">
			Ik ben <span class="blue">Remy Duivesteijn,</span> een front-end developer en designer uit
			<span class="blue">Amsterdam.</span> Op dit moment zit ik in het laatste jaar van mijn
			opleiding
			<span class="blue">FDND</span> en loop ik stage bij <span class="blue">Hypersolid</span> in
			Alkmaar. Ik ben gespecialiseerd in <span class="blue">front-end development</span> van het ontwerpen
			tot bouwen van websites en webapplicaties.
		</p>
		<img src="/img/memoji.png" alt="Zelfportret van Remy Duivesteijn" />
	</div>

	<div class="two">
		<div bind:this={mapDiv} class="map-square" on:click={openGoogleMaps}></div>
	</div>

	<div class="three">
		<div class="linkedin"><Svg name="linkedin" /></div>
		<div class="github"><Svg name="github" /></div>
		<div class="discord"><Svg name="discord" /></div>
		<div class="email"><Svg name="email" /></div>
	</div>

	<div class="four">
		<span class="day">MAANDAG</span>
		<h2 class="date">5</h2>
		<h3 class="today">VANDAAG</h3>
		<div class="agenda-item">
			<h4 class="agenda-item-title">Chest Day</h4>
			<span class="agenda-item-time">12:00 - 13:00</span>
		</div>
		<div class="agenda-item-2">
			<h5 class="agenda-item-title-2">Nog 1 activiteit</h5>
		</div>
	</div>
</section>

<style>
	:global(.leaflet-control-container .leaflet-bottom.leaflet-right) {
		display: none;
	}

	/* Add styles for the custom marker */
	:global(.custom-marker) {
		background: none;
		border: none;
	}

	.top-grid {
		display: grid;
		width: 90%;
		max-width: 1050px;
		margin: 0 auto;
		margin-top: 3.125rem;
		grid-template-columns: 1fr;
		gap: 1rem;
		grid-auto-rows: 1fr; /* Ensures rows have equal height */
	}

	.one,
	.two {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%; /* Ensures they stretch to fill the row */
		z-index: 1;
	}

	.gray {
		color: #6e6e84;
	}

	.blue {
		color: #1b9cb7;
	}

	.one {
		background: var(--gradient-hero);
		position: relative;
		color: #6e6e84bf;
		padding: 20px;
		border-radius: 1.25rem;
		width: 100%;
		box-shadow: var(--box-shadow-card);
	}

	.hello {
		font-size: 1.5rem;
	}

	.text {
		margin-top: 10px;
		font-size: 1.2rem;
	}

	img {
		width: 100px;
		height: 99px;
		position: absolute;
		top: 0;
		transform: translateY(-52%);
		left: 66%;
	}

	.two {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 1.25rem;
		width: 100%;
		box-shadow: var(--box-shadow-card);
	}

	.map-square {
		width: 100%;
		height: 100%;
		min-width: 200px;
		min-height: 200px;
		cursor: pointer;
		border-radius: 1.25rem;
		width: 100%;
		box-shadow: var(--box-shadow-card);
	}
	.three {
		display: grid;
		padding: 35px;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: auto;
		gap: 1.25rem;
		border-radius: 1.25rem;
		width: 100%;
		box-shadow: var(--box-shadow-card);
		background-color: #f0f3f3;
	}

	.linkedin,
	.github,
	.discord,
	.email {
		display: flex; /* Enables flexbox */
		align-items: center; /* Centers content vertically */
		justify-content: center; /* Centers content horizontally */
		border-radius: 7.5px;
		box-shadow: var(--box-shadow-button);
		width: 100%; /* Ensure the div takes full width */
		height: 100%; /* Ensure the div takes full height */
	}

	.linkedin {
		background: linear-gradient(149deg, rgba(0, 102, 152, 1) 0%, rgba(0, 102, 152, 1) 100%);
	}

	.github {
		background: linear-gradient(149deg, rgba(111, 65, 194, 1) 0%, rgba(138, 87, 230, 1) 100%);
	}

	.discord {
		background: linear-gradient(149deg, rgba(88, 101, 242, 1) 0%, rgba(125, 135, 247, 1) 100%);
	}

	.email {
		background: linear-gradient(149deg, rgba(237, 241, 242, 1) 0%, rgba(255, 255, 255, 1) 100%);
	}

	.four {
		box-shadow: var(--box-shadow-card);
		background: linear-gradient(149deg, rgba(255, 255, 255, 1) 0%, rgba(237, 241, 242, 1) 100%);
		border-radius: 1.25rem;
		padding: 35px;
	}
	.day {
		font-size: 18px;
		font-weight: 700;
		color: #eb2329;
	}

	.date {
		font-size: 75px;
		font-weight: 600;
		color: #000;
	}

	.today {
		font-size: 18px;
		font-weight: 600;
		color: rgba(104, 100, 111, 0.75);
	}

	.agenda-item {
		width: 100%;
		background: linear-gradient(
			90deg,
			rgba(186, 154, 234, 0.25) 0%,
			rgba(153, 116, 209, 0.25) 100%
		);
		border-radius: 4px;
		padding: 4px 0 7px 10px; /* Increased padding-left to 14px for 2px space */
		position: relative;
		margin-top: 8px;
	}

	.agenda-item::before {
		content: '';
		width: 3px;
		height: 100%;
		background-color: #9974d1;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 99px;
	}

	.agenda-item-title {
		font-size: 20px;
		font-weight: 500;
		color: #9974d1;
	}

	.agenda-item-time {
		font-size: 14px;
		margin-top: 2px;
		color: #9974d1;
	}

	.agenda-item-2 {
		margin-top: 10px;
		position: relative;
		color: #68646f73;
	}

	.agenda-item-2::before {
		content: '';
		position: absolute;
		width: 3px;
		height: 100%;
		top: 0;
		left: 0;
		background-color: #36a9e9;
		border-radius: 99px;
	}

	.agenda-item-title-2 {
		padding-left: 10px;
		font-weight: 400;
	}
</style>
