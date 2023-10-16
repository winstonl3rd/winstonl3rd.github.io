function openPopup(popupId) {
  var popups = document.getElementsByClassName("popup");
  var popupContainer = document.querySelector(".popup-container");
	for (let i = 0; i < popups.length; i++) {
		console.log(popups[i].style)
		popupContainer.style.opacity = 0;
		popups[i].style.display = "none";
  }
		popupContainer.style.display = "block"
	var popup = document.getElementById(popupId);
		popup.style.display = "block";
	setTimeout(function() {
    popupContainer.style.opacity = 1;
    }, 60);
}

function closePopup(popupId) {
	var popup = document.getElementById(popupId);
	var popupContainer = document.querySelector(".popup-container");
	popupContainer.style.opacity = 0;
	setTimeout(function() {
		popupContainer.style.display = "none";
		popup.style.display = "none";
    }, 300);
	
	
}