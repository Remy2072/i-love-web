<script>
	import { onMount } from 'svelte';
	let track = null;
	let error = null;
	let loading = true;
	let isPlaying = false;

	async function fetchCurrentTrack() {
		try {
			// Get access token
			const tokenRes = await fetch('/api/spotify-token');
			const { access_token } = await tokenRes.json();

			// Fetch current playback state
			const playbackRes = await fetch('https://api.spotify.com/v1/me/player', {
				headers: {
					Authorization: `Bearer ${access_token}`
				}
			});

			if (playbackRes.status === 200) {
				const playbackData = await playbackRes.json();
				isPlaying = playbackData.is_playing;
				track = { track: playbackData.item };
			} else {
				// If nothing is playing, fallback to most recent track
				const recentRes = await fetch(
					'https://api.spotify.com/v1/me/player/recently-played?limit=1',
					{
						headers: {
							Authorization: `Bearer ${access_token}`
						}
					}
				);
				if (!recentRes.ok) throw new Error('Failed to fetch track');
				const data = await recentRes.json();
				track = data.items[0];
				isPlaying = false;
			}
		} catch (err) {
			error = err.message;
		} finally {
			loading = false;
		}
	}

	onMount(() => {
		fetchCurrentTrack();
		const interval = setInterval(fetchCurrentTrack, 1000);
		return () => clearInterval(interval);
	});
</script>

{#if loading}
	<div class="spotify">
		<div class="container-1">
			<h2>Onlangs beluisterd</h2>
			<strong>Loading...</strong>
			<span>Please wait</span>
		</div>
	</div>
{:else if error}
	<div class="spotify">
		<div class="container-1">
			<h2>Error</h2>
			<strong>{error}</strong>
			<span>Please try again later</span>
		</div>
	</div>
{:else if track}
	<div class="spotify">
		<div class="container-1">
			<h2>{isPlaying ? 'Nu aan het luisteren' : 'Onlangs beluisterd'}</h2>
			<strong>{track.track.name}</strong>
			<span>{track.track.artists[0].name}</span>
		</div>
		<div class="container-2">
			<img
				class="img-1 {isPlaying ? 'spinning' : ''}"
				src={track.track.album.images[0].url}
				alt={track.track.name}
			/>
			<img class="img-2" src="/img/record.png" alt="record" />
		</div>
	</div>
{/if}

<style>
	.spotify {
		background-color: var(--pale-frost);
		border-radius: 1.25rem;
		box-shadow: var(--box-shadow-hero);
		width: 100%;
		display: flex;
		flex-direction: row;
		position: relative;
	}

	.container-1 {
		padding: 22px 0 22px 25px;
		display: flex;
		flex-direction: column;
		height: 100%;
		gap: 5px;
	}

	h2 {
		font-size: 1rem;
		font-weight: var(--font-weight-medium);
		color: var(--dusty-lavender);
	}

	strong {
		font-size: 1.5rem;
		font-weight: var(--font-weight-semi-bold);
		color: var(--slate-blue);
		margin-top: auto;
	}

	span {
		font-size: 14px;
		color: var(--dusty-lavender);
	}

	.container-2 {
		position: absolute;
		top: 50%;
		right: 4rem;
		display: grid;
		place-items: center;
		transform: translateY(-50%);
	}

	@media (min-width: 900px) {
		.container-2 {
			right: 1.5rem;
		}
	}

	@media (min-width: 950px) {
		.container-2 {
			right: 2rem;
		}
	}

	.img-1 {
		position: absolute;
		width: 50px;
		height: 50px;
		z-index: 1;
		border-radius: 50%;
		transition: transform 0.3s ease;
	}

	.img-1.spinning {
		animation: spin 5s linear infinite;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@media (min-width: 900px) {
		.img-1 {
			width: 60px;
			height: 60px;
		}
	}

	.img-2 {
		position: absolute;
		width: 95px;
		height: 95px;
	}

	@media (min-width: 900px) {
		.img-2 {
			width: 110px;
			height: 110px;
		}
	}
</style>
