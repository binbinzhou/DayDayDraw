

$('.form-card').off('click').on('click', function() {
    if (!$(this).hasClass('active')) {
        $(this).addClass('active').parent().siblings().children('.form-card').removeClass('active');
    }
    var str = $(this).find('p').text();
    switch (str) {
        case '从商品库中选择':
            $('.mask').show();
            $('.modal-goods').show();
            //当模态框出现之后禁止背景的滚动条滑动
            $('body').css('overflow', 'hidden');
            break;
        case '新增商品信息':
            $('.mask').show();
            $('.modal-goods').show();
            $('body').css('overflow', 'hidden');
            break;
        case '从人群库中选择':
            $('.mask').show();
            $('.modal-person').show();
            $('body').css('overflow', 'hidden');
            break;
        case '新增人群信息':
            $('.mask').show();
            $('.modal-person').show();
            $('body').css('overflow', 'hidden');
            break;
    }
});

//投放媒体多选，其余单选
$('.form-card.js-MultiAudio').off('click').on('click', function() {
    if (!$(this).hasClass('active')) {
        $(this).addClass('active');
    }else{
        $(this).removeClass('active');
    }
});



//关闭模态框
$('.js-close-modal').off('click').on('click', function() {
    $('body').css('overflow', 'auto');
    $('.mask').hide();
    $('.modal-person').hide();
    $('.modal-goods').hide();
});

//人群模态框中的表格
//模拟假数据
var y18data = [],
    y18data2 = [];

for (var i = 0; i < 30; i++) {
    y18data[i] = {
        id: i + 1,
        name1: "dx20170209001",
        name2: "ktv受众",
        name3: "180000",
        name4: "2017-02-09",
        opt: "<button class='btn' type='button'>确定</button>"
    };
    y18data2[i] = 'xxxxxxxxxxxxxxxxxxxxxxxx' + i;
}
var y18cs = new table({
    "tableId": "y18table1", //必须
    "headers": ["序号", "人群编号", "人群名称", "人群规模", "创建时间", "操作"], //必须
    "data": y18data, //必须
    "displayNum": 8, //必须  默认 10，每页多少数
    "groupDataNum": 10 //可选  默认 10,最大页数
});

$("#y18table1").off('click').on("click", 'tbody tr', function() {
    if (!$(this).hasClass('details')) {
        var index = $(this).find(".ykytd-id").text();
        if (index % 2 === 0) {
            $(this).after('<tr class="details evenrow"><td colspan=6>详细信息：' + y18data2[index] + '</td></tr>');
        } else {
            $(this).after('<tr class="details"><td colspan=6>详细信息：' + y18data2[index] + '</td></tr>');
        }

        $(this).find(".btn").addClass('btn-orange').css({
            'border-color': '#FF802C',
            'color': '#fff'
        });
        $(this).siblings("tr").find(".btn").removeClass('btn-orange').css({
            'border-color': '#C9C9C9',
            'color': '#5E5E5E'
        });
        $(this).next(".details").show().siblings(".details").hide();

        //选中人群--模态框中点击确认按钮选中当前点击的一行获取要展示的数据
        $(this).find('.btn').off('click').on('click', function() {
            var pnum = $(this).parents('tr').find('.ykytd-name2').text();
            var pname = $(this).parents('tr').find('.ykytd-name3').text();
            $('.person-name').text(pname);
            $('.boxp').text(pnum);
            $('.modal-person').hide();
            $('.mask').hide();
            $('body').css('overflow', 'auto');
            $('.send-person').hide();
            $('.send-person-then').css('display', 'inline-block');
        });
    }
});
//点击删除按钮返回选择
$('.js-delect-per').off('click').on('click', function() {
    $('.send-person-then').hide();
    $('.send-person').show();
});



//选择商品模态框中的表格
//模拟数据
var y19data = [];
for (var i = 0; i < 28; i++) {
    y19data[i] = ['img/y16coupon.fw.png', '坚果5元代金劵', '口袋小鸟', '1', '2'];
}
y19data[1] = ['img/y16coupon.fw.png', '坚果5元代金劵', '口袋小鸟', '1', '1'];
y19data[2] = ['img/y16coupon.fw.png', '坚果5元代金劵', '口袋小鸟', '2', '1'];
y19data[3] = ['img/y16coupon.fw.png', '坚果5元代金劵', '口袋小鸟', '2', '2'];

//固定模板数据
var y19datatmp = [];
for (var i = 0; i < y19data.length; i++) {
    if (y19data[i][3] == '1' && y19data[i][4] == '1') {
        y19datatmp[i] = {
            name1: ['<div class="y16-form y19-box">' +
                '<div class="form-line">' +
                '<div class="box clearfix">' +
                '<div class="boxl fl">' +
                '<img src=" ' + y19data[i][0] + ' ">' +
                '</div>' +
                '<div class="boxr fl">' +
                '<p class="p1">' + y19data[i][1] + '</p>' +
                '<p class="p2">' + y19data[i][2] + '</p>' +
                '<p class="p3">手机端素材 <i class="iconfont icon-gou"></i></p>' +
                '<p class="p4">PC端素材 <i class="iconfont icon-gou"></i></p>' +
                '</div></div></div></div>'
            ],
        };
    } else if (y19data[i][3] == '2' && y19data[i][4] == '1') {
        y19datatmp[i] = {
            name1: ['<div class="y16-form y19-box">' +
                '<div class="form-line">' +
                '<div class="box clearfix">' +
                '<div class="boxl fl">' +
                '<img src=" ' + y19data[i][0] + ' ">' +
                '</div>' +
                '<div class="boxr fl">' +
                '<p class="p1">' + y19data[i][1] + '</p>' +
                '<p class="p2">' + y19data[i][2] + '</p>' +
                '<p class="p3" style="color: red">*手机端素材未上传</p>' +
                '<p class="p4">PC端素材 <i class="iconfont icon-gou"></i></p>' +
                '</div></div></div></div>'
            ],
        };
    } else if (y19data[i][3] == '1' && y19data[i][4] == '2') {
        y19datatmp[i] = {
            name1: ['<div class="y16-form y19-box">' +
                '<div class="form-line">' +
                '<div class="box clearfix">' +
                '<div class="boxl fl">' +
                '<img src=" ' + y19data[i][0] + ' ">' +
                '</div>' +
                '<div class="boxr fl">' +
                '<p class="p1">' + y19data[i][1] + '</p>' +
                '<p class="p2">' + y19data[i][2] + '</p>' +
                '<p class="p3">手机端素材 <i class="iconfont icon-gou"></i></p>' +
                '<p class="p4" style="color: red">*PC端素材未上传</p>' +
                '</div></div></div></div>'
            ],
        };
    } else if (y19data[i][3] == '2' && y19data[i][4] == '2') {
        y19datatmp[i] = {
            name1: ['<div class="y16-form y19-box">' +
                '<div class="form-line">' +
                '<div class="box clearfix">' +
                '<div class="boxl fl">' +
                '<img src=" ' + y19data[i][0] + ' ">' +
                '</div>' +
                '<div class="boxr fl">' +
                '<p class="p1">' + y19data[i][1] + '</p>' +
                '<p class="p2">' + y19data[i][2] + '</p>' +
                '<p class="p3" style="color: red">*手机端素材未上传</p>' +
                '<p class="p4" style="color: red">*PC端素材未上传</p>' +
                '</div></div></div></div>'
            ],
        };
    }
}
var y19cs = new table({
    "tableId": "y19table1", //必须
    "headers": [''], //必须
    "data": y19datatmp, //必须
    "displayNum": 4, //必须  默认 10，每页多少数
    "groupDataNum": 10 //可选  默认 10,最大页数
});

//选择商品--点击每一行显示要展示的数据
$('#y19table1').off('click').on('click', 'tbody tr', function() {
    $(this).addClass('y19border').siblings("tr").removeClass("y19border");
    $('.modal-goods').hide();
    $('.mask').hide();
    $('body').css('overflow', 'auto');
    $('.send-goods').hide();
    $('.send-goods-then').css('display', 'inline-block');
});
//点击删除按钮返回选择
$('.js-delect-goods').off('click').on('click', function() {
    $('.send-goods-then').hide();
    $('.send-goods').show();
});



