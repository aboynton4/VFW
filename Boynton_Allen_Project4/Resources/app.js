Ti.UI.setBackground("transparent");

// Background
var mainWindow = Ti.UI.createWindow({
	backgroundcolor: "gray",
	title: "VFW Final Project"
});

// Navigation window
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var customFont = "MarkerFelt-Wide";

// Top view in window
var topView = Ti.UI.createView({
	backgroundColor: "brown",
	height: 100,
	width: 350,
	top: 0
});

// Top button text
var topViewText = Ti.UI.createLabel({
	text: "Gallery",
	color: "white",
	font: {fontSize: 40, fontFamily: customFont},
	textAlign: "center"
});

var border = Ti.UI.createView({
	backgroundColor: "black",
	height: 2,
	top: 100
});

// Middle view in window
var midView = Ti.UI.createView({
	backgroundColor: "#0d6735",
	height: 100,
	width: 350,
	top: topView.height + 0, 
});

// Middle button text
var midViewText = Ti.UI.createLabel({
	color: "white",
	text: "About",
	font: {fontSize: 40, fontFamily: customFont},
	textAlign: "center"	
});

var border1 = Ti.UI.createView({
	backgroundColor: "black",
	height: 2,
	top: 200
});

// Lower view in window
var bottomView = Ti.UI.createView({
	backgroundColor: "blue",
	height: 100,
	width: 350, 
	top: topView.height + midView.height + 0,
	
});

var bottomViewText = Ti.UI.createLabel({
	color: "white",
	text: "Favorite",
	font: {fontSize: 40, fontFamily: customFont},
	textAlign: "center"
});

var border2 = Ti.UI.createView({
	backgroundColor: "black",
	height: 2,
	top: 302
});

var classText = Ti.UI.createLabel({
	color: "white",
	text: "VFW 1412 by Allen Boynton",
	font: {fontSize: 18, fontFamily: customFont},
	top: topView.height + topView.top + 300,
	textAlign: "center"
});

var loadFile = require("gallery");
var loadFile = require("about");
var loadFile = require("favorite");

mainWindow.add(topView, midView, bottomView, classText, border, border1, border2);
topView.add(topViewText);
midView.add(midViewText);
bottomView.add(bottomViewText);
navWindow.open();