define(["jquery", "lodash", "bootstrap", "executeMe"],
	function($, _, bootstrap, executeMe) {

	// var mySongs = new Firebase("https://mistory.firebaseio.com/");

	// To write a song to firebase
	// myFirebaseRef.set({
	//   title: "One Winged Angel",
	//   artist: "Nobuo Uematsu",
	//   album: "Final Fantasy 7",
	//   genre: "Classic"
	// });

	// // This takes a 'snapshot' of the database at the time you call it and allows you to traverse to any 
	// // particular value like an object.
	// mySongs.child("playlist").child("songs").child("title").on("value", function(snapshot) {
	//   console.log(snapshot.val());  // Alerts "Final Fantasy 7"
	// });



function filterSong(thing) {
	thing = thing.replace(">", "-");
	thing = thing.replace(/[&\/\\#,+()!@$~%.*?{}]/g, '');
	return thing;
}


var songs = [];
var playlist = [];

var songInfo = $("#song-info");
var songInput = $("#song-input");
var controls = $("#controls");
var buttonAdd = $("#button-add");
var buttonQuickAdd = $("#button-quick-add");

// Listening for clicks
$("body").click( function(event) {
  // Handle the click event on my nav li
 	if (event.target.id === "list") {
		songInfo.show();
		controls.show();
		$("#maybe-art").show();
		songInput.hide();
	} else if (event.target.id === "add") {
		songInput.show();
		songInfo.hide();
		controls.hide();
		$("#maybe-art").hide();
	}
});

function update() {
	var filterArtist = [];
	var index = playlist.length;
	playlist[index] = {};
	playlist[index].title = filterSong($("[name='song-add']").val() );
	playlist[index].artist = filterSong($("[name='artist-add']").val() );
	playlist[index].album = filterSong($("[name='album-add']").val() );
	playlist[index].genre = filterSong($("[name='genre-add']").val() );

	output = "<div class='song'><h2>" + playlist[index].title + 
			"</h2><ul><li>" + playlist[index].artist + 
			"</li><li class='middle'>" + playlist[index].album + 
			"</li><li>" + playlist[index].genre + 
			"</li></ul> <button class='delete-song btn btn-default' type='button'>Delete</button> </div>";

	$("#song-info").prepend(output);

	$("[name='song-add']").val("");
	$("[name='artist-add']").val("");
	$("[name='album-add']").val("");
	$("[name='genre-add']").val("");

	// Putting the songs Artists into the filter
	// $("#artist").html("");
	for (var i = 0; i < playlist.length; i++) {
		$("#artist").append("<option class='filter-artist'>" + playlist[i].artist + "</option>");
		$("#album").append("<option class='filter-album'>" + playlist[i].album + "</option>");
	}

	// var thisIsTheHolderForFilterArtist = $(".filter-artist");
	// for (var l = 0; l < thisIsTheHolderForFilterArtist.length; l++) {
	// 	filterArtist[l] = thisIsTheHolderForFilterArtist.eq(l).val();
	// 	filterArtist = _.uniq(filterArtist);
	// }
	// 	console.log("Will this update filter?", filterArtist);

	
	//Switch back to music list window
	buttonAdd.attr("disabled", "true");
	songInfo.show();
	controls.show();
	songInput.hide();
}

buttonAdd.attr("disabled", "true");
buttonQuickAdd.attr("disabled", "true");
var fieldInput = $(":text");
function validate(){
	if (fieldInput.eq(0).val() !== "" && 
		fieldInput.eq(1).val() !== "" && 
		fieldInput.eq(2).val() !== "" && 
		fieldInput.eq(3).val() !== "") {
		buttonQuickAdd.removeAttr("disabled");
	} else if (fieldInput.eq(4).val() !== "" && 
		fieldInput.eq(5).val() !== "" && 
		fieldInput.eq(6).val() !== "" && 
		fieldInput.eq(7).val() !== "") {
		buttonAdd.removeAttr("disabled");
	} else {
		buttonAdd.attr("disabled", "true");
		buttonQuickAdd.attr("disabled", "true");
	}
}
fieldInput.keyup(validate);

buttonAdd.click(update);
buttonQuickAdd.click(update);

$(document).on('click', '.delete-song', function(event) {
	$(this).parent().remove();
});


}); //END DEFINE FUNCTION

