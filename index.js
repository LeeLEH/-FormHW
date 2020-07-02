console.log("index.js input ok");

function changeImage(imageName) {
  document.getElementById("img").innerHTML =
    "<img src='img/" + imageName + ".jpg' alt='' width='500' height='600'>";
}

var localData = [
  "跑馬古道",
  "羅東夜市",
  "窯烤山寨村",
  "幾米主題廣場",
  "礁溪鄉五峰旗風景區",
  "礁溪湯圍溝",
];

var liContent = "";//儲存項目的html

for (var i = 0; i < localData.length; i++) {
  liContent +=
    "<li><button onclick='changeImage(this.value)' value='" +
    localData[i] +
    "'>" +
    localData[i] +
    "</button></li>";
}

document.getElementById("liContent").innerHTML = liContent;
