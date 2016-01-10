define(function(require) {
  //DEPENDENCIES FOR REQUIRE
  var $ = require("jquery");
  var _ = require("lodash");
  var Firebase = require("firebase");
  var updateMe = require("updateMe");
  var executeMe = require("executeMe");
  var alterPlaylist = require("alterPlaylist");
  var populate = require('populate-songs');
  var promiseAdd = require('ajaxAddSong');
  var promiseDelete = require('deleteSongs');

  //Target with jquery
	var songInfo = $("#song-info");
	var songInput = $("#song-input");
	var songArt = $("#maybe-art");
	var controls = $("#controls");
	var buttonAdd = $("#button-add");
	var buttonPlaylist = $("#playlist-button");

	// Listening for clicks
	$("body").click( function(event) {
	  // Handle the click event on my nav li
	 	if (event.target.id === "list") {
			$(".list-songs").show();
			$("#song-input").hide();
		} else if (event.target.id === "add") {
			$(".list-songs").hide();
			$("#song-input").show();
		}
	});

  //This makes sure that there is text in the appropriate fields before allowing submittal
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

	//Event listeners
	buttonPlaylist.click(updateMe.quickAdd);
	$("#skip").click(alterPlaylist.skipSong);
	$("#play").click(alterPlaylist.playSong);
	$("#stop").click(alterPlaylist.stopSong);

	$("[name='artist']").on('change', alterPlaylist.timeToFilter);
	$("[name='artist']").on('change', alterPlaylist.lodashFilter);
	$("[name='album']").on('change', alterPlaylist.timeToFilter);
	$("input[type='submit']").click(alterPlaylist.timeToFilter);

	$('#modalAdd').click(function(){
		$(".list-songs").hide();
		$("#song-input").show();
	});

	//Click listener to change back from song input mode to play mode after adding song
	buttonAdd.click(function(){
		promiseAdd()
		.then(function(){
			$(".modal-title").html("Song Added");
			$(".modal-body").html("You added a song to your playlist!");
			$('#modalAdd').show();
			$('#myModal').modal();
			//CLEAR THE VALUES OUT OF ADD SONG FIELDS
			$("input[type='text']").val("");
			$("#button-add").attr("disabled", "true");
			
			//Switch back to music list window
			$(".list-songs").show();
			$("#song-input").hide();
		})
		.fail(function(error){
      $(".modal-title").html("Error");
			$(".modal-body").html("Deletion unsuccesful: " +error + "!");
			$('#myModal').modal();
    	});
	});

	//Delete songs, even though dynamically added to DOM
	$(document).on('click', '.delete-song', function(event) {
		var songKey = $(this).attr('songid');
		promiseDelete(songKey)
		.then(function(){
			populate.fetchData();
			$(".modal-title").html("Deletion");
			$(".modal-body").html("You deleted a song from your playlist! I hope you meant to...");
			$('#modalAdd').hide();
			$('#myModal').modal();
		})
		.fail(function(error){
			$(".modal-title").html("Error");
			$(".modal-body").html("Deletion unsuccesful: " +error + "!");
			$('#modalAdd').hide();
			$('#myModal').modal();
    });
	});


}); //END DEFINE FUNCTION
