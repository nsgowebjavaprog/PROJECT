console.log("WEL-COME--->SPOTIFY");

//iNITIALIZATION OF vARIABLES
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myprogressbar');

let songs =[
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath:"hindi_song/.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath:"hindi_song/.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath:"hindi_song/.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath:"hindi_song/.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath:"hindi_song/.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath:"hindi_song/.jpg"},
    
]
//audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

//Lister to event
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
})