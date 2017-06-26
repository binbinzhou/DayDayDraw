$(function() {
	//投放人群重合度表格
	var y3data = [];
	var selectGuanggao;
	var selectActivity;
	var tableOpt={
		"tableId": "y1table33", //必须
		"headers": ["序号", "广告主", "活动名称", "投放人群数", "我的人群数", "重合人数", "重合度"], //必须
		"data": y3data, //必须
		"displayNum": 8, //必须  默认 10，每页多少数
		"groupDataNum": 10 //可选  默认 10,最大页数
	}

	$.ajax({
		type: "GET",
		url: "../json/rank3.json",
		dataType: "json",
		success: function(data) {
			tableOpt.data=y3data = data;
			var cs = new table(tableOpt);
			//获取所有广告主并加入下拉框中
			var nameArr = [];
			var nameSelectJson = [];
			var activity=[];
			var activityJson=[];
			for (var i = 0; i < data.length; i++) {
				if (nameArr.indexOf(data[i].name1) === -1) {
					nameArr.push(data[i].name1);
					nameSelectJson.push({
						text: data[i].name1
					})
				}
				if (activity.indexOf(data[i].name2) === -1) {
					activity.push(data[i].name2);
					activityJson.push({
						text: data[i].name2
					})
				}
			}

			
			selectGuanggao=DiySelect({
				selector: $('#select1'),
				tip: '请选择广告主',
				series: nameSelectJson,
				callback:function(){
					var html=$(this).html();
					sortNewTable(html,selectActivity.getValue())
				}
			})

			selectActivity=DiySelect({
				selector: $('#select2'),
				tip: '请选择活动',
				series: activityJson,
				callback:function(){
					var html=$(this).html();
					sortNewTable(selectGuanggao.getValue(),html)
				}
			})
		},
		error: function() {
			alert('失败');
		}
	});

	var sortNewTable=function(selectHtml1,selectHtml2){
		var newSelectTableData=[];		
		var eachSelect1=false;
		var eachSelect2=false;
		//遍历data获取数据
		for(var j=0;j<y3data.length;j++){
			//第1个下拉框涮选
			if($('#select1').find('.dropdwon-tip').length==0){	
				if(selectHtml1==y3data[j].name1){
					eachSelect1=true;
				}else{
					eachSelect1=false;
				}
			}else{
				eachSelect1=true;
			}
			//第二个下拉框涮选
			if($('#select2').find('.dropdwon-tip').length==0){	
				if(selectHtml2==y3data[j].name2){
					eachSelect2=true
				}else{
					eachSelect2=false;
				}
			}else{
				eachSelect2=true;
			}
			if(eachSelect2&& eachSelect1){				
				newSelectTableData.push(y3data[j]);
			}
		}
		tableOpt.data=newSelectTableData;
		new table(tableOpt);
	}

})