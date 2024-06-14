let allSongs = document.querySelectorAll(".songs_container");
let audioApp = document.querySelector("#player");
let playerImage = document.querySelector("#player-image");


allSongs.forEach((song)=>{
    song.addEventListener("click", (e)=>{
        e.preventDefault();
       audioApp.src=e.target.href; //Sending the selected song to the player

    // Changing the player image to the selected music image
    let currentImgSrc = e.target.firstElementChild.currentSrc;
    playerImage.src=currentImgSrc;
    
    // Updating the play discription
    let songName = e.target.lastElementChild.firstElementChild;
    let artistName = e.target.lastElementChild.firstElementChild.nextElementSibling;

    let discription=document.getElementById("discription_section");
    discription.innerHTML=` <h4>${songName.innerHTML}</h4>
                            <p>${artistName.innerHTML}</p>`
    })
})

//Making the player Play/Pause button to be toggling dynamically 
let playPause = document.getElementById("play-pause");
playPause.addEventListener("click", (e)=>{
    document.getElementById("play-pause").classList.toggle("fa-play");
})

//Creating the play function
function playSong(){

}

//Creating pause function
function pauseSong(){

}

//Function to Next the song
function nextSong(){

}

//functionto Previous song
function previousSong(){
    
}