(function() {

function addAxes (svg, xAxis, yAxis, margin, chartWidth, chartHeight) {

  // clipping to make sure nothing appears behind
  svg.append('clipPath')
    .attr('id', 'axes-clip')
    .append('polygon')
      .attr('points', (-margin.left)                 + ',' + (-margin.top)                 + ' ' +
                      (chartWidth - 1) + ',' + (-margin.top)                 + ' ' +
                      (chartWidth - 1) + ','                 + ' ' +
                      (chartWidth + margin.right)    + ','                  + ' ' +
                      (chartWidth + margin.right)    + ',' + (chartHeight + margin.bottom) + ' ' +
                      (-margin.left)                 + ',' + (chartHeight + margin.bottom));

  var axes = svg.append('g')
    .attr('clip-path', 'url(#axes-clip)');

  axes.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + chartHeight + ')')
    .call(xAxis)
   .selectAll('text')
    .attr('y',0)
  .attr('x',5)
  .attr('dy', '.35em')
  .attr('transform','rotate(90)')
    .style('text-anchor','start');

  axes.append('g')
    .attr('class', 'y axis')
    .call(yAxis)
    .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('RH (%)');

  ;}

function drawPaths (svg, data, x, y) {

  var upperInnerHumidityArea = d3.svg.area()
    .interpolate('basis')
    .x (function (d) { return x(d.created_at) || 1; })
    .y0(function (d) { return y(100); })
    .y1(function (d) { return y(d.field3); });

  var linehumidity = d3.svg.line()
    .interpolate('basis')
    .x(function (d) { return x(d.created_at); })
    .y(function (d) { return y(d.field3); });

  var lowerInnerAreaHumidity = d3.svg.area()
    .interpolate('basis')
    .x (function (d) { return x(d.created_at) || 1; })
    .y0(function (d) { return y(d.field3); })
    .y1(function (d) { return y(0); });

  svg.datum(data);
    
      svg.append('path')
    .attr('class', 'upperInnerHumidityArea')
    .attr('d', upperInnerHumidityArea)
    .attr('clip-path', 'url(#rect-clip)'); 
    
           svg.append("linearGradient")
      .attr("id", "humidity-upperAreaGradient")
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0).attr("y1", y(0))
      .attr("x2", 0).attr("y2", y(100))
    .selectAll("stop")
      .data([
        {offset: "0%", color: "red"},
        {offset: "30%", color: "red"},
        {offset: "30%", color: "white"},
        {offset: "50%", color: "white"},
        {offset: "50%", color: "#DCDCDC"},
        {offset: "100%", color: "#DCDCDC"}
      ])
    .enter().append("stop")
      .attr("offset", function(d) { return d.offset; })
      .attr("stop-color", function(d) { return d.color; });

  svg.append('path')
    .datum(data)
    .attr('class', 'lowerInnerAreaHumidity')
    .attr('d', lowerInnerAreaHumidity)
    .attr('clip-path', 'url(#rect-clip)');

  svg.append("linearGradient")
      .attr("id", "temperature-gradient_linehumidity")
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0).attr("y1", y(0))
      .attr("x2", 0).attr("y2", y(100))
    .selectAll("stop")
      .data([
        {offset: "0%", color: "white"},
        {offset: "20%", color: "white"},
        {offset: "20%", color: "red"},
        {offset: "30%", color: "red"},
        {offset: "30%", color: "black"},
        {offset: "50%", color: "black"},
        {offset: "50%", color: "red"},
        {offset: "60%", color: "red"},
        {offset: "60%", color: "white"},
        {offset: "100%", color: "white"}
      ])
    .enter().append("stop")
      .attr("offset", function(d) { return d.offset; })
      .attr("stop-color", function(d) { return d.color; });
    
    svg.append("linearGradient")
      .attr("id", "temperature-areagradient_humidity")
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0).attr("y1", y(0))
      .attr("x2", 0).attr("y2", y(100))
    .selectAll("stop")
      .data([
        {offset: "0%", color: "#DCDCDC"},
        {offset: "30%", color: "#DCDCDC"},
        {offset: "30%", color: "white"},
        {offset: "50%", color: "white"},
        {offset: "50%", color: "red"},
        {offset: "100%", color: "red"}
      ])
    .enter().append("stop")
      .attr("offset", function(d) { return d.offset; })
      .attr("stop-color", function(d) { return d.color; });
    
   svg.append("path")
      .datum(data)
      .attr("class", "linehumidity")
      .attr("d", linehumidity);
}

function startTransitions (svg, chartWidth, chartHeight, rectClip, x) {
  rectClip.transition()
    .duration(0)
    .attr('width', chartWidth);
}

function makeChart (data) {
  var svgWidth  = 500,
      svgHeight = 400,
      margin = { top: 20, right: 20, bottom: 70, left: 40 },
      chartWidth  = svgWidth  - margin.left - margin.right,
      chartHeight = svgHeight - margin.top  - margin.bottom;

  var x = d3.time.scale().range([0, chartWidth])
            .domain(d3.extent(data, function (d) { return d.created_at; })),
      y = d3.scale.linear().range([chartHeight, 0])
            .domain([20, d3.max(data, function (d) { return 60; })]);

  var xAxis = d3.svg.axis().scale(x).orient('bottom').ticks(10)
                .innerTickSize(-chartHeight).outerTickSize(0).tickPadding(10),
      yAxis = d3.svg.axis().scale(y).orient('left')
                .innerTickSize(-chartWidth).outerTickSize(0).tickPadding(10);

  var svg = d3.select('#humiditychartDoor').append('svg')
    .attr('width',  svgWidth)
    .attr('height', svgHeight)
    .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // clipping to start chart hidden and slide it in later
  var rectClip = svg.append('clipPath')
    .attr('id', 'rect-clip')
    .append('rect')
      .attr('width', 0)
      .attr('height', chartHeight);

  addAxes(svg, xAxis, yAxis, margin, chartWidth, chartHeight);
  drawPaths(svg, data, x, y);
  startTransitions(svg, chartWidth, chartHeight, rectClip, x);
}

var parseDate  = d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse;
//Replace the first "------" with the #Door channel number from thingspeak.com and replace the second one
//with the associated channel's 16 character api key.
d3.json('https://api.thingspeak.com/channels/------/feeds.json?api_key=----------------&days=7', function (error, rawData) {
     rawData = rawData.feeds;
  if (error) {
    console.error(error);
    return;
  }

  var data = rawData.map(function (d) {
    return {
      created_at:  parseDate(d.created_at),
      field1: d.field1,
      field3: d.field3
    };
  });

    makeChart(data);
});

    })();

(function() {

function addAxes (svg, xAxis, yAxis, margin, chartWidth, chartHeight) {

  // clipping to make sure nothing appears behind
  svg.append('clipPath')
    .attr('id', 'axes-clip')
    .append('polygon')
      .attr('points', (-margin.left)                 + ',' + (-margin.top)                 + ' ' +
                      (chartWidth - 1) + ',' + (-margin.top)                 + ' ' +
                      (chartWidth - 1) + ','                 + ' ' +
                      (chartWidth + margin.right)    + ','                  + ' ' +
                      (chartWidth + margin.right)    + ',' + (chartHeight + margin.bottom) + ' ' +
                      (-margin.left)                 + ',' + (chartHeight + margin.bottom));

  var axes = svg.append('g')
    .attr('clip-path', 'url(#axes-clip)');

  axes.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + chartHeight + ')')
    .call(xAxis)
      .selectAll('text')
    .attr('y',0)
  .attr('x',5)
  .attr('dy', '.35em')
  .attr('transform','rotate(90)')
    .style('text-anchor','start');
;

  axes.append('g')
    .attr('class', 'y axis')
    .call(yAxis)
    .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('RH (%)');

  ;}

function drawPaths (svg, data, x, y) {

  var upperInnerHumidityArea = d3.svg.area()
    .interpolate('basis')
    .x (function (d) { return x(d.created_at) || 1; })
    .y0(function (d) { return y(100); })
    .y1(function (d) { return y(d.field3); });

  var linehumidity = d3.svg.line()
    .interpolate('basis')
    .x(function (d) { return x(d.created_at); })
    .y(function (d) { return y(d.field3); });

  var lowerInnerAreaHumidity = d3.svg.area()
    .interpolate('basis')
    .x (function (d) { return x(d.created_at) || 1; })
    .y0(function (d) { return y(d.field3); })
    .y1(function (d) { return y(0); });

  svg.datum(data);
    
      svg.append('path')
    .attr('class', 'upperInnerHumidityArea')
    .attr('d', upperInnerHumidityArea)
    .attr('clip-path', 'url(#rect-clip)'); 
    
           svg.append("linearGradient")
      .attr("id", "humidity-upperAreaGradient")
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0).attr("y1", y(0))
      .attr("x2", 0).attr("y2", y(100))
    .selectAll("stop")
      .data([
        {offset: "0%", color: "red"},
        {offset: "30%", color: "red"},
        {offset: "30%", color: "white"},
        {offset: "50%", color: "white"},
        {offset: "50%", color: "#DCDCDC"},
        {offset: "100%", color: "#DCDCDC"}
      ])
    .enter().append("stop")
      .attr("offset", function(d) { return d.offset; })
      .attr("stop-color", function(d) { return d.color; });

  svg.append('path')
    .datum(data)
    .attr('class', 'lowerInnerAreaHumidity')
    .attr('d', lowerInnerAreaHumidity)
    .attr('clip-path', 'url(#rect-clip)');

  svg.append("linearGradient")
      .attr("id", "temperature-gradient_linehumidity")
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0).attr("y1", y(0))
      .attr("x2", 0).attr("y2", y(100))
    .selectAll("stop")
      .data([
        {offset: "0%", color: "white"},
        {offset: "20%", color: "white"},
        {offset: "20%", color: "red"},
        {offset: "30%", color: "red"},
        {offset: "30%", color: "black"},
        {offset: "50%", color: "black"},
        {offset: "50%", color: "red"},
        {offset: "60%", color: "red"},
        {offset: "60%", color: "white"},
        {offset: "100%", color: "white"}
      ])
    .enter().append("stop")
      .attr("offset", function(d) { return d.offset; })
      .attr("stop-color", function(d) { return d.color; });
    
    svg.append("linearGradient")
      .attr("id", "temperature-areagradient_humidity")
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0).attr("y1", y(0))
      .attr("x2", 0).attr("y2", y(100))
    .selectAll("stop")
      .data([
        {offset: "0%", color: "#DCDCDC"},
        {offset: "30%", color: "#DCDCDC"},
        {offset: "30%", color: "white"},
        {offset: "50%", color: "white"},
        {offset: "50%", color: "red"},
        {offset: "100%", color: "red"}
      ])
    .enter().append("stop")
      .attr("offset", function(d) { return d.offset; })
      .attr("stop-color", function(d) { return d.color; });
    
   svg.append("path")
      .datum(data)
      .attr("class", "linehumidity")
      .attr("d", linehumidity);
}

function startTransitions (svg, chartWidth, chartHeight, rectClip, x) {
  rectClip.transition()
    .duration(0)
    .attr('width', chartWidth);
}

function makeChart (data) {
  var svgWidth  = 500,
      svgHeight = 400,
      margin = { top: 20, right: 20, bottom: 70, left: 40 },
      chartWidth  = svgWidth  - margin.left - margin.right,
      chartHeight = svgHeight - margin.top  - margin.bottom;

  var x = d3.time.scale().range([0, chartWidth])
            .domain(d3.extent(data, function (d) { return d.created_at; })),
      y = d3.scale.linear().range([chartHeight, 0])
            .domain([20, d3.max(data, function (d) { return 60; })]);

  var xAxis = d3.svg.axis().scale(x).orient('bottom').ticks(10)
                .innerTickSize(-chartHeight).outerTickSize(0).tickPadding(10),
      yAxis = d3.svg.axis().scale(y).orient('left')
                .innerTickSize(-chartWidth).outerTickSize(0).tickPadding(10);

  var svg = d3.select('#humiditychartWindow').append('svg')
    .attr('width',  svgWidth)
    .attr('height', svgHeight)
    .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // clipping to start chart hidden and slide it in later
  var rectClip = svg.append('clipPath')
    .attr('id', 'rect-clip')
    .append('rect')
      .attr('width', 0)
      .attr('height', chartHeight);

  addAxes(svg, xAxis, yAxis, margin, chartWidth, chartHeight);
  drawPaths(svg, data, x, y);
  startTransitions(svg, chartWidth, chartHeight, rectClip, x);
}

var parseDate  = d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse;
//Replace the first "------" with the #Window channel number from thingspeak.com and replace the second one
//with the associated channel's 16 character api key.
d3.json('https://api.thingspeak.com/channels/------/feeds.json?api_key=----------------&days=7', function (error, rawData) {
     rawData = rawData.feeds;
  if (error) {
    console.error(error);
    return;
  }

  var data = rawData.map(function (d) {
    return {
      created_at:  parseDate(d.created_at),
      field1: d.field1,
      field3: d.field3
    };
  });

    makeChart(data);
});

    })();

(function() {

function addAxes (svg, xAxis, yAxis, margin, chartWidth, chartHeight) {

  // clipping to make sure nothing appears behind
  svg.append('clipPath')
    .attr('id', 'axes-clip')
    .append('polygon')
      .attr('points', (-margin.left)                 + ',' + (-margin.top)                 + ' ' +
                      (chartWidth - 1) + ',' + (-margin.top)                 + ' ' +
                      (chartWidth - 1) + ','                 + ' ' +
                      (chartWidth + margin.right)    + ','                  + ' ' +
                      (chartWidth + margin.right)    + ',' + (chartHeight + margin.bottom) + ' ' +
                      (-margin.left)                 + ',' + (chartHeight + margin.bottom));

  var axes = svg.append('g')
    .attr('clip-path', 'url(#axes-clip)');

  axes.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + chartHeight + ')')
    .call(xAxis)
        .selectAll('text')
    .attr('y',0)
  .attr('x',5)
  .attr('dy', '.35em')
  .attr('transform','rotate(90)')
    .style('text-anchor','start');

  axes.append('g')
    .attr('class', 'y axis')
    .call(yAxis)
    .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('RH (%)');

  ;}

function drawPaths (svg, data, x, y) {

  var upperInnerHumidityArea = d3.svg.area()
    .interpolate('basis')
    .x (function (d) { return x(d.created_at) || 1; })
    .y0(function (d) { return y(100); })
    .y1(function (d) { return y(d.field3); });

  var linehumidity = d3.svg.line()
    .interpolate('basis')
    .x(function (d) { return x(d.created_at); })
    .y(function (d) { return y(d.field3); });

  var lowerInnerAreaHumidity = d3.svg.area()
    .interpolate('basis')
    .x (function (d) { return x(d.created_at) || 1; })
    .y0(function (d) { return y(d.field3); })
    .y1(function (d) { return y(0); });

  svg.datum(data);
    
      svg.append('path')
    .attr('class', 'upperInnerHumidityArea')
    .attr('d', upperInnerHumidityArea)
    .attr('clip-path', 'url(#rect-clip)'); 
    
           svg.append("linearGradient")
      .attr("id", "humidity-upperAreaGradient")
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0).attr("y1", y(0))
      .attr("x2", 0).attr("y2", y(100))
    .selectAll("stop")
      .data([
        {offset: "0%", color: "red"},
        {offset: "30%", color: "red"},
        {offset: "30%", color: "white"},
        {offset: "50%", color: "white"},
        {offset: "50%", color: "#DCDCDC"},
        {offset: "100%", color: "#DCDCDC"}
      ])
    .enter().append("stop")
      .attr("offset", function(d) { return d.offset; })
      .attr("stop-color", function(d) { return d.color; });

  svg.append('path')
    .datum(data)
    .attr('class', 'lowerInnerAreaHumidity')
    .attr('d', lowerInnerAreaHumidity)
    .attr('clip-path', 'url(#rect-clip)');

  svg.append("linearGradient")
      .attr("id", "temperature-gradient_linehumidity")
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0).attr("y1", y(0))
      .attr("x2", 0).attr("y2", y(100))
    .selectAll("stop")
      .data([
        {offset: "0%", color: "white"},
        {offset: "20%", color: "white"},
        {offset: "20%", color: "red"},
        {offset: "30%", color: "red"},
        {offset: "30%", color: "black"},
        {offset: "50%", color: "black"},
        {offset: "50%", color: "red"},
        {offset: "60%", color: "red"},
        {offset: "60%", color: "white"},
        {offset: "100%", color: "white"}
      ])
    .enter().append("stop")
      .attr("offset", function(d) { return d.offset; })
      .attr("stop-color", function(d) { return d.color; });
    
    svg.append("linearGradient")
      .attr("id", "temperature-areagradient_humidity")
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0).attr("y1", y(0))
      .attr("x2", 0).attr("y2", y(100))
    .selectAll("stop")
      .data([
        {offset: "0%", color: "#DCDCDC"},
        {offset: "30%", color: "#DCDCDC"},
        {offset: "30%", color: "white"},
        {offset: "50%", color: "white"},
        {offset: "50%", color: "red"},
        {offset: "100%", color: "red"}
      ])
    .enter().append("stop")
      .attr("offset", function(d) { return d.offset; })
      .attr("stop-color", function(d) { return d.color; });
    
   svg.append("path")
      .datum(data)
      .attr("class", "linehumidity")
      .attr("d", linehumidity);
}

function startTransitions (svg, chartWidth, chartHeight, rectClip, x) {
  rectClip.transition()
    .duration(0)
    .attr('width', chartWidth);
}

function makeChart (data) {
  var svgWidth  = 500,
      svgHeight = 400,
      margin = { top: 20, right: 20, bottom: 70, left: 40 },
      chartWidth  = svgWidth  - margin.left - margin.right,
      chartHeight = svgHeight - margin.top  - margin.bottom;

  var x = d3.time.scale().range([0, chartWidth])
            .domain(d3.extent(data, function (d) { return d.created_at; })),
      y = d3.scale.linear().range([chartHeight, 0])
            .domain([20, d3.max(data, function (d) { return 60; })]);

  var xAxis = d3.svg.axis().scale(x).orient('bottom').ticks(7)
                .innerTickSize(-chartHeight).outerTickSize(0).tickPadding(10),
      yAxis = d3.svg.axis().scale(y).orient('left')
                .innerTickSize(-chartWidth).outerTickSize(0).tickPadding(10);

  var svg = d3.select('#humiditychartCase').append('svg')
    .attr('width',  svgWidth)
    .attr('height', svgHeight)
    .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // clipping to start chart hidden and slide it in later
  var rectClip = svg.append('clipPath')
    .attr('id', 'rect-clip')
    .append('rect')
      .attr('width', 0)
      .attr('height', chartHeight);

  addAxes(svg, xAxis, yAxis, margin, chartWidth, chartHeight);
  drawPaths(svg, data, x, y);
  startTransitions(svg, chartWidth, chartHeight, rectClip, x);
}

var parseDate  = d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse;
//Replace the first "------" with the #Case channel number from thingspeak.com and replace the second one
//with the associated channel's 16 character api key.
d3.json('https://api.thingspeak.com/channels/------/feeds.json?api_key=----------------&days=7', function (error, rawData) {
     rawData = rawData.feeds;
  if (error) {
    console.error(error);
    return;
  }

  var data = rawData.map(function (d) {
    return {
      created_at:  parseDate(d.created_at),
      field1: d.field1,
      field3: d.field3
    };
  });

    makeChart(data);
});

    })();