document.querySelector("#model-container").style.setProperty("--upx", 1 * Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 100)
window.addEventListener("resize", () => document.querySelector("#model-container").style.setProperty("--upx", 1 * Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 100))

var angleY = 45;
var go = false;
setInterval(() => {
  if (go) {
    document.querySelector("#model-base").style.transform = `rotateY(${angleY}deg) rotateX(90deg) translateZ(calc(var(--u) * -5))`;
    angleY += 1;
    if (angleY>=360) angleY -= 360;
  }
},32)


let modelContainer = document.querySelector("#model-container");
document.querySelector("#go").addEventListener("click", async () => {
  let uuid = document.querySelector("#uuid").value;
  for (let face of modelContainer.querySelectorAll("img.face")) {
    face.src = `https://crafatar.com/skins/${uuid}`;
  }
  for (let face of modelContainer.querySelectorAll("#head img.face")) {
    face.style.backgroundImage = `url("https://crafatar.com/skins/${uuid}")`
  }
  console.log("skin loaded!")
})