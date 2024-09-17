import {songs} from "./songList.js";
let displaySongsE = document.getElementById("displaySongs");
let songImg = document.getElementsByClassName("songImg")[0]; // Assuming you want to target the first element with the class 'songImg'
let songNameEl = document.getElementsByClassName("songName")[0];
let artistNameEl = document.getElementsByClassName("artistName")[0];
let audioEl = document.getElementById("audioControler");
let leftButton = document.querySelector(".leftButton");
let rightButton = document.querySelector(".rightButton");

let addToPlayListButton = document.querySelector(".addToPlayListButton");

let CurrentPlaylist = document.querySelector("#CurrentPlaylist");

let currentSongIndex = 0; // Initialize current song index
displaySongsE.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    // Check if the clicked element is a button
    let index = Array.from(displaySongsE.querySelectorAll("button")).indexOf(
      event.target
      );
    let filteredSongs = songs.filter(song => song.genre === "all"); // Example: Adjust this according to your filtering logic
    displaySong(filteredSongs[index]);
  }
});
// Function to display song based on index
export function displaySong(index) {
  let song = songs[index];
  if (song) {
    // Create an image element
    let songSrc = document.createElement("img");
    songSrc.src = song.image;
    songSrc.alt = song.title; // Optionally set alt text
    songImg.innerHTML = ""; // Clear previous content
    // Append the image to the songImg container
    songImg.appendChild(songSrc);

    // Creating a paragraph element for song name
    let songName = document.createElement("p");
    songNameEl.innerHTML = "";
    songName.textContent = song.title;
    songNameEl.appendChild(songName);

    // Creating a paragraph element for artist name
    let artistName = document.createElement("p");
    artistNameEl.innerHTML = ""; //clear previous content
    artistName.textContent = song.artist; // setting content of paragraph
    artistNameEl.appendChild(artistName);//Apending para elment

    // Creating an audio element for song
    let audio = document.createElement("audio");
    audio.src = song.url;
    audio.controls = true;
    audioEl.innerHTML = "";
    audioEl.appendChild(audio);

    currentSongIndex = index; // Update current song index
  }
}

// Display the first song when the page loads
document.addEventListener("DOMContentLoaded", function () {
  displaySong(currentSongIndex);
});

// Event listener for next button
rightButton.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length; // Increment index and loop back to 0 if it exceeds array length
  displaySong(currentSongIndex);
});

// Event listener for previous button
leftButton.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Decrement index and loop back to end of array if it goes below 0
  displaySong(currentSongIndex);
});

// for adding song in playlist operation is witten over here

let playListSongs = [];
addToPlayListButton.addEventListener("click", (evnt) => {
  let currentSongTitle = songs[currentSongIndex].title;
  let isSongInPlayList = playListSongs.includes(currentSongTitle);
  console.log(isSongInPlayList);
  if (!isSongInPlayList) {
    let song = document.createElement("button");
    song.textContent = currentSongTitle;
    song.style =
      "width:90%;display:block;margin:5px; background-color:#0D81BC; color:#fff;text-align: center;border-radius:5px; height:40px";
    CurrentPlaylist.appendChild(song);
    playListSongs.push(currentSongTitle);
  }
});
