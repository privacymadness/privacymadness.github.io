//2-0

let option_2_0 = {
    color: ['#18FFF8'],
    toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: "none"
          },
            dataView: {
                show: false,
            readOnly: false
          },
          magicType: {
            type: ["line", "bar"]
          },
          restore: {},
          saveAsImage: {}
        }
      },

    backgroundColor:['#323233'],
    xAxis: {
      type: 'category',
      data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
      axisLine:{show : true,},
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true
      },axisPointer: {
        show: true
      },
      name: "（单位：百万美元）",
        nameTextStyle: {
            fontWeight: "bolder",
            fontFamily: "思源宋体",
            fontSize: 12,
            align: "right",
            verticalAlign: "top",
            lineHeight: 80
          },
        
    },
    yAxis: {min:2.50,
      data: ['2.50', '2.70', '2.90', '3.10', '3.30', '3.50', '3.70','3.90','4.10','4.30','4.50'],
        // name: "&nbsp；              数据泄露的平均总成本",
        nameTextStyle: {
            fontWeight: "bolder",
            fontFamily: "思源宋体",
            fontSize: 25
          },
      type: 'value',
      axisLine:{show : true,},
      axisLabel: {formatter: function (value, index) {
    return '$' + value;
},
        show: true
      },axisPointer: {
        show: true
      },
    },
    series: [
      {
        data: ['4.00', '3.62', '3.86', '3.92', '3.86', '4.24', '4.35'],
        type: 'line',
        lineStyle: {
        width: 2
      },
      
      }
    ]
};
let ele_2_0=document.getElementById('c-2-0')
let chart_2_0 = document.createElement('div')
chart_2_0.className="charts-box wide"
chart_2_0.innerHTML = '<div class="chart-context high"></div>'
ele_2_0.appendChild(chart_2_0)
echarts.init(chart_2_0.querySelector(".chart-context")).setOption(option_2_0)
//2-1
let data_2_1 = [
    {
        name: '公众网民对个人信息保护的整体评价',
        data: [
            { value: 10.02, name: '非常好'  ,itemStyle:{color:'#18fff8'}},
            { value: 27.5, name: '比较好' ,itemStyle:{color:'#FFD300'}},
            { value: 35.86, name: '一般' ,itemStyle:{color:'#949494'} },
            { value: 17.64, name: '不太好' ,itemStyle:{color:'#f1f1f1'}},
            { value: 8.98, name: '非常不好' }
        ]
    },
    {
        name: '公众网民对个人信息泄露的感受现状',
        data: [
            { value: 13.93, name: '非常多'  ,itemStyle:{color:'#18fff8'}},
            { value: 27.32, name: '比较多'  ,itemStyle:{color:'#FFD300'}},
            { value: 35.66, name: '有一些' ,itemStyle:{color:'#949494'} },
            { value: 13.82, name: '很少' ,itemStyle:{color:'#f1f1f1'}},
            { value: 9.26, name: '没有遇到'  }
        ]
    },
    {
        name: '网民对生物识别信息的利用情况感受',
        data: [
            { value: 21.34, name: '非常担心' ,itemStyle:{color:'#18fff8'} },
            { value: 36.62, name: '比较担心'  ,itemStyle:{color:'#FFD300'}},
            { value: 25.1, name: '一般' ,itemStyle:{color:'#949494'}},
            { value: 11.99, name: '很少担心' ,itemStyle:{color:'#f1f1f1'}},
            { value: 4.95, name: '没有担心' ,itemStyle:{color:'#18fff8'}}
        ]
    },
    {
        name: '网民认为精准广告推送是否征得同意',
        data: [
            { value: 3.26, name: '全部都征得同意' ,itemStyle:{color:'#18fff8'}},
            { value: 6.96, name: '大部分征得同意' ,itemStyle:{color:'#FFD300'}},
            { value: 6.94, name: '大约一般征得同意',itemStyle:{color:'#949494'} },
            { value: 22.22, name: '小部分征得同意' ,itemStyle:{color:'#f1f1f1'}},
            { value: 40.84, name: '全部没有征得同意' },
            { value: 19.79, name: '不清楚' }
        ]
    }
]

function gen_pie(option) {
    let pieChartOption = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}:{d}%'
        },
        legend: {
            show: false,
            top: '5%',
            left: 'center'
        },
        
        colorBy:'data',
        series: [
            {
                
                name: `${option.name}`,
                type: 'pie',
                radius: ['40%','70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center',
                    normal: {show:false,
                        formatter: '{b}:{d}%'
                    }
                },
                labelLine: {
                    show: true
                },
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        borderColor: '#fff'
                    }
                },
                data: option.data
            }
        ]
    }

    return pieChartOption
}

let ele_2_1 = document.getElementById("c-2-1")
for (let index = 0; index < data_2_1.length; index++) {
    let pie_dom = document.createElement('div')
    pie_dom.className = "charts-box1"
    pie_dom.innerHTML = `<p class="charts-title">${data_2_1[index].name}</p><div class="chart-context">`
    ele_2_1.appendChild(pie_dom)
    echarts.init(pie_dom.querySelector(".chart-context")).setOption(gen_pie({
        name: data_2_1[index].name,
        data: data_2_1[index].data,
    }))
}



//2-3

//2-4
let data = [
    {
        name: '职务之便',itemStyle:{color:'#1fb7b7'},
        children: [
            {
                name: '公司',itemStyle:{color:'#1fb7b7'},
                value: 1,
                children: [
                    {
                        name: '中介',
                        value: 0.333,itemStyle:{color:'#1fb7b7'}
                    },
                    {
                        name: '电信公司',
                        value: 0.333,itemStyle:{color:'#1fb7b7'}
                    },
                    {
                        name: '客服',
                        value: 0.333,itemStyle:{color:'#1fb7b7'}
                    }
                ]
            },
            {
                name: '公安机关',itemStyle:{color:'#7deded'},
                value: 1,
                children: [
                    {
                        name: '辅警',
                        value: 0.4,itemStyle:{color:'#7deded'}
                    },
                    {
                        name: '交警',
                        value: 0.4,itemStyle:{color:'#7deded'}
                    },
                    {
                        name: '其他服务',
                        value: 0.2,itemStyle:{color:'#7deded'}
                    }
                ]
            },
            {
                name: '事业单位',itemStyle:{color:'#b8fafa'},
                value: 0.25,
                children: [
                    {
                        name: '协警',
                        value: 0.25,itemStyle:{color:'#b8fafa'}
                    }
                ]
            },
            {
                name: '银行保险',itemStyle:{color:'#d4fcfc'},
                value: 0.2,
                children: [
                    {
                        name: '保险',
                        value: 0.12,itemStyle:{color:'#d4fcfc'}
                    },
                    {
                        name: '银行',
                        value: 0.08,itemStyle:{color:'#d4fcfc'}
                    }
                ]
            }
        ]
    },
    {
        name: '为推广业务',itemStyle:{color:'#1f6f6f'},
        children: [
            {
                name: '公司',itemStyle:{color:'#1f6f6f'},
                value: 1,
                children: [
                    {
                        name: '电商',
                        value: 0.6,itemStyle:{color:'#1f6f6f'}
                    },
                    {
                        name: '房地产',
                        value: 0.25,itemStyle:{color:'#1f6f6f'}
                    },
                    {
                        name: '信息\n咨询\n公司',
                        value: 0.15,itemStyle:{color:'#1f6f6f'}
                    }
                ]
            }
        ]
    }
];
let ele_2_4 = document.getElementById("c-2-4")
let sun_dom = document.createElement('div')
sun_dom.className = "charts-box"
sun_dom.innerHTML = '<div class="chart-context"></div>'
ele_2_4.appendChild(sun_dom)
echarts.init(sun_dom.querySelector(".chart-context")).setOption({
    series: {
        title:
        {   show:true,
            text: '*数据泄露来源',
    
        },
        type: 'sunburst',
        data: data,

        radius: [60, '90%'],
        itemStyle: {
            borderRadius: 0,
            borderWidth: 2
        },
        label: {
            show: true,
            rotate: 'tangential',
            fontSize: 11,
            fontWeight: 'bold'
        },
        
    }
})

//3-1
let datasource_3_1 = [
    ['生活服务', '学习教育', '金融', '实用工具', '休闲娱乐'],
    ['小米应用商店', '华为应用商店', '微信小程序', '360手机助手', '豌豆荚', '应用宝', '百度手机助手', 'OPPO应用商店', 'APPStore', 'vivo应用商店', '官网'],
    ['过渡索取权限', '违规收集个人信息', '频繁自启动和关联启动', '超范围收集个人信息', '违规弹窗信息推送', '欺骗误导'],
    [
        [10, 8, 5, 5, 5, 5, 2, 4, 3, 3, 0],//50
        [7, 2, 0, 4, 0, 0, 1, 0, 1, 0, 0],//15
        [2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0],//6
        [4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],//24
        [2, 4, 2, 4, 4, 6, 4, 4, 4, 4, 2]//40
    ],
    [
        [20, 10, 4, 8, 8, 0],
        [4, 6, 0, 2, 3, 0],
        [6, 0, 0, 0, 0, 0],
        [15, 0, 0, 4, 0, 5],
        [20, 10, 0, 2, 2, 6]
    ]
]
let data_3_1 = []
for (let i = 0; i < datasource_3_1[1].length; i++) {
    data_3_1.push({ name: datasource_3_1[1][i] })
}
for (let i = 0; i < datasource_3_1[0].length; i++) {
    data_3_1.push({ name: datasource_3_1[0][i] })
}
for (let i = 0; i < datasource_3_1[2].length; i++) {
    data_3_1.push({ name: datasource_3_1[2][i] })
}

let link = []
for (let i = 0; i < datasource_3_1[0].length; i++) {
    for (let j = 0; j < datasource_3_1[1].length; j++) {
        link.push({ source: datasource_3_1[1][j], target: datasource_3_1[0][i], value: datasource_3_1[3][i][j] })
    }
    for (let j = 0; j < datasource_3_1[2].length; j++) {
        link.push({ source: datasource_3_1[0][i], target: datasource_3_1[2][j], value: datasource_3_1[4][i][j] })
    }
}

let ele_3_1 = document.getElementById("c-3-1")
let san_dom = document.createElement('div')
san_dom.className = "charts-box wide"
san_dom.innerHTML = '<div class="chart-context high"></div>'
ele_3_1.appendChild(san_dom)
let option_3_1 = {
    
    series: {
        
        itemStyle:{
            color:'rgba(107, 239, 232, 0.855)'
        },
        lineStyle:{
            color:'rgba(107, 239, 232, 0.450)'
        },
        type: 'sankey',
        layout: 'none',
        emphasis: {
            focus: 'adjacency'
        },
        data: data_3_1,
        links: link,
        
    }
}
echarts.init(san_dom.querySelector(".chart-context")).setOption(option_3_1)

//3-2
let option_3_2 = {
    grid:{
        left:200
    },
    xAxis: {
      type: 'value',
      axisLabel:{
        formatter:"{value}%"
      }
    },
    yAxis: {name: "         2022年网民认为最可能泄露个人信息的途径",nameLocation: "start",
    nameTextStyle: {
        color:'#f2f2f2',
        fontWeight: "bold",
        fontFamily: "思源宋体",
        fontSize: 20
      },
      type: 'category',
      data:[
        '注册APP账户，App要求获取相机、位置等隐私权限',
        '参与网上测试、投票、抽奖活动',
        '点击网上不明二维码、链接',
        '使用公共WiFi',
        '浏览器截取敏感信息',
        '将个人信息上传网络云端储存',
        '包含个人信息的单据、票据随意丢弃',
        '转卖的旧手机未将数据删除干净',
        '社交平台乱晒有个人信息的图片',
        '输入法截取信息',
        '使用公共移动电源',
        '其他'
      ],
      inverse:true
    },
    series: [
      {
        data: [76.65,51.84,40.7,39.18,35.48,28.6,27.48,26.76,25.53,22.58,14.76,6.14],
        type: 'bar',
        itemStyle:{
          color:'rgb(107, 239, 232)',
          borderRadius:2,
        }
      }
    ]
  };

let ele_3_2=document.getElementById('c-3-2')
let chart_3_2=document.createElement('div')
chart_3_2.className="charts-box wide1"
chart_3_2.innerHTML='<div class="chart-context high1"></div>'
ele_3_2.appendChild(chart_3_2)
echarts.init(chart_3_2.querySelector(".chart-context")).setOption(option_3_2)

//3-3
let option_3_3 = {width:'300px',
    grid: {
        bottom:100,
        left:200
    },
    xAxis: {
      type: 'value',
      axisLabel:{
        formatter:"{value}%"
      },
      inverse:true
    },
    yAxis: {name: "2022年网民认为APP存在的违规情况                       ",nameLocation: "start",
    nameTextStyle: {
        color:'#f2f2f2',
        align: "right",
        fontWeight: "bold",
        fontFamily: "思源宋体",
        fontSize: 20
      },
      type: 'category',
      data:[
        '超出收集与功能无关个人信息',
        '频繁索要无关权限',
        '强制索取无关权限，不授权就闪退',
        '默认捆绑功能并一揽子同意',
        '存在不合理免责条款',
        '无法注销账户',
        '其他'
      ],
      inverse:true
    },
    series: [
      {
        data: [60.12,57.78,50.25,50.25,42.54,30.3,7.04],
        type: 'bar',
        itemStyle:{
          color:'rgb(107, 239, 232)',
          borderRadius:2,
        }
      }
    ]
  };

let ele_3_3=document.getElementById('c-3-3')
let chart_3_3=document.createElement('div')
chart_3_3.className="charts-box wide2"
chart_3_3.innerHTML='<div class="chart-context high2"></div>'
ele_3_3.appendChild(chart_3_3)
echarts.init(chart_3_3.querySelector(".chart-context")).setOption(option_3_3)

//3-4
let option_3_4 = {
    polar:{
        radius:[30,'80%'],
    },
    angleAxis:{
      max:100,
      startAngle:75 ,
      axisLabel:{
        formatter:'{value}%'
      },
    },
    radiusAxis:
    {name: "                          ",nameLocation:"start",nameTextStyle: {
        fontWeight: "bold",
        fontFamily: "思源宋体",
        fontSize: 20,
        align:"center",verticalAlign: "bottom",lineHeight:75,
      },
        type:'category',
        data:[
            '国家加强立法保护个人信息安全',
            '企业减少非必要的个人信是的收集和使用',
            '建立APP个人信息保护合规认证和监控制度,要求持证上线,违者停牌',
            '监管部门塔加更多的渠道通报违法收集者信息',
            '监管部门增加更多举报平台可以让老百姓申诉',
            '社会组织如行业协会加强对个人信息保护的培训和宣传',
          ],
          inverse:true
    },
    tooltip:{
        trigger:'item',
        formatter:'{b}:{c}%'
    },
    series: [
      {
        data: [82.58,64.77,58.24,54.41,51.55,50.68],
        type: 'bar',
        coordinateSystem:'polar',
        lable:{
            show:true,
            position:'middle',
            formatter:'{b}:{c}%'
        },
        itemStyle:{
            color:'#88fff8'
        }
      }
    ]
  };

let ele_3_4=document.getElementById('c-3-4')
let chart_3_4=document.createElement('div')
chart_3_4.className="charts-box wide"
chart_3_4.innerHTML='<div class="chart-context high"></div>'
ele_3_4.appendChild(chart_3_4)
echarts.init(chart_3_4.querySelector(".chart-context")).setOption(option_3_4)