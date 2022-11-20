let state = 0;
let enlarge = document.getElementById("max");
let popup = document.getElementById("sentiment");
url = window.location.href;
console.log(url.split("?")[0]);

if (url.split("?")[0] === "https://www.youtube.com/watch") {
  const urlSearchParams = new URLSearchParams(url.split("?")[1]);
  const video_url = urlSearchParams.get("v");
  console.log("video_url", video_url);
  fetch(`http://localhost:8000/transcript/${video_url}`)
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("max").addEventListener("click", function () {
    if (state == 0) {
      document.body.style.width = "500px";
      popup.style.width = "500px";
      document.getElementsByTagName("html")[0].style.width = "500px";
      document.body.style.height = "500px";
      popup.style.height = "500px";
      document.getElementsByTagName("html")[0].style.height = "500px";
      document.body.style.backgroundImage =
        "url('Gradient-Background-500.png')";
      state = 1;
      return;
    }

    if (state == 1) {
      document.body.style.width = "200px";
      popup.style.width = "200px";
      document.getElementsByTagName("html")[0].style.width = "208px";
      document.body.style.height = "200px";
      popup.style.height = "200px";
      document.getElementsByTagName("html")[0].style.height = "208px";
      document.body.style.backgroundImage = "url('Gradient-Background.png')";
      state = 0;
      return;
    }
  });
});
