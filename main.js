function setup() {
    video = createCapture(VIDEO);
    video.size()
    canvas = createCanvas(500,500) ;
modelattacher = ml5.poseNet(video , modelLoaded);
}
function modelLoaded() {
    console.log("model is loaded mam/sir");
}
