<template>
    <el-row>
        <el-col :span="24"><div class="main" style="width:1400px; height:600px;"></div></el-col>
    </el-row>
</template>

<script>
import '../../node_modules/echarts/map/js/world.js'
export default {
    methods: {
        init() {
			let myEchart = this.$Echart.init(document.querySelector('.main'))
			let MyData = [
                //名称  精度 维度  数值
                {name: '海门', value: [121.15, 31.89, 90]},
                {name: '鄂尔多斯', value: [109.781327, 39.608266, 120]},
                {name: '招远', value: [120.38, 37.35, 142]},
                {name: '舟山', value: [122.207216, 29.985295, 123]}
						]
			let option = {
					// 标题
					backgroundColor: '#fff', // 地图容器的背景颜色
				    title : {
				        text: '世界地图',
				        subtext: '副标题',
				        sublink : 'http://baidu.com',
				        left: 'left',
				        top: 'top'
                    },
                    // 鼠标移到图里面的浮动提示框
				    tooltip : {
						// backgroundColor: 'red',
				        trigger: 'item',  // trigger 触发
				        formatter : function (params) {
				            var value = (params.value + '').split('.');
				            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
									+ '.' + value[1];
									// 系列名   +  地名   +  值
				            return params.seriesName + '<br/>' + params.name + ' : ' + value[2];
				        }
                    },
                    // 右侧工具栏
				    toolbox: {
				        show : true,
				        orient : 'vertical',
				        left: 'right',
				        top: 'center',
				        feature : {
				            mark : {show: true},
				            dataView : {show: true, readOnly: false},  // 数据视图
				            restore : {show: true},		// 还原
				            saveAsImage : {show: true}  // 下载
				        }
                    },
                    // 左下角的条条
				    visualMap: {
				        type: 'continuous',
				        min: 0,
				        max: 1000000,
				        text:['High','Low'],
				        realtime: false,
				        calculable : true,
				        color: ['orangered','yellow','lightskyblue']
					},
					// 世界地图和中国地图
					geo: {
						map: 'world',
						// roam: true,  // 缩放
						itemStyle: {	// 定义样式
							normal: {	// 普通状态下的样式
								areaColor: '#323c48',	//国家的颜色
								borderColor: '#111'  // 国界的颜色
							},
							emphasis: {		// 高亮状态下的样式
								areaColor: '#2a333d'
							}
						}
					},
					// 系列  line pie scatter(散点图)  effectScatter(带涟漪效果的散点图)
					series: [
						{
							name: '地理坐标', // series名称
							type: 'scatter', // series图表类型
							coordinateSystem: 'geo', // series坐标系类型，
							data: MyData,
							symbol: 'circle',  // ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
							symbolSize: 10,  // 标记的大小，
							lable: {
								show: false
							}
						}
					]
				};
			myEchart.setOption(option);
        }
    },
    mounted() {
        this.init()
    }
}
</script>

<style>

</style>
