$(document).ready(function() { 

var songs = [];
var outputSongs = [];
var playlist = []; // This will hold all my songs as objects

var songInfo = $("#song-info");
var songInput = $("#song-input");
var controls = $("#controls");
var buttonAdd = $("#button-add");

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
	return song;
}

//hard-coded song population
for (var i = 0; i < songs.length; i++) {
	song = filterSong(songs[i]);

	var songName = song.slice(0, song.indexOf("-")-1);
	var artistName = song.slice(song.indexOf("by")+3, song.indexOf("on the album"));
	var albumName = song.slice(song.indexOf("album")+6);

	playlist[i] = {};
	playlist[i].title = songName;
	playlist[i].artist = artistName;
	playlist[i].album = albumName;
	playlist[i].genre = "pop";
	outputSongs[i] = "<div class='song'><h2>" + playlist[i].title + "</h2><ul><li>" + playlist[i].artist; 
	outputSongs[i] += "</li><li class='middle'>" + playlist[i].album + "</li><li>" + playlist[i].genre+ "</li></ul></div>";
}

//In 'song-info' this outputs the entire outputSongs array into the innerHTML
	$("#song-info").html(outputSongs);

// Listening for clicks
$("body").click( function(event) {
	// console.log("Event:", event);
  // Handle the click event on my nav li
 	if (event.target.id === "list") {
		songInfo.show();
		controls.show();
		songInput.hide();
	} else if (event.target.id === "add") {
		songInput.show();
		songInfo.hide();
		controls.hide();
	}
});

function update() {
	var index = playlist.length;
	playlist[index] = {};
	playlist[index].title = filterSong($("[name='song-add']").val() );
	playlist[index].artist = filterSong($("[name='artist-add']").val() );
	playlist[index].album = filterSong($("[name='album-add']").val() );
	playlist[index].genre = filterSong($("[name='genre-add']").val() );

	output = "<div class='song'><h2>" + playlist[index].title + "</h2><ul><li>" + playlist[index].artist; 
	output += "</li><li class='middle'>" + playlist[index].album + "</li><li>" + playlist[index].genre+ "</li></ul></div>";

	outputSongs.unshift(output);

	$("#song-info").html(outputSongs);

	$("[name='song-add']").val("");
	$("[name='artist-add']").val("");
	$("[name='album-add']").val("");
	$("[name='genre-add']").val("");

	//Switch back to music list window
	buttonAdd.attr("disabled", "true");
	songInfo.show();
	controls.show();
	songInput.hide();
	}

buttonAdd.attr("disabled", "true");

var fieldInput = $(":text");
function validate(){
	if (fieldInput.eq(0).val() !== "" && 
		fieldInput.eq(1).val() !== "" && 
		fieldInput.eq(2).val() !== "" && 
		fieldInput.eq(3).val() !== "") {
		buttonAdd.removeAttr("disabled");
	} else {
		buttonAdd.attr("disabled", "true");
	}
}
fieldInput.keyup(validate);

buttonAdd.click(update);

}); //End of JQuery function

