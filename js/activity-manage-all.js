$(function(){

	

  getActivityManageAllData();

  $('.js-activity-manage-search').click(function(event){
  	var event=event|| window.event;
  	event.preventDefault();
  	getActivityManageAllData();
  })


  function getActivityManageAllData(){
  	$.ajax({
			type: "GET",
			url: "../json/activityManage-all.json?audio="+audioSelect.getValue()+'&status='+statusSelect.getValue()+'&search='+$('.js-keyword').val(),
			dataType: "json",
			error:function(data){
				console.log(data)
			},
			success: function(data) {
				// 表格数据
        for (var i = 0; i < data.length; i++) {  
           data[i].opt= '<div class="dropdwon dropdwon-table"><div class="dropdwon-header"><p class="dropdwon-text">详情</p><i class="iconfont icon-sanjiao"></i></div>';
           data[i].opt2= '<div class="dropdwon dropdwon-table"><div class="dropdwon-header"><p class="dropdwon-text">删除</p><i class="iconfont icon-sanjiao"></i></div>';
        }
        var cs = new table({
            "tableId": "y1table3", //必须
            "headers": ["序号", "商品编号", "商品名称", "商品类型", "归属广告主","商品状态","失效时间","操作","删除"], //必须
            "data": data, //必须
            "displayNum": 8, //必须  默认 10，每页多少数
            "groupDataNum": 10 //可选  默认 10,最大页数
        });
			}
	  })
  }
})