var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    function take_snapshot() {
        webcam.snap(function(data_uri){
        document.getElementById("result1").innerHTML = '<img id = "selfie1" src = "'+data_uri+'"/>' ;
        document.getElementById("result2").innerHTML = '<img id = "selfie2" src = "'+data_uri+'"/>' ;
        document.getElementById("result3").innerHTML = '<img id = "selfie3" src = "'+data_uri+'"/>' ;
    })
    } ;
    setTimeout(function(){
    img_id = "selfie1" ;
    take_snapshot() ;
    speak_data = "Taking your next Selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }, 10000) ;
    
    

}