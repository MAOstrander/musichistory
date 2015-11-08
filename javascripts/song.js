define(["jquery", "lodash", "bootstrap", "executeMe", "updateMe", "alterPlaylist"],
	function($, _, bootstrap, executeMe, updateMe, alterPlaylist) {

	var songInfo = $("#song-info");
	var songInput = $("#song-input");
	var controls = $("#controls");
	var buttonAdd = $("#button-add");
	var buttonPlaylist = $("#playlist-button");

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

	buttonAdd.click(updateMe.fullAdd);
	buttonPlaylist.click(updateMe.quickAdd);
	$("#skip").click(alterPlaylist.skipSong);
	$("#play").click(alterPlaylist.playSong);
	$("#stop").click(alterPlaylist.stopSong);

	$("input[type='submit']").click(alterPlaylist.timeToFilter);

	$(document).on('click', '.delete-song', function(event) {
		$(this).parent().remove();
		alterPlaylist.checkArt();
	});


}); //END DEFINE FUNCTION

