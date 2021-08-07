
var prediction1="";
var prediction2="";
Webcam.set({
  height:300,
  width:350,
  image_format:'png',
  png_quality:90
});
var camera= document.getElementById("camera");
Webcam.attach(camera);

function takeSnapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_img"src="'+data_uri+'"/>';

    });
}
console.log('ml5 version is',ml5.version);
var classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Be8_GmeeK/model.json",modelLoaded);
function modelLoaded(){
  console.log("image classifier model loaded.");
}
function speak(){
  var synth= window.speechSynthesis;
  var speak_data_1= "The first prediction is" + prediction_1;
  var speak_data_2= "The second prediction is" + prediction_2;
  var utterThis= new speechSynthesisUtterance(speak_data_1 + speak_data_2);
  synth.speak(utterThis);
}