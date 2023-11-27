function toggleImage() {
  var popupImage = document.getElementById("popupImage");
  if (popupImage.style.display === "none") {
    popupImage.style.display = "block";
  } else {
    popupImage.style.display = "none";
  }
}

function redirectToNewSite() {
  window.location.href = "http://www.artwise.co.kr/";
}
