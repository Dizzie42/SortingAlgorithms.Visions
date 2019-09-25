//Main
function main(){
    var ctx = createCanvas("graphDiv");
    var graph = new BarGraph(ctx);
    graph.maxValue = 100;
    graph.margin = .5;
    for(let i=0; i<getSliderValue();i++){
        graph.colors[i] = "#006cd8";
    }
    //graph.xAxisLabelArr = ["North", "East", "West", "South"];

    let maxArraySize = getSliderValue();
    //Initial random Array
    randomArray(graph);
    //RUN MY SORT ON graph.curArr
    //then graph.update([]) on new array object.


    //jQUERY stuff
        //Random array button
        $("#randomButton").off().click(function() {
            randomArray(graph);
        });
        //Show slider value
        $("#myRange").off().on("input", function() {
            var slider = document.getElementById("myRange");
            var output = document.getElementById("sliderValue");
            output.innerHTML = slider.value; // Display the default slider value
            randomArray(graph)
        });
        //Grab sort button
        $("#startSort").off().on("click", function() {
            let sortSelection = $("#sortList option:selected").val();
            //SELECT SORT DEPENDING ON VAL
            bubbleSort(graph.curArr);
        });
}
