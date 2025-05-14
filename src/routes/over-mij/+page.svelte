<script>
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
		<img src="/img/memoji.png" alt="svg van zelfportret" />
	</div>

	<div class="two">
		<div bind:this={mapDiv} class="map-square" on:click={openGoogleMaps}></div>
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
	}

	div {
		width: 100%;
		box-shadow: var(--box-shadow-card);
		border-radius: 1.25rem;
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
		z-index: 1;
	}

	.map-square {
		width: 100%;
		height: 100%;
		min-width: 200px;
		min-height: 200px;
		cursor: pointer;
	}
</style>
