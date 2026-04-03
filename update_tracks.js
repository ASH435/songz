const axios = require('axios');
const fs = require('fs');

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const PLAYLIST_ID = '3QllcmYPOoH2MqwusMEHNn';

async function getAccessToken() {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');

    const response = await axios.post('https://accounts.spotify.com/api/token', params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')
        }
    });

    return response.data.access_token;
}

async function getPlaylistTracks(token) {
    const response = await axios.get(`https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/tracks`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    return response.data.items.map(item => ({
        title: item.track.name,
        artist: item.track.artists.map(a => a.name).join(', ')
    }));
}

async function update() {
    try {
        console.log("Fetching access token...");
        const token = await getAccessToken();
        console.log("Fetching tracks...");
        const tracks = await getPlaylistTracks(token);
        fs.writeFileSync('tracks.json', JSON.stringify(tracks, null, 4));
        console.log(`Successfully updated tracks.json with ${tracks.length} songs.`);
    } catch (error) {
        console.error("Error updating tracks:", error.response ? error.response.data : error.message);
        process.exit(1);
    }
}

update();
