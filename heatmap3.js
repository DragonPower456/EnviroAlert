 (function() {

var svgContainer = d3.select("#heatmap").append("svg")
      .attr("width", 215)
      .attr("height", 528);

//*--Parse time into the correct format--*//
var parseDate  = d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse;
    
    //*--Load JSON file--*//
    //*--Door Arduino--*//
//Replace the first "------" with the #DoorAverage channel number from thingspeak.com and replace the second one
//with the associated channel's 16 character api key.
d3.json('https://api.thingspeak.com/channels/------/feeds.json?api_key=----------------&results=1&round=2', function(error2, data2) {
       data2 = data2.feeds;
        data2.forEach(function(d2) {
        d2.field2 = d2.field2;
        return d2;
     });
    
    if (error2) throw error2;
    
var circlesDoor = svgContainer.selectAll("g circle")
                           .data(data2)
                           .enter()
                           .append("circle");
    
    var circleAttributesDoor = circlesDoor
    //*--Change the X coordinates for circle-*//
                        .attr("cx", 65)
    //*--Change the Y coordinates for circle--*//
                       .attr("cy", 500)
                        .attr("r", 100 )
                        .style("fill", function(d2) {
    if (d2.field2 > 70) {
      return "rgba(255, 0,0,0.2)";
    } else if (d2.field2 > 45) {
      return "rgba(128, 128, 128,0.2)";
    }
    return "rgba(0, 0, 255,0.2)";
  });
    
    var textDoor = svgContainer.selectAll("g text")
                        .data(data2)
                        .enter()
                       .append("text");
    
    var textLabelsDoor = textDoor
                //*--Change the X coordinates for text--*//
                 .attr("x", 50)
                //*--Change the Y coordinates for text. Should be equal to the cy coordinates for the circle--*//
                 .attr("y", 500)
                 .text( function (d2) { return "( " + d2.field2 +" )"; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "20px")
                 .attr("fill", "black");
    
  });
    
    //*--Window Arduino--*//
//Replace the first "------" with the #WindowAverage channel number from thingspeak.com and replace the second one
//with the associated channel's 16 character api key.
    d3.json('https://api.thingspeak.com/channels/------/feeds.json?api_key=----------------&results=1&round=2', function(error4, data4) {
       data4 = data4.feeds;
        data4.forEach(function(d4) {
        d4.field2 = d4.field2;
        return d4;
     });
    
    if (error4) throw error4;
    
var circlesWindow = svgContainer.selectAll("g circle")
                           .data(data4)
                           .enter()
                           .append("circle");
    
    var circleAttributesWindow = circlesWindow
                        .attr("cx", 0)
                       .attr("cy", 250)
                        .attr("r", 100 )
                        .style("fill", function(d4) {
    if (d4.field2 > 70) {
      return "rgba(255, 0,0,0.2)";
    } else if (d4.field2 > 45) {
      return "rgba(128, 128, 128,0.2)";
    }
    return "rgba(0, 0, 255,0.2)";
  });
        
            var textWindow = svgContainer.selectAll("g text")
                        .data(data4)
                        .enter()
                       .append("text");
    
    var textLabelsWindow = textWindow
                 .attr("x", 0)
                 .attr("y", 250)
                 .text( function (d4) { return "( " + d4.field2 +" )"; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "20px")
                 .attr("fill", "black");
  });
//*--Case Arduino--*//
//Replace the first "------" with the #CaseAverage channel number from thingspeak.com and replace the second one
//with the associated channel's 16 character api key.
d3.json('https://api.thingspeak.com/channels/------/feeds.json?api_key=----------------&results=1&round=2', function(error3, data3) {
       data3 = data3.feeds;
        data3.forEach(function(d3) {
        d3.field2 = d3.field2;
        return d3;
     });
    
    if (error3) throw error3;
    
var circlesCase = svgContainer.selectAll("g circle")
                           .data(data3)
                           .enter()
                           .append("circle");
    
    var circleAttributesCase = circlesCase
    //*--Change the X coordinates for circle-*//
                        .attr("cx", 130)
    //*--Change the Y coordinates for circle--*//
                       .attr("cy", 500)
                        .attr("r", 100 )
                        .style("fill", function(d3) {
    if (d3.field2 > 70) {
      return "rgba(255, 0,0,0.2)";
    } else if (d3.field2 > 45) {
      return "rgba(128, 128, 128,0.2)";
    }
    return "rgba(0, 0, 255,0.2)";
  });
    
    var textCase = svgContainer.selectAll("g text")
                        .data(data3)
                        .enter()
                       .append("text");
    
    var textLabelsCase = textCase
                //*--Change the X coordinates for text--*//
                 .attr("x", 130)
                //*--Change the Y coordinates for text. Should be equal to the cy coordinates for the circle--*//
                 .attr("y", 500)
                 .text( function (d3) { return "( " + d3.field2 +" )"; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "20px")
                 .attr("fill", "black");
    
  });
    

(function(){
    
    var median = d3.median(data, function(d){return "( "+ d2.field2 +")" ;});
    
                                  
    var circlesHeatmap = svgContainer.selectAll("g circle")
                           .data(data)
                           .enter()
                           .append("circle");
    
    var circleAttributesHeatmap = circlesHeatmap
    //*--Change the X coordinates for circle-*//
                        .attr("cx", 80)
    //*--Change the Y coordinates for circle--*//
                       .attr("cy", 200)
                        .attr("r", 100 )
                        .style("fill", function(d) {
    if (median > 70) {
      return "rgba(255, 0,0,0.2)";
    } else if (median > 45) {
      return "rgba(128, 128, 128,0.2)";
    }
    return "rgba(0, 0, 255,0.2)";
  });
    
    var textHeatmap = svgContainer.selectAll("g text")
                        .data(data)
                        .enter()
                       .append("text");
    
    var textLabelsHeatmap = textHeatmap
                //*--Change the X coordinates for text--*//
                 .attr("x", 80)
                //*--Change the Y coordinates for text. Should be equal to the cy coordinates for the circle--*//
                 .attr("y", 200)
                 .text( function (d) { return "( " + median + " )"; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "20px")
                 .attr("fill", "black");
    });
     
     })();   