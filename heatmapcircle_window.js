(function() {

var svgContainer = d3.select("#heatmap").append("svg")
      .attr("width", 215)
      .attr("height", 528);


var parseDate  = d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse;
//Replace the first "------" with the #WindowAverage channel number from thingspeak.com and replace the second one
//with the associated channel's 16 character api key.
    d3.json('https://api.thingspeak.com/channels/------/feeds.json?api_key=----------------&results=1&round=2', function(error, data) {
       data = data.feeds;
        data.forEach(function(d) {
        d.field2 = d.field2;
        return d;
     });
    
    if (error) throw error;
    
var circlesWindow = svgContainer.selectAll("circle")
                           .data(data)
                           .enter()
                           .append("circle");
    
    var circleAttributesWindow = circlesWindow
                        .attr("cx", 45)
                       .attr("cy", 450)
                        .attr("r", 100 )
                        .style("fill", function(d) {
    if (d.field2 > 70) {
      return "rgba(255, 0,0,0.2)";
    } else if (d.field2 > 45) {
      return "rgba(255, 255, 255,0.2)";
    }
    return "rgba(0, 0, 255,0.2)";
  });
        
            var textWindow = svgContainer.selectAll("text")
                        .data(data)
                        .enter()
                       .append("text");
    
    var textLabelsWindow = textWindow
                 .attr("x", 45)
                 .attr("y", 450)
                 .text( function (d) { return "( " + d.field2 +" )"; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "20px")
                 .attr("fill", "black");
  });
})();