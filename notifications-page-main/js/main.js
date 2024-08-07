const notis = document.querySelectorAll(".notis");

function updateAlertCount() {
  const count = document.querySelector(".count");
  const alerts = document.querySelectorAll(".alert.red-marker");
  count.textContent = alerts.length;
}

function updateBackgrounds() {
  notis.forEach((item) => {
    const redMarker = item.querySelector(".red-marker");
    if (redMarker) {
      item.classList.add("background-color");
      item.classList.remove("no-background");
    } else {
      item.classList.remove("background-color");
      item.classList.add("no-background");
    }
  });
}

function toggleRedMarker(item) {
  const redMarker = item.querySelector(".red-marker");
  if (redMarker) {
    redMarker.remove();
  } else {
    const newRedMarker = document.createElement("span");
    newRedMarker.classList.add("alert", "red-marker");
    item.querySelector(".notis-wrapper").appendChild(newRedMarker);
  }
  updateAlertCount();
  updateBackgrounds();
}

updateAlertCount();
updateBackgrounds();

notis.forEach((item) => {
  item.addEventListener("click", () => {
    toggleRedMarker(item);
  });
});

document.querySelector(".mark-as-read").addEventListener("click", () => {
  const alerts = document.querySelectorAll(".alert.red-marker");
  alerts.forEach((alert) => alert.remove());
  updateAlertCount();
  updateBackgrounds();
});
