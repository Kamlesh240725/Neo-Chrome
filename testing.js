// document.body.innerHTML = `<p style="position: absolute; z-index: 10; color: #42f560; top: 300px; left:700px; font-size: 100px; opacity: 0.8" >Testing</p>` + document.body.innerHTML
document.querySelector("title").innerHTML = `Testing`;

//.
//.Work on hide unhide scrollbar
//.
//.
//.
//.
//.
//.
//.
//.
let songName = document.getElementById('song-name');
let songCover = document.querySelector('.audio-thumbnail');
let songAudio = document.querySelector('.spotify-audio');

const requestUrl = "https://v1.nocodeapi.com/kamlesh/spotify/RwVAlgnWVnpUYCja/usersTop?type=tracks&perPage=5"

const xhr = new XMLHttpRequest;
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState == 4 && xhr.status == 200){
        spotifysong()
    }
}
xhr.open('GET', requestUrl);
xhr.send()

function spotifysong() {
    let data = xhr.responseText
        let newData = JSON.parse(data);
        let songone = newData.items[2];
        console.log(songone.name);
        songURL = songone.preview_url;
        imgURL = songone.album.images[0].url;
        console.log(songURL);
        console.log(imgURL);
        songName.innerHTML = `${songone.name}`;
        songCover.style.backgroundImage = `url("${imgURL}")`;
        songAudio.src = songURL;
}


