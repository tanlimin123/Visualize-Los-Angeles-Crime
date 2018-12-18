
$(function(){


  init();

})
function init(){



  var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];

 
var dom = document.getElementById("histogramChart1");
var myChart = echarts.init(dom);
var app = {};
var posList = [
    'left', 'right', 'top', 'bottom',
    'inside',
    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
];

app.configParameters = {
    rotate: {
        min: -90,
        max: 90
    },
    align: {
        options: {
            left: 'left',
            center: 'center',
            right: 'right'
        }
    },
    verticalAlign: {
        options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
        }
    },
    position: {
        options: echarts.util.reduce(posList, function (map, pos) {
            map[pos] = pos;
            return map;
        }, {})
    },
    distance: {
        min: 90,
        max: 100
    }
};

app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
        var labelOption = {
            normal: {
                rotate: app.config.rotate,
                align: app.config.align,
                verticalAlign: app.config.verticalAlign,
                position: app.config.position,
                distance: app.config.distance
            }
        };
        myChart.setOption({
            series: [{
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }]
        });
    }
};


var labelOption = {
    normal: {
        show: true,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: '{c}  {name|{a}}',
        fontSize: 16,
        rich: {
            name: {
                textBorderColor: '#fff'
            }
        }
    }
};

option = {
    color: ['#003366', '#008899'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {

        data: ['Female', 'Male', ],
        textStyle: {
            color: '#fff'
        }
    },
   
    calculable: true,
    xAxis: [
        {   

          axisLabel: {        
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize:'10'
                                },
                                 rotate:20,
                            },
            type: 'category',
           
            data: ['SIMPLE ASSAULT','BURGLARY', 'BURGLARY FROM VEHICLE', 'THEFT OF IDENTITY', 'THEFT PLAIN - PETTY']
        }

    ],

    yAxis: [
        {
            type: 'value'
        }
    ],
    textStyle: {
            color: '#fff'
        },
    series: [
        {
            name: 'Female',
            type: 'bar',
            barGap: 0,
            label: labelOption,
            data: [77588,46685,54761,50767,50000]
        },
        {
            name: 'Male',
            type: 'bar',
            label: labelOption,
            data: [68070,65197,66187,49523,60692]
        },

    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
  

  
    //医疗费用;



var dom = document.getElementById("histogramChart2");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '堆叠柱状图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
       textStyle: {
                                    color: '#fff',
                                    fontSize:'10'
                                },
       data:['Hispanic/Latin/Mexican','White','Black','Other Asian','Other',],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            axisLabel: {        
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize:'10'
                                },
                                 rotate:30,
                            },
            type : 'category',
            data: ['BATTERY - SIMPLE ASSAULT','BURGLARY', 'BURGLARY FROM VEHICLE', 'THEFT OF IDENTITY', 'THEFT PLAIN - PETTY']
        }
    ],
   yAxis: [
        {
            type: 'value'
        },

    ],
    textStyle: {
            color: '#fff'
        },

    series : [
        {
            name:'Hispanic/Latin/Mexican',
            type:'bar',
            data:[64765,28524,37832,2782,10188],
        },
        {
            name:'White',
            type:'bar',
            stack: '广告',
            data:[30564, 41470, 15808, 4866,16697],
        },
        {
            name:'Black',
            type:'bar',
            stack: '广告',
            data:[43111, 42198, 14864, 4462, 14741],
        },
        {
            name:'Other Asian',
            type:'bar',
            stack: '广告',
            data:[32830, 35094, 15010, 3422,12457],
        },
        {
            name:'Other',
            type:'bar',
            data:[34337, 37095, 17905, 3760, 14783],
            
        },
       
        
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
};

   


    





var dom = document.getElementById("histogramChart3");
var myChart = echarts.init(dom);
var app = {};
option = null;
var dataAxis = ['STREET', 'SINGLE FAMILY DWELLING', 'MULTI-UNIT DWELLING (APARTMENT, DUPLEX, ETC)', 'PARKING LOT', 'SIDEWALK', 'VEHICLE, PASSENGER/TRUCK', 'OTHER BUSINESS', 'DRIVEWAY', 'GARAGE/CARPORT', 'RESTAURANT/FAST FOOD', 'DEPARTMENT STORE', 'MARKET', 'PARKING UNDERGROUND/BUILDING', 'YARD (RESIDENTIAL/BUSINESS)'];
var data = [324729, 318405, 196260, 105753, 75874, 58962, 57233, 31181, 27667, 16976, 15747, 11114, 10673, 10457];

var dataShadow = [];



option = {
  tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
      },
    
    xAxis: {
        data: dataAxis,
        axisLabel: {
            inside: true,
            rotate:90,
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        z: 10
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        }
    },
    dataZoom: [
        {
            type: 'inside',
            
        }
    ],
    series: [
        { // For shadow
            type: 'bar',
            itemStyle: {
                normal: {color: 'rgba(0,0,0,0.05)'}
            },
            barGap:'-100%',
            barCategoryGap:'40%',
            data: dataShadow,
            animation: false
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2378f7'},
                            {offset: 0.7, color: '#2378f7'},
                            {offset: 1, color: '#83bff6'}
                        ]
                    )
                }
            },
            data: data
        }
    ]
};

// Enable data zoom when user click bar.
var zoomSize = 6;
myChart.on('click', function (params) {
    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
    myChart.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
    });
});;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}







    

}
