

$(function(){


  init();

})
function init(){



var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];

 
var dom = document.getElementById("CrimeChart1");
var myChart = echarts.init(dom);
var app = {};
var Weapon = ['BATTERY - SIMPLE ASSAULT', 'BURGLARY', 'BURGLARY FROM VEHICLE',
       'INTIMATE PARTNER - SIMPLE ASSAULT', 'THEFT OF IDENTITY',
       'VEHICLE - STOLEN'];
var place =['MULTI-UNIT', 'OTHER BUSINESS','PARKING LOT', 'SIDEWALK', 'SINGLE FAMILY HOUSE', 'STREET'];

var data = [[0, 0, 26100], [0, 1, 6248], [0, 3, 8401], [0, 4, 17219], [0, 5, 27810], [0, 2, 23094], [1, 0, 21030], [1, 1, 8197], [1, 3, 349], [1, 4, 20], [1, 5, 55601], [1, 2, 266], [2, 0, 1076], [2, 1, 404], [2, 3, 29440], [2, 4, 537], [2, 5, 1390], [2, 2, 62288], [3, 0, 31021], [3, 1, 614], [3, 3, 2422], [3, 4, 4417], [3, 5, 30250], [3, 2, 9668], [4, 0, 23651], [4, 1, 3231], [4, 3, 269], [4, 4, 112], [4, 5, 65200], [4, 2, 2247], [5, 0, 2], [5, 1, 374], 
[5, 3, 19701],[5, 4, 61], [5, 5, 8], [5, 2, 89335]];
data = data.map(function (item) {
    return [item[0], item[1], item[2]];
});
option = {
    
      tooltip: {
        position: 'top',
        textStyle:{
                fontSize:14
            },
    },
    animation: false,
    grid: {
        height: '55%',
        y: '20%',
        x:120,
    },
    xAxis: {
       axisLabel:{
           show:false,
       },
        type: 'category',
        data: Weapon,
        splitArea: {
            show: true
        }
    },
    yAxis: {
       axisLabel:{
          rotate:45,
           color:'#fff',
       },
        type: 'category',

        data: place,
        splitArea: {
            show: true
        }
    },
    visualMap: {
        min: 0,
        max: 89335,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '10%',
        textStyle:{color:'#fff'},
    },
    series: [{
        name: 'Occurrence Times',
        type: 'heatmap',
        data: data,
        label: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};








if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
  

  



var dom = document.getElementById("CrimeChart3");
var myChart = echarts.init(dom);
var app = {};
option = null;


   option = {
       backgroundColor: '#0a1235',
       tooltip: {
           trigger: 'item',
           formatter: "{b} : {c} times"
       },
       legend: {
           x: 'center',
           y: '15%',
           data: ['STRONG-ARM', 'UNKNOWN WEAPON/OTHER WEAPON', 'HAND GUN', 'SCREWDRIVER',],
           icon: 'circle',
           textStyle: {
               color: '#fff',
           }
       },
       calculable: true,
       series: [{
           name: 'frequency of occurrence',
           type: 'pie',
           //起始角度，支持范围[0, 360]
           startAngle: 0,
           //饼图的半径，数组的第一项是内半径，第二项是外半径
           radius: [41, 153.75],
           //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
           center: ['50%', '35%'],
           //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
           // 'radius' 面积展现数据的百分比，半径展现数据的大小。
           //  'area' 所有扇区面积相同，仅通过半径展现数据大小
           roseType: 'area',
           //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
           avoidLabelOverlap: false,
           label: {
               normal: {
                   show: true,
                   formatter: '{c}times'
               },
               emphasis: {
                   show: true
               }
           },
           labelLine: {
               normal: {
                   show: true,
                   length2: 1,
               },
               emphasis: {
                   show: true
               }
           },
           data: [{
                   value: 7,
                   name: 'STRONG-ARM',
                   itemStyle: {
                       normal: {
                           color: '#f845f1'
                       }
                   }
               },
               {
                   value: 3,
                   name: 'UNKNOWN WEAPON/OTHER WEAPON',
                   itemStyle: {
                       normal: {
                           color: '#ad46f3'
                       }
                   }
               },
               {
                   value:1,
                   name: 'HAND GUN',
                   itemStyle: {
                       normal: {
                           color: '#5045f6'
                       }
                   }
               },
               {
                   value: 1,
                   name: 'SCREWDRIVER',
                   itemStyle: {
                       normal: {
                           color: '#4777f5'
                       }
                   }
               },
            
               {
                   value: 0,
                   name: "",
                    itemStyle: {
                       normal: {
                           color: 'transparent'
                       }
                   },
                   label: {
                       show: false
                   },
                   labelLine: {
                       show: false
                   }
               },
               {
                   value: 0,
                   name: "",
                   itemStyle: {
                       normal: {
                           color: 'transparent'
                       }
                   },
                   label: {
                       show: false
                   },
                   labelLine: {
                       show: false
                   }
               },
               {
                   value: 0,
                   name: "",
                    itemStyle: {
                       normal: {
                           color: 'transparent'
                       }
                   },
                   label: {
                       show: false
                   },
                   labelLine: {
                       show: false
                   }
               },
               {
                   value: 0,
                   name: "",
                    itemStyle: {
                       normal: {
                           color: 'transparent'
                       }
                   },
                   label: {
                       show: false
                   },
                   labelLine: {
                       show: false
                   }
               },
               {
                   value: 0,
                   name: "",
                    itemStyle: {
                       normal: {
                           color: 'transparent'
                       }
                   },
                   label: {
                       show: false
                   },
                   labelLine: {
                       show: false
                   }
               },
               {
                   value: 0,
                   name: "",
                    itemStyle: {
                       normal: {
                           color: 'transparent'
                       }
                   },
                   label: {
                       show: false
                   },
                   labelLine: {
                       show: false
                   }
               },
               {
                   value: 0,
                   name: "",
                    itemStyle: {
                       normal: {
                           color: 'transparent'
                       }
                   },
                   label: {
                       show: false
                   },
                   labelLine: {
                       show: false
                   }
               },
               {
                   value: 0,
                   name: "",
                    itemStyle: {
                       normal: {
                           color: 'transparent'
                       }
                   },
                   label: {
                       show: false
                   },
                   labelLine: {
                       show: false
                   }
               },
               {
                   value: 0,
                   name: "",
                    itemStyle: {
                       normal: {
                           color: 'transparent'
                       }
                   },
                   label: {
                       show: false
                   },
                   labelLine: {
                       show: false
                   }
               }
           ]
       }]
   };

if (option && typeof option === "object") {
    myChart.setOption(option, true);
};

   



var dom = document.getElementById("CrimeChart2");
var myChart = echarts.init(dom);
var app = {};
option = null;
var data = {
    value: [{'name': 'STRONG-ARM (HANDS, FIST, FEET OR BODILY FORCE)', 'value': 319818},
 {'name': 'VERBAL THREAT', 'value': 43814},
 {'name': 'UNKNOWN WEAPON/OTHER WEAPON', 'value': 40746},
 {'name': 'HAND GUN', 'value': 25352},
 {'name': 'SEMI-AUTOMATIC PISTOL', 'value': 10096},
 {'name': 'KNIFE WITH BLADE 6INCHES OR LESS', 'value': 9335},
 {'name': 'OTHER KNIFE', 'value': 6946},
 {'name': 'UNKNOWN FIREARM', 'value': 6037},
 {'name': 'VEHICLE', 'value': 5348},
 {'name': 'REVOLVER', 'value': 4567},
 {'name': 'BOTTLE', 'value': 3806},
 {'name': 'BLUNT INSTRUMENT', 'value': 3347},
 {'name': 'ROCK/THROWN OBJECT', 'value': 3233},
 {'name': 'STICK', 'value': 3200},
 {'name': 'CLUB/BAT', 'value': 3155},
 {'name': 'FOLDING KNIFE', 'value': 3065},
 {'name': 'SIMULATED GUN', 'value': 2842},
 {'name': 'KITCHEN KNIFE', 'value': 2785},
 {'name': 'MACE/PEPPER SPRAY', 'value': 2652},
 {'name': 'KNIFE WITH BLADE OVER 6 INCHES IN LENGTH', 'value': 2459},
 {'name': 'BELT FLAILING INSTRUMENT/CHAIN', 'value': 2065},
 {'name': 'AIR PISTOL/REVOLVER/RIFLE/BB GUN', 'value': 1798},
 {'name': 'OTHER CUTTING INSTRUMENT', 'value': 1668},
 {'name': 'PHYSICAL PRESENCE', 'value': 1298},
 {'name': 'SCREWDRIVER', 'value': 1201},
 {'name': 'PIPE/METAL PIPE', 'value': 1100},
 {'name': 'UNKNOWN TYPE CUTTING INSTRUMENT', 'value': 1010},
 {'name': 'SHOTGUN', 'value': 1006},
 {'name': 'HAMMER', 'value': 905},
 {'name': 'SCISSORS', 'value': 764},
 {'name': 'MACHETE', 'value': 748},
 {'name': 'RIFLE', 'value': 657},
 {'name': 'OTHER FIREARM', 'value': 627},
 {'name': 'FIXED OBJECT', 'value': 566},
 {'name': 'CONCRETE BLOCK/BRICK', 'value': 565},
 {'name': 'STUN GUN', 'value': 434},
 {'name': 'SWITCH BLADE', 'value': 418},
 {'name': 'BOARD', 'value': 404},
 {'name': 'BOMB THREAT', 'value': 351},
 {'name': 'CAUSTIC CHEMICAL/POISON', 'value': 340},
 {'name': 'BRASS KNUCKLES', 'value': 322},
 {'name': 'FIRE', 'value': 320},
 {'name': 'GLASS', 'value': 313},
 {'name': 'TIRE IRON', 'value': 273},
 {'name': 'DEMAND NOTE', 'value': 244},
 {'name': 'SCALDING LIQUID', 'value': 237},
 {'name': 'TOY GUN', 'value': 236},
 {'name': 'AXE', 'value': 204},
 {'name': 'RAZOR BLADE', 'value': 177},
 {'name': 'AUTOMATIC WEAPON/SUB-MACHINE GUN', 'value': 174},
 {'name': 'ASSAULT WEAPON/UZI/AK47/ETC', 'value': 151},
 {'name': 'RAZOR', 'value': 138},
 {'name': 'SWORD', 'value': 133},
 {'name': 'EXPLOXIVE DEVICE', 'value': 129},
 {'name': 'SAWED OFF RIFLE/SHOTGUN', 'value': 129},
 {'name': 'ICE PICK', 'value': 124},
 {'name': 'HECKLER & KOCH 93 SEMIAUTOMATIC ASSAULT RIFLE', 'value': 118},
 ],
    image: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTM5NjcxMDg4MjI5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE5Njc3IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTgwNi4xMjMgMTUzLjU3OWg2NS41MzZ2NzE4LjkxMkg2ODQuMjY3VjU1Mi45Nkw1MzEuNjcgNzEyLjcyNWgtMjAuNDU5TDM1OS42NTkgNTUyLjk2djMxOS41MzFIMTcyLjI0NlYxNTMuNTc5aDY3LjU4NGwyODAuNTk3IDMxMS4zMTcgMjg1LjY5Ni0zMTEuMzE3eiIgcC1pZD0iMTk2NzgiPjwvcGF0aD48L3N2Zz4="
}
//温馨提示：image 选取有严格要求不可过大；，否则firefox不兼容  iconfont上面的图标可以
let maskImage = new Image();
maskImage.src = data.image

maskImage.onload = function() {
    myChart.setOption({
        backgroundColor: '#fff',
        tooltip: {
            show: false
        },
        series: [{
            type: 'wordCloud',
            gridSize:1,

            sizeRange: [1,300],
            rotationRange: [0, 0],
            // maskImage: maskImage,
            textStyle: {
                normal: {
                    color: function(v) {
                        let color = ['#27D38A', '#FFCA1C', '#5DD1FA', '#F88E25', '#47A0FF', '#FD6565']
                        let num = Math.floor(Math.random() * (5 + 1));
                        console.log(num)
                        return color[num];
                    },
                },
            },
            left: 'center',
            top: 'center',
            width: '96%',
            height: '50%',
            // right: null,
            // bottom: null,
            // width: 300,
            // height: 200,
            // top: 20,
            data: data.value
        }]
    })
}
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}







    

}
