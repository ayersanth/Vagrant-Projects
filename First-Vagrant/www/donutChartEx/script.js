google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart (){
	$.ajax({

		url: "schools.json",
		dataType: "json",

		success:function(dataFromServer){

			var data = new google.visualization.DataTable();
			data.addColumn('string', 'School');
			data.addColumn('number', 'percentage');

			for (var i = 0; i < dataFromServer.length; i++) {
				data.addRow([dataFromServer[i].school, dataFromServer[i].webDesign/*, dataFromServer[i].ux, dataFromServer[i].music, dataFromServer[i].english, dataFromServer[i].history, dataFromServer[i].classics*/])
			}

			var options = {
				title: "Number of Students and what they Study",
				pieHole: 0.4
			}

			var chart = new google.visualization.PieChart(document.getElementById('chartLocation'));
			google.visualization.events.addListener(chart, 'select', clickEvent);
			chart.draw(data, options);

			function clickEvent(){
				var tableRow = chart.getSelection()[0].row;
				var schoolData = dataFromServer[tableRow];
				var studyData = schoolData.

				if(schoolData){
					function drawChart (){
						$.ajax({

							url: "schools.json",
							dataType: "json",

							success:function(dataFromServer){

								var data = new google.visualization.DataTable();
								data.addColumn('string', 'School');
								data.addColumn('number', 'percentage');

								for (var i = 0; i < dataFromServer.length; i++) {
									data.addRow([dataFromServer[i].school, dataFromServer[i].webDesign/*, dataFromServer[i].ux, dataFromServer[i].music, dataFromServer[i].english, dataFromServer[i].history, dataFromServer[i].classics*/])
								}

								var options = {
									title: "Number of Students and what they Study",
									pieHole: 0.4
								}

								var chart = new google.visualization.PieChart(document.getElementById('chartLocation'));
								google.visualization.events.addListener(chart, 'select', clickEvent);
								chart.draw(data, options);
							}
						}
					}
				}
			}

		},

		error:function(error){
			console.log(error);
			alert("something went wrong cannot connect to server")
		}

	})
}