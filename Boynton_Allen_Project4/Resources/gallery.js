var	imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images1"),
	imageFiles = imagesFolder.getDirectoryListing()
;

var newImages = Ti.UI.createImageView({
	image: "images1/" + imageFiles[0],
	bottom: 175
});

var dogView = function(){
	var lastDog = dogView;
	var randomDog = Math.floor(Math.random()*imageFiles.length);
	while(lastDog === randomDog){
		var randomDog = Math.floor(Math.random()*imageFiles.length);
	};
	newImages.image = "images1/" + imageFiles(randomDog);
};

// Next button to change image
var nextView = Ti.UI.createView({
	backgroundColor: "brown",
	height: 60,
	width: 350,
	bottom: 0
});

var nextViewText = Ti.UI.createLabel({	
	color: "white",
	text: "New Image",
	font: {fontSize: 20, fontFamily: customFont},
	textAlign: "center"
});

var mainWindow = function(){
	var galleryWindow = Ti.UI.createWindow({
		title: "Gallery",
		backgroundColor: "#ea148c"
	});
	nextView.add(nextViewText);
	galleryWindow.add(nextView, newImages);
	navWindow.openWindow(galleryWindow);
};

nextView.add(nextViewText);
nextView.addEventListener("click", dogView);
topView.addEventListener("click", mainWindow);
//midView.addEventListener("click", mainWindow);
//bottomView.addEventListener("click", mainWindow);
