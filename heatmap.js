(function() {

var svgContainer = d3.select("#heatmap").append("svg")
      .attr("width", 218)
      .attr("height", 523);

//*--Parse time into the correct format--*//
var parseDate  = d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse;
    
    //*--Load JSON file--*//
    //*--Window Arduino--*//
    
//Replace the first "------" with the #WindowAverage channel number from thingspeak.com and replace the second one
//with the associated channel's 16 character api key.
    d3.json('https://api.thingspeak.com/channels/------/feeds.json?api_key=----------------&results=1&round=2', function(errorwindow, datawindow) {
       datawindow = datawindow.feeds;
        datawindow.forEach(function(dwindow) {
        dwindow.field1 = dwindow.field1;
        return dwindow;
     });
    
    if (errorwindow) throw errorwindow;
    
var circlesWindow = svgContainer.selectAll("g circle")
                           .data(datawindow)
                           .enter()
                           .append("circle");
    
    var circleAttributesWindow = circlesWindow
                        .attr("cx", 0)
                       .attr("cy", 250)
                        .attr("r", 100 )
                        .style("fill", function(dwindow) {
    if (dwindow.field1 > 70) {
      return "rgba(255, 0,0,0.2)";
    } else if (dwindow.field1 > 45) {
      return "rgba(128, 128, 128,0.2)";
    }
    return "rgba(0, 0, 255,0.2)";
  });
        
            var textWindow = svgContainer.selectAll("g text")
                        .data(datawindow)
                        .enter()
                       .append("text");
    
    var textLabelsWindow = textWindow
                 .attr("x", 5)
                 .attr("y", 250)
                 .text( function (dwindow) { return dwindow.field1 +"°F"; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "20px")
                 .attr("fill", "black");
    var textWindowWord = svgContainer.selectAll("g text")
                        .data(datawindow)
                        .enter()
                       .append("text");
    
    var textLabelsWindowWord = textWindowWord
                 .attr("x", 5)
                 .attr("y", 230)
                 .text( function (dwindow) { return "#Window"; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "14px")
                 .attr("fill", "black");
        
        
        var ellipseWindowBackground = svgContainer.append("ellipse")
                        .attr("cx", 167)
                       .attr("cy", 240)
                        .attr("rx", 13 )
                        .attr("ry", 60 )
                        .attr("anchor" , "middle")
                        .attr("transform" , "rotate(16)")
                        .style("fill", "white");
        //*--Door Arduino--*//
//Replace the first "------" with the #DoorAverage channel number from thingspeak.com and replace the second one
//with the associated channel's 16 character api key.
d3.json('https://api.thingspeak.com/channels/------/feeds.json?api_key=----------------&results=1&round=2', function(errordoor, datadoor) {
       datadoor = datadoor.feeds;
        datadoor.forEach(function(ddoor) {
        ddoor.field1 = ddoor.field1;
        return ddoor;
     });
    
    if (errordoor) throw errordoor;
    
var circlesDoor = svgContainer.selectAll("g circle")
                           .data(datadoor)
                           .enter()
                           .append("circle");
    
    var circleAttributesDoor = circlesDoor
    //*--Change the X coordinates for circle-*//
                        .attr("cx", 65)
    //*--Change the Y coordinates for circle--*//
                       .attr("cy", 500)
                        .attr("r", 100 )
                        .style("fill", function(ddoor) {
    if (ddoor.field1 > 70) {
      return "rgba(255, 0,0,0.2)";
    } else if (ddoor.field1 > 45) {
      return "rgba(128, 128, 128,0.2)";
    }
    return "rgba(0, 0, 255,0.2)";
  });
    
    var textDoor = svgContainer.selectAll("g text")
                        .data(datadoor)
                        .enter()
                       .append("text");
    
    var textLabelsDoor = textDoor
                //*--Change the X coordinates for text--*//
                 .attr("x", 30)
                //*--Change the Y coordinates for text. Should be equal to the cy coordinates for the circle--*//
                 .attr("y", 510)
                 .text( function (ddoor) { return ddoor.field1 + "°F"; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "20px")
                 .attr("fill", "black");
        var textDoorWord = svgContainer.selectAll("g text")
                        .data(datadoor)
                        .enter()
                       .append("text");
    
    var textLabelsDoorWord = textDoorWord
                //*--Change the X coordinates for text--*//
                 .attr("x", 30)
                //*--Change the Y coordinates for text. Should be equal to the cy coordinates for the circle--*//
                 .attr("y", 490)
                 .text( function (ddoor) { return "#Door "; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "14px")
                 .attr("fill", "black");
    
            var ellipseWindowBackground = svgContainer.append("ellipse")
                        .attr("cx", -84)
                       .attr("cy", 470)
                        .attr("rx", 30 )
                        .attr("ry", 110 )
                        .attr("anchor" , "middle")
                        .attr("transform" , "rotate(-26)")
                        .style("fill", "white");
    
    //*--Case Arduino--*//
//Replace the first "------" with the #CaseAverage channel number from thingspeak.com and replace the second one
//with the associated channel's 16 character api key.
d3.json('https://api.thingspeak.com/channels/------/feeds.json?api_key=----------------&results=1&round=2', function(errorcase, datacase) {
       datacase = datacase.feeds;
        datacase.forEach(function(dcase) {
        dcase.field1 = dcase.field1;
        return dcase;
     });
    
    if (errorcase) throw errorcase;
    
var circlesCase = svgContainer.selectAll("g circle")
                           .data(datacase)
                           .enter()
                           .append("circle");
    
    var circleAttributesCase = circlesCase
    //*--Change the X coordinates for circle-*//
                        .attr("cx", 220)
    //*--Change the Y coordinates for circle--*//
                       .attr("cy", 470)
                        .attr("r", 100 )
                        .style("fill", function(dcase) {
    if (dcase.field1 > 70) {
      return "rgba(255, 0,0,0.2)";
    } else if (dcase.field1 > 45) {
      return "rgba(128, 128, 128,0.2)";
    }
    return "rgba(0, 0, 255,0.2)";
  });
    
    var textCase = svgContainer.selectAll("g text")
                        .data(datacase)
                        .enter()
                       .append("text");
    
    var textLabelsCase = textCase
                //*--Change the X coordinates for text--*//
                 .attr("x", 137)
                //*--Change the Y coordinates for text. Should be equal to the cy coordinates for the circle--*//
                 .attr("y", 470)
                 .text( function (dcase) { return  dcase.field1 + "°F"; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "20px")
                 .attr("fill", "black");
var textCaseWord = svgContainer.selectAll("g text")
                        .data(datacase)
                        .enter()
                       .append("text");
    
    var textLabelsCaseWord = textCaseWord
                //*--Change the X coordinates for text--*//
                 .attr("x", 137)
                //*--Change the Y coordinates for text. Should be equal to the cy coordinates for the circle--*//
                 .attr("y", 450)
                 .text( function (dcase) { return "#Case "; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "14px")
                 .attr("fill", "black");
    

    
  });
  });
    
  });

})();