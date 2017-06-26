$(function(){
	 
	// var pushSelectMaster;
 //  $.ajax({
	// 		type: "GET",
	// 		url: "../json/activityManage-master.json",
	// 		dataType: "json",
	// 		error:function(data){
	// 			console.log(data)
	// 		},
	// 		success: function(data) {
	// 			var series=[];
	// 			for(var i=0;i<data.length;i++){
	// 				series.push({text:data[i]})
	// 			}   
	// 			pushSelectMaster=DiySelect({
	// 	      selector: $('#select3'),
	// 	      series:series
	// 	  	});
	// 	  	//初始化
 //  			getActivityManagePushData();
	// 		}
	//   })

  $('.js-activityManagePushSearch').unbind().click(function(event){
  	var event=event|| window.event;
  	event.preventDefault();
  	console.log(audioSelect.getValue())

  	getActivityManagePushData();
  })


  var getActivityManagePushData=function(){
  	$.ajax({
			type: "GET",
			url: "../json/activityManage-push.json?pushMaster="+audioSelect.getValue()+'&search='+$('.js-push-keyword').val(),
			dataType: "json",
			error:function(data){
				console.log(data)
			},
			success: function(data) {
				// 表格数据
        // for (var i = 0; i < data.length; i++) {  
        //    data[i].opt= '<div class="dropdwon dropdwon-table"><div class="dropdwon-header"><p class="dropdwon-text">详情</p><i class="iconfont icon-sanjiao"></i></div>';
        // }
        var cs = new table({
            "tableId": "y1table1", //必须
            "headers": ["序号", "广告主", "活动名称", "领奖数(点击)", "点击率"], //必须
            "data": data, //必须
            "displayNum": 8, //必须  默认 10，每页多少数
            "groupDataNum": 10 //可选  默认 10,最大页数
        });
			}
	  })
  }
  
  getActivityManagePushData();

})