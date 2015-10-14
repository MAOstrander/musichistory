var songs = [];
var outputSongs = [];

songs[songs.length] = "Rise - by Yoko Kanno on the album Ghost in the Shell OST";
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs[songs.length] = "Dare - by Gorillaz on the album Demon Days";


for (var i = 0; i < songs.length; i++) {
	song = songs[i];

	song = song.replace(">", "-");
	song = song.replace(/[&\/\\#,+()!@$~%.*?{}]/g, '');
	console.log(song)

	var songName = song.slice(0, song.indexOf("-")-1);
	var artistName = song.slice(song.indexOf("by")+3, song.indexOf("on the album"));
	var albumName = song.slice(song.indexOf("album")+6);

	outputSongs[i] = "<div class='song'><h2>" + songName + "</h2><ul><li>" + artistName + "</li><li class='middle'>" + albumName + "</li><li>Pop</li></ul></div>";
}

for (var j = 0; j < outputSongs.length; j++) {
	document.getElementById("song-info").innerHTML += outputSongs[j];
}