import { displaySong } from "./card.js";
export const songs = [
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    year: 2017,
    url: "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav",
    image:
      "https://yt3.googleusercontent.com/emA0C_i9tUyJgxrfVpJ31e0QCU2MlovjYvQkAC9mDuSJyhl6h8PkFj5-ozRzz2vFtpbnls8s1W4=s900-c-k-c0x00ffffff-no-rj",
    genre: "Pop",
  },
  {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    year: 1975,
    url: "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuO2NBMWGSl57HQhJ0_Y0m6veJg3BrVIMsow&s",
    genre: "Rock",
  },
  {
    title: "Rolling in the Deep",
    artist: "Adele",
    album: "21",
    year: 2010,
    url: "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav",
    image:
      "https://cdn.britannica.com/98/163898-050-B2E2A704/British-sensation-Adele.jpg",
    genre: "Hip Hop",
  },
  {
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    album: "Uptown Special",
    year: 2014,
    url: "https://www2.cs.uic.edu/~i101/SoundFiles/Fanfare60.wav",
    image:
      "https://media.gettyimages.com/id/1354781447/photo/los-angeles-california-in-this-image-released-on-november-21-bruno-mars-of-silk-sonic-perform.jpg?s=612x612&w=gi&k=20&c=XBZFmyvVsYopjRLbrKmLMD1gMBj0yB3O_-Jmc5dd28A=",
    genre: "Pop",
  },
  {
    title: "Billie Jean",
    artist: "Michael Jackson",
    album: "Thriller",
    year: 1982,
    url: "https://www2.cs.uic.edu/~i101/SoundFiles/gettysburg10.wav",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2isidbdyIOtgySiywBBT38aZtdO-Yu4E4Ug&s",
    genre: "Rock",
  },
];


let genreOptionEl = document.getElementById("genreOption");
genreOptionEl.addEventListener("change", (event) => {
  let genre = event.target.value;
  songBygenre(genre);
});
let displaySongsEl = document.getElementById("displaySongs");
songBygenre("all");
function songBygenre(genre) {
  displaySongsEl.innerHTML = "";

  let filteredSongs = songs.filter((song) => {
    return genre === "all" || song.genre === genre;
  });
  filteredSongs.forEach((song, index) => {
    let songEl = document.createElement("button");
    songEl.style =
      "width:90%;display:block;margin:5px; background-color:#0D81BC; color:#fff;text-align: center;border-radius:5px; height:40px";
    songEl.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "#6AB8DE";
      this.style.cursor = "pointer";
    });
    songEl.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "#0D81BC";
    });
    songEl.innerText = song.title;
    songEl.addEventListener("click", myEventListenerFunction);
    function myEventListenerFunction() {
      displaySong(songs.indexOf(song));
    }
    displaySongsEl.appendChild(songEl);
  }); 
}

