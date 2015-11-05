define(["jquery", "lodash", "bootstrap", "executeMe", "updateMe"],
	function($, _, bootstrap, executeMe, updateMe) {

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
	// mySongs.on("value", function(snapshot) {
	//   console.log(snapshot.child("User").child("playlist1").child("song1").val());  // Alerts "Final Fantasy 7"
	// });

var songs = [];

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

buttonAdd.click(updateMe.updateMe);
buttonQuickAdd.click(updateMe.updateMe);

$(document).on('click', '.delete-song', function(event) {
	$(this).parent().remove();
});


}); //END DEFINE FUNCTION

