// Description: This is the main file for the project

// Import the libraries
const video = document.getElementById('video')

// Create a new poseNet method
const poseNet = ml5.poseNet(video, modelLoaded)
let poses = []


function modelLoaded() {
    console.log('Model Loaded!')
}

poseNet.on('pose', (results) => {
  poses = results
  console.log(poses)
})

//video ready
function videoReady(){
    console.log("the webcam is ready")
}