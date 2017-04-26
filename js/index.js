var obj=[		{ "num": 152.00, "title": "150006", "time": "2015-12-05" },
			{ "num": 210.00, "title": "150010", "time": "2015-12-05" },
			{ "num": 3754.00, "title": "150036", "time": "2015-12-05" },
			{ "num": 562.00, "title": "150060", "time": "2015-12-05" },
			{ "num": 30.00, "title": "150006", "time": "2015-12-06" },
			{ "num": 18.00, "title": "150010", "time": "2015-12-06" },
			{ "num": 20.00, "title": "150026", "time": "2015-12-06" },
			{ "num": 318.00, "title": "150099", "time": "2015-12-06" },
			{ "num": 45.00, "title": "150006", "time": "2015-12-08" },
			{ "num": 10.00, "title": "150010", "time": "2015-12-08" },
			{ "num": 10.00, "title": "150026", "time": "2015-12-08" },
			{ "num": 40.00, "title": "150099", "time": "2015-12-08" },
			{ "num": 351.00, "title": "150006", "time": "2015-12-09" },
			{ "num": 307.00, "title": "150010", "time": "2015-12-09" },
			{ "num": 175.00, "title": "150026", "time": "2015-12-09" },
			{ "num": 79.00, "title": "150099", "time": "2015-12-09" },
			{ "num": 20.00, "title": "150006", "time": "2015-12-10" },
			{ "num": 32.00, "title": "150010", "time": "2015-12-10" },
			{ "num": 0.00, "title": "150026", "time": "2015-12-10" },
			{ "num": 20.00, "title": "150099", "time": "2015-12-10" }];
 var xlabels = ["150099", "150010", "150006", "150026"];
 var labels=[];
 var titles=[];
 var dataOne=[];
 var dataTwo=[];
 var dataThree=[];
 var dataFour=[];
 var datasets=[];
$.each(obj,function(index, el) {
	var label=el.time;
	var title=el.title;
	var isInArray=$.inArray(label,labels);
	if (isInArray===-1) {
	   labels.push(label)
	}
	var isTitle=$.inArray(title,titles);
	if (isTitle===-1) {
	   titles.push(title)
	}
	if (el.title==xlabels[0]) {
	   dataOne.push(el.num);
	}
	if (el.title==xlabels[1]) {
	 dataTwo.push(el.num);
	}
	if (el.title==xlabels[2]) {
	   dataThree.push(el.num);
	}
	if (el.title==xlabels[3]) {
	  dataFour.push(el.num);
	}

});	
var datasOne={
		                fillColor: "rgba(232,75,164,0.2)",
		                strokeColor: "rgba(232,75,164,1)",
		                pointColor: "rgba(232,75,164,1)",
		                pointStrokeColor: "#fff",
		                pointHighlightFill: "#fff",
		                pointHighlightStroke: "rgba(255,106,106,1)",
			     data : []
}
var datasTwo={ 
			     fillColor: "rgba(251,233,71,0.2)",
		                strokeColor: "rgba(251,233,71,1)",
		                pointColor: "rgba(251,233,71,1)",
		                pointStrokeColor: "#fff",
		                pointHighlightFill: "#fff",
		                pointHighlightStroke: "rgba(205,133,63,1)",
			      data : []
}
var datasThree={
			      fillColor: "rgba(53,197,69,0.2)",
		                strokeColor: "rgba(53,197,69,1)",
		                pointColor: "rgba(53,197,69,1)",
		                pointStrokeColor: "#fff",
		                pointHighlightFill: "#fff",
		                pointHighlightStroke: "rgba(102,205,170,1)",
			      data : []
}
var datasFour={
			     fillColor: "rgba(49,180,200,0.2)",
		                strokeColor: "rgba(49,180,200,1)",
		                pointColor: "rgba(49,180,200,1)",
		                pointStrokeColor: "#fff",
		                pointHighlightFill: "#fff",
		                pointHighlightStroke: "rgba(0,206,209,1)",
			      data : []
}
datasOne.data=dataOne;
datasTwo.data=dataTwo;	
datasThree.data=dataThree;
datasFour.data=dataFour;
datasets.push(datasOne,datasTwo,datasThree,datasFour);
//折线图
var  line = $("#chartLine").get(0).getContext("2d");
var myNewChart = new Chart(line);
	var data = {
	labels : labels,
	datasets : datasets,
}
new Chart(line).Line(data,{
	responsive: true,
           datasetFill: false
});
//柱状图
var  bar = $("#chartBar").get(0).getContext("2d");
var myNewChart = new Chart(bar);
	var data = {
	labels : labels,
	datasets : datasets,
}
new Chart(bar).Bar(data,{
	responsive: true,
           datasetFill: false
});
//雷达图
var  radar = $("#chartRadar").get(0).getContext("2d");
var myNewChart = new Chart(radar);
	var data = {
	labels : labels,
	datasets : datasets,
}
new Chart(radar).Radar(data,{
	responsive: true,
           datasetFill: false
});
//饼图
var  pie = $("#chartPie").get(0).getContext("2d");
var myNewChart = new Chart(pie);
//饼状图
var  doughnut = $("#chartDoughnut").get(0).getContext("2d");
var myNewChart = new Chart(doughnut);
var textData={a:"10",b:"90",c:"24",d:"58"};
var data = [
	{
		value : textData.a,
		color: "rgba(232,75,164,1)"
	},
	{
		value : textData.b,
		color: "rgba(251,233,71,1)"
	},
	{
		value : textData.c,
		color: "rgba(53,197,69,1)"
	},
	{
		value : textData.d,
		color: "rgba(49,180,200,1)"
	},

]

new Chart(pie).Pie(data,{
	responsive: true,
           datasetFill: false,       
});
new Chart(doughnut).Doughnut(data,{
	responsive: true,
           datasetFill: false,       
});