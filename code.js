
var prediction1="";

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
  
  var utterThis= new SpeechSynthesisUtterance(speak_data_1 );
  synth.speak(utterThis);
}
function check(){
  img= document.getElementById("captured_img");
  classifier.classify(img,gotResult);
}
function gotResult(error,results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML= results[0].label;
    prediction_1= results[0].label;
    speak();
    if(results[0].label=="Thumbs Up"){
      document.getElementById("result_gesture_icon").innerHTML="&#128077;";
    }
    if(results[0].label=="Peace"){
      document.getElementById("result_gesture_icon").innerHTML="&#x270C;";
    }
    if(results[0].label=="Amazing"){
      document.getElementById("result_gesture_icon").innerHTML="&#128076;";
    }
  }
}