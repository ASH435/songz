let tracks = [];

async function loadTracks() {
    try {
        const response = await fetch('tracks.json');
        tracks = await response.json();
        renderTracks();
        // Select first track
        if (tracks.length > 0) {
            const firstItem = document.querySelector('.track-item');
            if (firstItem) selectTrack(tracks[0], firstItem);
        }
    } catch (error) {
        console.error("Error loading tracks:", error);
    }
}

const tracklistElement = document.getElementById('tracklist');
const searchInput = document.getElementById('search');
const currentTitle = document.getElementById('current-title');
const currentArtist = document.getElementById('current-artist');

function renderTracks(filter = "") {
    tracklistElement.innerHTML = "";
    const filteredTracks = tracks.filter(track => 
        track.title.toLowerCase().includes(filter.toLowerCase()) || 
        track.artist.toLowerCase().includes(filter.toLowerCase())
    );

    filteredTracks.forEach((track, index) => {
        const item = document.createElement('div');
        item.className = 'track-item';
        item.innerHTML = `
            <div class="track-icon"><i class="fas fa-music"></i></div>
            <div class="track-details">
                <div class="track-name">${track.title}</div>
                <div class="track-artist">${track.artist}</div>
            </div>
        `;
        item.onclick = () => selectTrack(track, item);
        tracklistElement.appendChild(item);
    });
}

function selectTrack(track, element) {
    document.querySelectorAll('.track-item').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
    currentTitle.textContent = track.title;
    currentArtist.textContent = track.artist;
}

searchInput.addEventListener('input', (e) => {
    renderTracks(e.target.value);
});

// Initial Load
loadTracks();
