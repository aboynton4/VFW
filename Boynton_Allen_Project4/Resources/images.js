var imageList = Ti.Filesystem.getFile(Ti.Filesystem.resoursesDirectory, "images1");
var galleryImages = imagesFolder.getDirectoryListing();

var dogImages = Ti.UI.createImageView({
	image: "images1/" = galleryImages[0],
	bottom: 200
});

var dogView = function(){
	var lastDog = dogView;
	var randomDog = Math.floor(Math.random()*galleryImages.length);
	while(lastDog === randomDog){
		randomDog = Math.floor(Math.random()*galleryImages.length);
	};
	dogImages.image = "images1/" + galleryImages(randomDog);
};

// Next button to change image
var nextView = Ti.UI.createView({
	backgroundColor: "brown",
	height: 50,
	width: 350,
	bottom: 0
});

var nextViewText = Ti.UI.createLabel({
	color: "white",
	text: "Next Dog Image",
	font: {fontSize: 20, fontFamily: customFont},
	textAlign: "center"
});

var mainWindow = function(){
	var galleryWindow = Ti.UI.createWindow({
		title: "Gallery",
		backgroundColor: "brown"
	});
	nextView.add(nextViewText);
	galleryWindow.add(nextView, dogImages);
	navWindow.openWindow(galleryWindow);
};

nextView.add(nextViewText);
nextView.addEventListener("click", dogView);
topView.addEventListener("click", mainWindow);
