const tracks = [
    { title: "From The Start", artist: "Laufey" },
    { title: "Haseen", artist: "Talwiinder, NDS, Rippy Grewal" },
    { title: "blue", artist: "yung kai" },
    { title: "Samjho Na", artist: "Aditya Rikhari" },
    { title: "Sahiba", artist: "Aditya Rikhari" },
    { title: "Aaoge Tum Kabhi", artist: "The Local Train" },
    { title: "Die With A Smile", artist: "Lady Gaga, Bruno Mars" },
    { title: "Line Without a Hook", artist: "Ricky Montgomery" },
    { title: "Past Lives", artist: "sapientdream, Slushii" },
    { title: "Dandelions", artist: "Ruth B." },
    { title: "Jo Tum Mere Ho", artist: "Anuv Jain" },
    { title: "Lover Girl", artist: "Laufey" },
    { title: "Sailor Song", artist: "Gigi Perez" },
    { title: "I Think They Call This Love", artist: "Elliot James Reay" },
    { title: "Trouble", artist: "Frank" },
    { title: "Perfect", artist: "Ed Sheeran" },
    { title: "Stephanie", artist: "Nafeesisboujee" },
    { title: "I Wanna Be Yours", artist: "Arctic Monkeys" },
    { title: "Night Changes", artist: "One Direction" },
    { title: "back to friends", artist: "sombr" },
    { title: "bargad", artist: "sufr, Arpit Bala, toorjo dey" },
    { title: "LET THE WORLD BURN", artist: "Chris Grey" },
    { title: "Unakkul Naane", artist: "Harris Jayaraj, Rohini, Pritt, dilushselva" },
    { title: "Jhol (Acoustic)", artist: "Maanu, Annural Khalid, Abdullah Siddiqui" },
    { title: "Finding Her", artist: "Kushagra, Bharath, Saaheal" },
    { title: "Dekha Hi Nahi", artist: "Osho Jain" },
    { title: "Paaro", artist: "Aditya Rikhari" },
    { title: "Snowman", artist: "Sia" },
    { title: "Rakhlo Tum Chupaake", artist: "Arpit Bala, Adil" },
    { title: "Dooron Dooron (Unplugged)", artist: "Paresh Pahuja, Shiv Tandan" }
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

    // Optional: You could update the Spotify iframe URL to play the specific track 
    // if you had individual track IDs. For now, we keep the playlist embed.
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
