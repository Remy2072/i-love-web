import { json } from '@sveltejs/kit';
import {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	SPOTIFY_REFRESH_TOKEN
} from '$env/static/private';

export async function GET() {
	try {
		console.log('Client ID:', SPOTIFY_CLIENT_ID);
		console.log('Client Secret:', SPOTIFY_CLIENT_SECRET);
		console.log('Refresh Token:', SPOTIFY_REFRESH_TOKEN);

		const response = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization:
					'Basic ' + Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64')
			},
			body: new URLSearchParams({
				grant_type: 'refresh_token',
				refresh_token: SPOTIFY_REFRESH_TOKEN
			})
		});

		const data = await response.json();

		if (data.error) {
			console.error('Spotify API Error:', data);
			return json({ error: data.error, description: data.error_description }, { status: 400 });
		}

		return json(data);
	} catch (error) {
		console.error('Error:', error);
		return json({ error: 'Failed to fetch access token' }, { status: 500 });
	}
}
