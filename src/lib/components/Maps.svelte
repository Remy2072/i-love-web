<script>
	import 'leaflet/dist/leaflet.css';
	import { onMount, onDestroy } from 'svelte';

	const LOCATION = {
		latitude: 52.398808,
		longitude: 4.937553,
		name: 'Amsterdam Noord',
		zoom: 15
	};

	let mapContainer;
	let leafletMap;

	function navigateToGoogleMaps() {
		const encodedAddress = encodeURIComponent(LOCATION.name);
		const googleMapsUrl = `https://www.google.com/maps?q=${encodedAddress}`;
		window.open(googleMapsUrl, '_blank');
	}

	const createCustomMarkerIcon = (L) => {
		return L.divIcon({
			className: 'map-marker',
			html: `
                <svg width="25" height="41" viewBox="0 0 25 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 0C5.59644 0 0 5.59644 0 12.5C0 21.875 12.5 41 12.5 41C12.5 41 25 21.875 25 12.5C25 5.59644 19.4036 0 12.5 0ZM12.5 17C10.0147 17 8 14.9853 8 12.5C8 10.0147 10.0147 8 12.5 8C14.9853 8 17 10.0147 17 12.5C17 14.9853 14.9853 17 12.5 17Z" fill="#1b9cb7"/>
                </svg>
            `,
			iconSize: [25, 41],
			iconAnchor: [12.5, 41],
			popupAnchor: [0, -41]
		});
	};

	const initializeMap = async () => {
		const L = await import('leaflet');

		leafletMap = L.map(mapContainer, {
			attributionControl: false
		}).setView([LOCATION.latitude, LOCATION.longitude], LOCATION.zoom);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: ''
		}).addTo(leafletMap);

		const customIcon = createCustomMarkerIcon(L);

		L.marker([LOCATION.latitude, LOCATION.longitude], { icon: customIcon })
			.addTo(leafletMap)
			.bindPopup(LOCATION.name)
			.openPopup();

		// Force map to recalculate its container's size
		requestAnimationFrame(() => {
			leafletMap.invalidateSize();
		});
	};

	onMount(initializeMap);

	onDestroy(() => {
		if (leafletMap) {
			leafletMap.remove();
		}
	});
</script>

<section class="map-container">
	<div
		bind:this={mapContainer}
		class="map-view"
		on:click={navigateToGoogleMaps}
		role="button"
		tabindex="0"
		aria-label={`View ${LOCATION.name} on Google Maps`}
	></div>
</section>

<style>
	/* Hide Leaflet attribution */
	:global(.leaflet-control-container .leaflet-bottom.leaflet-right) {
		display: none;
	}

	/* Custom marker styles */
	:global(.map-marker) {
		background: none;
		border: none;
	}

	.map-container {
		--border-radius: 1.25rem;

		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--border-radius);
		width: 100%;
		min-height: 18.75rem;
		box-shadow: var(--box-shadow-card);
		z-index: 1;
	}

	.map-view {
		width: 100%;
		height: 100%;
		min-width: 12.5rem;
		min-height: 12.5rem;
		cursor: pointer;
		border-radius: var(--border-radius);
		box-shadow: var(--box-shadow-card);
	}

	@media (prefers-reduced-motion: reduce) {
		.map-view {
			transition: none;
		}
	}
</style>
