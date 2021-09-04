Song = "";
leftWristX = "0";
leftWristY = "0";
rightWristX = "0";
rightWristY = "0";
function preload() {
Song = loadSound("VaathiComing Song.mp3");
}

function draw() {
    image(cam, 0, 0, 500, 500);

    fill("red");
    circle(leftWristX, leftWristY, 30);
    circle(rightWristX, rightWristY, 30);

    NewleftWristY = floor(Number(leftWristY));
    Volume = NewleftWristY / 500;
    Song.setVolume(Volume);
    document.getElementById("Volume").innerHTML = "Volume : " + Volume;

    if (rightWristY < 100) {
        Song.rate(0.5);
        document.getElementById("Speed").innerHTML = "Speed : 0.5";
    }
    else if (rightWristY > 100 && rightWristY < 200) {
        Song.rate(1);
        document.getElementById("Speed").innerHTML = "Speed : 1";
    }
    else if (rightWristY > 200 && rightWristY < 300) {
        Song.rate(1.5);
        document.getElementById("Speed").innerHTML = "Speed : 1.5";
    }
    else if (rightWristY > 300 && rightWristY < 400) {
        Song.rate(2);
        document.getElementById("Speed").innerHTML = "Speed : 2";
    }
    else if (rightWristY > 400 && rightWristY < 500) {
        Song.rate(2.5);
        document.getElementById("Speed").innerHTML = "Speed : 2.5";
    }
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(490, 200);

    cam = createCapture(VIDEO);
    cam.hide();

    Posenet = ml5.poseNet(cam, modelloded);
    Posenet.on('pose', gotposes);
}

function gotposes(results){
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}

function modelloded(){
    console.log("loded!!!");
}

function Play(){
    Song.play();
    Song.setVolume(0.5);
    Song.rate(1);
}