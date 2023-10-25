google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

addEventListener("resize", (event) => {
  drawChart();
});
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Month", "Lợi nhuận"],
    [1, 10000000],
    [2, 15000000],
    [3, 20000000],
    [4, 25000000],
    [5, 50000000],
    [6, 35000000],
    [7, 30000000],
    [8, 45000000],
    [9, 20000000],
    [10, 55000000],
    [11, 70000000],
    [12, 65000000],
  ]);




  var options = {
    hAxis: {
      ticks: [
        { v: 1, f: "1" },
        { v: 2, f: "2" },
        { v: 3, f: "3" },
        { v: 4, f: "4" },
        { v: 5, f: "5" },
        { v: 6, f: "6" },
        { v: 7, f: "7" },
        { v: 8, f: "8" },
        { v: 9, f: "9" },
        { v: 10, f: "10" },
        { v: 11, f: "11" },
        { v: 12, f: "12" },
      ],
      gridlines: {
        color: "none",
      },
    },
    vAxis: {
      gridlines: {
        color: "none",
      },
    },
    legend: "none",
    height: "100%",
    width: "100%",
    chartArea: { width: "97%", height: "80%" },
    backgroundColor: { fill: "transparent" },
    title: "Lợi nhuận (theo tháng)",
    titleTextStyle: {
      fontSize: 23,
    },
    curveType: 'function',
    

    
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("chart_div")
  );
  chart.draw(data, options);
}
