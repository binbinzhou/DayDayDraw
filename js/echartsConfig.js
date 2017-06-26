//年龄分析的柱状图
function showEcharts(id, xData, maleData, femaleData) {
    var barEcharts = echarts.init(document.getElementById(id));
    var barOption = {
        grid: {
            x: '35px',
            y: '35px',
            x2: '30px',
            y2: '25px',
            borderColor: "#ccc"
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
                    // type:'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: xData,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#c9c9c9'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#c9c9c9'
                }
            }
        },
        yAxis: [{
            type: 'value',
            name: '(%)',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                margin: 12,
                textStyle: {
                    color: '#c9c9c9'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#c9c9c9'
                }
            }
        }],
        series: [{
            name: '男',
            type: 'bar',
            barWidth: 8,
            itemStyle: {
                normal: {
                    color: '#33cc99'
                }
            },
            data: maleData
        }, {
            name: '女',
            type: 'bar',
            barWidth: 8,
            itemStyle: {
                normal: {
                    color: '#ff802c'
                }
            },
            data: femaleData
        }]
    };
    barEcharts.setOption(barOption);
}
//x轴的下标数据
var xData = ['01', '02', '03', '04', '05'];

//绘制第一个柱状图
var maleData1 = [11, 15, 6, 9, 18];
var femaleData1 = [10, 16, 5, 13, 15];
showEcharts('bar-echarts1', xData, maleData1, femaleData1);

//绘制第二个柱状图
var maleData2 = [23, 20, 17, 14, 9];
var femaleData2 = [10, 14, 12, 22, 15];
showEcharts('bar-echarts2', xData, maleData2, femaleData2);
