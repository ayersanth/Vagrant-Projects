google.charts.load('current', {'packages':['corechart', 'controls']});
google.charts.setOnLoadCallback(drawDashboard);

function drawDashboard(){

    $.ajax({
        url: "js/peopleInfo.json",
        dataType: "json",
        success:function(dataFromJSON){


        };
    )};

}