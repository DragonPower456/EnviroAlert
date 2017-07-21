(function() {
    
var bodySelection = d3.select("#heatmap");

var svgSelection = bodySelection.append("svg")
      .attr("width", 50)
      .attr("height", 50);

var circleSelection = svgSelection.append("circle")
     .attr("cx", 25)
      .attr("cy", 25)
     .attr("r", 25)
     .style("fill", "purple");

    })();