google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart (){
	$.ajax({

		url: "peopleInfo.json",
		dataType: "json",

		success:function(dataFromServer){

			var data = new google.visualization.DataTable();
			data.addColumn('number', 'Age');
			data.addColumn('number', 'Income');

			for (var i = 0; i < dataFromServer.length; i++) {
				data.addRow([dataFromServer[i].age, dataFromServer[i].anual_income])
			}

			var options = {
				title: "Age vs Annual Income",
				hAxis:{
					title: "Age"
				},
				vAxis:{
					title: "Annual Income"
				}
			}

			var chart = new google.visualization.ScatterChart(document.getElementById('chartLocation'));
			google.visualization.events.addListener(chart, 'select', clickEvent);
			chart.draw(data, options);

			function clickEvent(){
				var tableRow = chart.getSelection()[0].row;
				var personData = dataFromServer[tableRow];

				if(personData){
					document.getElementById('name').innerText = personData.first_name + " " + personData.last_name;
					document.getElementById('avatarImage').src = personData.avatar;
					document.getElementById('avatarImage').alt = "Avatar";
					document.getElementById('email').innerText = personData.email;
					document.getElementById('company').innerText = personData.company;
					document.getElementById('ip').innerText = personData.ip;
					document.getElementById('age').innerText = personData.age;
					document.getElementById('gender').innerText = personData.gender;
				}
			}

		},

		error:function(error){
			console.log(error);
			alert("something went wrong cannot connect to server")
		}

	})
}