//
var sonnetElement = document.getElementById("sonnet");
var sonnetText = sonnetElement.innerHTML;

console.log("Text is:", sonnetText);

//where orphans begin
var orphanIndex = sonnetText.indexOf("orphans");

console.log("Where my orphans at:", orphanIndex);

console.log("Sonnet has this many characters:", sonnetText.length);

//How to Replace the first instance of something
sonnetElement.innerHTML = sonnetText.replace("winter", "yuletide");
//How to Replace all instances of something
sonnetElement.innerHTML = sonnetText.replace(/the /g, "a large ");