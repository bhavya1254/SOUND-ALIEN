

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/P-ndN-NcM/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}