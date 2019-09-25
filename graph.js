function createCanvas(divName) {

    var div = document.getElementById(divName);
    var canvas = document.createElement('canvas');
    div.appendChild(canvas);
    if (typeof G_vmlCanvasManager != 'undefined') {
        canvas = G_vmlCanvasManager.initElement(canvas);
    }
    var ctx = canvas.getContext("2d");
    return ctx;
}

function randomArray(graph) {
    let size = getSliderValue();
    let randomValues = [];
    //Get slider value for max array size of array
    for(let i=0;i<size; i++){
        randomValues[i] = Math.random() * graph.maxValue;
    }
    graph.update(randomValues)
}

function getSliderValue() {
    return document.getElementById("myRange").value;
}
