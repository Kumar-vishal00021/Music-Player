let themeButtonEl = document.getElementById('themeButton');
let isDarkTheme = true;

themeButtonEl.addEventListener('click', toggleDark);


function toggleDark() {
    let backgroundColorEl = document.querySelector('html');
    let headingBackgroundEl = document.querySelector('#heading');
    let allSongEl = document.querySelector('.all-song');
    let cardEl = document.querySelector('.card');
    let playlistEl = document.querySelector('.playlist');
    let buttons = document.querySelectorAll('#displaySongs button');
    

    if (!isDarkTheme) {
        // Set light theme styles
        themeButtonEl.style.justifyContent = 'start';
        backgroundColorEl.style.backgroundColor = 'white';
        headingBackgroundEl.style.color = 'black';
        allSongEl.style.backgroundColor = '#6BB8DE';
        allSongEl.style.color = 'black';
        cardEl.style.backgroundColor = '#6BB8DE';
        cardEl.style.color = 'black';
        playlistEl.style.backgroundColor = '#6BB8DE';
        playlistEl.style.color = 'black';

        // Set button background color directly
        buttons.forEach(button => {
            button.style.backgroundColor = '#0D81BC';
            button.style.color = 'black';
        });
        
    } else {
        // Set dark theme styles
        themeButtonEl.style.justifyContent = 'end';
        backgroundColorEl.style.backgroundColor = '#565657';
        headingBackgroundEl.style.color = 'white';
        allSongEl.style.backgroundColor = '#253238';
        allSongEl.style.color = 'white';
        cardEl.style.backgroundColor = '#253238';
        cardEl.style.color = 'white';
        playlistEl.style.backgroundColor = '#253238';
        playlistEl.style.color = 'white';

        // Set button background color directly
        buttons.forEach(button => {
            button.style.backgroundColor = '#64696C';
            button.style.color = 'white';
        });
    }

    // Update theme state
    isDarkTheme = !isDarkTheme;

    // Add transition
    document.documentElement.style.transition = 'all 1s ease';
    
}



