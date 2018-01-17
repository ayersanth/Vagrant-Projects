  google.charts.load('current', {packages: ['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart (){

	console.log("packages loaded")

	var data = google.visualization.arrayToDataTable([
		['Year', 'Birth', 'Deaths', 'Marrages'],
		['2013', 58719, 29568, 19237],
		['2014', 57839, 93298, 39490],
		['2015', 39409, 28394, 39405],
		['2016', 59600, 93848, 39049]
		]);

	var options = {
		title: 'Births, Deaths, and Marrages from NZ',
		subtitle: 'over the last four years',
		hAxis: {
			title: 'Number',
			minValue: 0,
			maxValue: 60000
		},
		vAxis: {
			title: 'Year'
		},
		animation: {
			startup: true,
			duration: 1000,
			easing: 'out'
		}
	}

	var chart = new google.visualization.BarChart(document.getElementById('chartLocation'));

	chart.draw(data, options);

  }