$(function() {
  $( "#savebackground" ).bind( "click", saveBackground);
  $( "#savemethod" ).bind( "click", saveMethod);
});



function saveBackground(){
	chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
		chrome.tabs.executeScript(null, {file: "savebackground.js"});
	});
}

function saveMethod(){
	chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
		chrome.tabs.executeScript(null, {file: "savemethod.js"});
	});
}
