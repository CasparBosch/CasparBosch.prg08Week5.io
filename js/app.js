// Description: This is the main file for the project

const predictions = await model.estimateHands(video)
if (predictions.length > 0) {
    // voorbeeld: bekijk x, y, z van het eerste botje van je pink:
    let [y, x, z] = predictions[0].annotations.pinky[0]
    console.log(x, y, z)


    // voorbeeld: alle landmarks x,y,z in een array plaatsen
    let allPoints = []
    for (let i = 0; i < 20; i++) {
        allPoints.push(predictions[0].landmarks[i][0])
        allPoints.push(predictions[0].landmarks[i][1])
        allPoints.push(predictions[0].landmarks[i][2])
    }
    console.log(allPoints)
}