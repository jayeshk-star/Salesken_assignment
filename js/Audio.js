var play_icon = document.getElementById("play_icon");

var button = {
  play: document.getElementById("play"),
};
var Spectrum = WaveSurfer.create({
  container: "#audio-spectrum",
  progressColor: "red",
  barWidth: 5,
  barHeight: 2,
});
var isaudioPlay = false;

button.play.addEventListener("click", function () {
  isaudioPlay = !isaudioPlay;
  isaudioPlay
    ? (play.innerHTML = `<i class="fas fa-pause" id="play"></i>`)
    : (play.innerHTML = `  <i class="fas fa-play" id="play" ></i>`);
  isaudioPlay ? Spectrum.play() : Spectrum.pause();
});
Spectrum.load("./media/jogava.mp3");

//canvas part

var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");

context.fillStyle = "rgb(49, 223, 49)";
context.fillRect(200, 140, 100, 30);

//line
context.beginPath();
context.moveTo(248, 248);
context.lineTo(248, 170);
context.lineWidth = 3;
context.strokeStyle = "rgb(49, 223, 49)";
context.stroke();
context.fillStyle = "#fff";
context.font = "13px Arial";
context.fillText("Introduction", 220, 160);

context.fillStyle = "rgb(19, 107, 26)";
context.fillRect(350, 100, 100, 30);
context.beginPath();
context.moveTo(400, 400);
context.lineTo(400, 130);
context.lineWidth = 3;
context.strokeStyle = "rgb(19, 107, 26)";
context.stroke();

context.fillStyle = "#fff";
context.font = "13px Arial";
context.fillText("One_six", 370, 120);

context.fillStyle = "blue";
context.fillRect(1360, 140, 100, 30);

context.beginPath();
context.moveTo(1410, 1410);
context.lineTo(1408, 170);
context.lineWidth = 3;
context.strokeStyle = "blue";
context.stroke();
context.fillStyle = "#fff";
context.font = "13px Arial";
context.fillText("Polite", 1380, 160);

context.fillStyle = "rgb(110, 19, 19)";
context.fillRect(1240, 100, 220, 30);

context.beginPath();
context.moveTo(1457, 1457);
context.lineTo(1457, 130);
context.lineWidth = 3;
context.strokeStyle = "rgb(110, 19, 19)";
context.stroke();
context.fillStyle = "#fff";
context.font = "13px Arial";
context.fillText("Rapport Building-Empalthy", 1270, 120);

context.fillStyle = "rgb(9, 61, 18)";
context.fillRect(1290, 60, 230, 30);

context.beginPath();
context.moveTo(1517, 1517);
context.lineTo(1517, 90);
context.lineWidth = 3;
context.strokeStyle = "rgb(9, 61, 18)";
context.stroke();
context.fillStyle = "#fff";
context.font = "13px Arial";
context.fillText("Rapport Building-Energy", 1320, 80);
