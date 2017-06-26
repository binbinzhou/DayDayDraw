//先实现核心功能，再进行封装
$(function(){
	function showTab(li){
		var self=$(li),
				index=self.index();
		self.addClass('tab-click').siblings().removeClass('tab-click');
		self.parent().next().children()//这里找到切换的div集合
		.eq(index).addClass('display-block').siblings().removeClass('display-block');
	}
	//tab的名称和 内容 接口需暴露出来 自己定义
	function customTabContent(){
		return {'title':'自定义title','content':'我是自定义的内容'};
	}
	//为所有tab增加 点击切换效果,利用事件委托，动态增加tab也能触发
	$('.tab .tab-header').on('click','li',function(){
		showTab(this);
	});
	$('.js-btn-addTab').click(function(){
		var custom=customTabContent();
		//目前寻找操作的tab的权宜之计
		var tab=$(this).closest('.module-con').children('.tab');
		tab.children('.tab-header').append('<li>'+custom.title+'<i class="tab-close iconfont icon-cuowu"></i></li>');
		tab.children('.tab-con').append('<div>'+custom.content+'</div>');
		showTab(tab.children('.tab-header').children().get(-1));
	});
	$('.tab').on('click','.icon-cuowu',function(){
		var self=$(this),
				tabHeader=self.closest('.tab-header'),
				tabCon=self.closest('.tab').children('.tab-con'),
				index=self.parent().index();
				self.closest('.tab').find('.tab-con div').eq(index).remove();
				self.parent().remove();
				if(index===tabHeader.children().length){
					//如果本来是最后一个，显示倒数第二，也就是现在的第一
					showTab(tabHeader.children().get(index-1));
				}else{
					//显示取代index的li
					showTab(tabHeader.children().get(index));
				}
	});


	//tab
	$('.y1-time-tab').on('click','li',function(){
		$(this).addClass('y1-active').siblings().removeClass('y1-active');
	})
})