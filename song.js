var songs = [];
var outputSongs = [];
var songInfo = document.getElementById("song-info");
var songInput = document.getElementById("song-input");
var controls = document.getElementById("controls");
var buttonAdd = document.getElementById("button-add");

var songAdd = document.getElementsByName("song-add");
var artistAdd = document.getElementsByName("artist-add");
var albumAdd = document.getElementsByName("album-add");
var genreAdd = document.getElementsByName("genre-add");

songs[songs.length] = "Rise - by Yoko Kanno on the album Ghost in the Shell OST";
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs[songs.length] = "Dare - by Gorillaz on the album Demon Days";

function filterSong(song) {
	song = song.replace(">", "-");
	song = song.replace(/[&\/\\#,+()!@$~%.*?{}]/g, '');
	console.log(song)
	return song;
}

for (var i = 0; i < songs.length; i++) {
	song = songs[i];

	song = filterSong(song);

	var songName = song.slice(0, song.indexOf("-")-1);
	var artistName = song.slice(song.indexOf("by")+3, song.indexOf("on the album"));
	var albumName = song.slice(song.indexOf("album")+6);

	outputSongs[i] = "<div class='song'><h2>" + songName + "</h2><ul><li>" + artistName + "</li><li class='middle'>" + albumName + "</li><li>Pop</li></ul></div>";
}

for (var j = 0; j < outputSongs.length; j++) {
	songInfo.innerHTML += outputSongs[j];
}


// Listening for clicks
document.querySelector("body").addEventListener("click", function(event) {
	console.log("Event:", event);
  // Handle the click event on my nav li
  if (event.target.id === "list") {
	songInput.classList.add("display-hide");
	songInfo.classList.remove("display-hide");
	controls.classList.remove("display-hide");
	}	else if (event.target.id === "add") {
	songInfo.classList.add("display-hide");
	controls.classList.add("display-hide");
	songInput.classList.remove("display-hide");
	}
});

function update() {
	songName = filterSong(songAdd[0].value);
	artistName = filterSong(artistAdd[0].value);
	albumName = filterSong(albumAdd[0].value);
	genreName = filterSong(genreAdd[0].value);
	output = "<div class='song'><h2>" + songName + "</h2><ul><li>" + artistName + "</li><li class='middle'>" + albumName + "</li><li>" + genreName + "</li></ul></div>"
	outputSongs.unshift(output);

	songInfo.innerHTML = "";
	for (var j = 0; j < outputSongs.length; j++) {
	songInfo.innerHTML += outputSongs[j];
	//Switch back to music list window
	}
	songInput.classList.add("display-hide");
	songInfo.classList.remove("display-hide");
	controls.classList.remove("display-hide");
}

buttonAdd.addEventListener("click", update);