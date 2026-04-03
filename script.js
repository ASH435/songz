const tracks = [
    { title: "From The Start", artist: "Laufey" },
    { title: "blue", artist: "yung kai" },
    { title: "Die With A Smile", artist: "Lady Gaga, Bruno Mars" },
    { title: "Line Without a Hook", artist: "Ricky Montgomery" },
    { title: "Past Lives", artist: "sapientdream, Slushii" },
    { title: "Dandelions", artist: "Ruth B." },
    { title: "Lover Girl", artist: "Laufey" },
    { title: "Sailor Song", artist: "Gigi Perez" },
    { title: "I Think They Call This Love", artist: "Elliot James Reay" },
    { title: "Trouble", artist: "Frank" },
    { title: "Perfect", artist: "Ed Sheeran" },
    { title: "Stephanie", artist: "Nafeesisboujee" },
    { title: "I Wanna Be Yours", artist: "Arctic Monkeys" },
    { title: "Night Changes", artist: "One Direction" },
    { title: "back to friends", artist: "sombr" },
    { title: "LET THE WORLD BURN", artist: "Chris Grey" },
    { title: "Snowman", artist: "Sia" },
    // Trending English Additions
    { title: "360", artist: "Charli XCX" },
    { title: "Ordinary", artist: "Alex Warren" },
    { title: "Beautiful Things", artist: "Benson Boone" },
    { title: "Number One Girl", artist: "ROSÉ" },
    { title: "Dancing With Your Ghost", artist: "Sasha Alex Sloan" },
    { title: "APT.", artist: "ROSÉ & Bruno Mars" },
    { title: "Birds of a Feather", artist: "Billie Eilish" },
    { title: "Espresso", artist: "Sabrina Carpenter" },
    { title: "Please Please Please", artist: "Sabrina Carpenter" },
    { title: "Good Luck, Babe!", artist: "Chappell Roan" },
    { title: "Lose Control", artist: "Teddy Swims" },
    { title: "Too Sweet", artist: "Hozier" },
    { title: "Stick Season", artist: "Noah Kahan" },
    { title: "End of Beginning", artist: "Djo" },
    { title: "Murder on the Dancefloor", artist: "Sophie Ellis-Bextor" },
    { title: "Cruel Summer", artist: "Taylor Swift" },
    { title: "Greedy", artist: "Tate McRae" },
    { title: "Water", artist: "Tyla" }
];

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
    // Update UI
    document.querySelectorAll('.track-item').forEach(el => el.classList.remove('active'));
    element.classList.add('active');

    // Update Now Playing
    currentTitle.textContent = track.title;
    currentArtist.textContent = track.artist;
}

searchInput.addEventListener('input', (e) => {
    renderTracks(e.target.value);
});

// Initial Render
renderTracks();
// Select the first track by default
if (tracks.length > 0) {
    setTimeout(() => {
        const firstItem = tracklistElement.querySelector('.track-item');
        if (firstItem) selectTrack(tracks[0], firstItem);
    }, 100);
}
