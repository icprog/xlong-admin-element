(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1064b7f0"],{"2c01":function(t,a,e){"use strict";var s=e("7f97"),i=e.n(s);i.a},7025:function(t,a,e){},"7f97":function(t,a,e){},"86f5":function(t,a,e){},"8cfa":function(t,a,e){"use strict";var s=e("7025"),i=e.n(s);i.a},"8f5c":function(t,a,e){"use strict";var s=e("fb21"),i=e.n(s);i.a},b5f4:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"statisticsScreen",staticClass:"statistics-screen scroll-style"},[e("div",{ref:"screenContainer",staticClass:"statistics-screen-container",style:{height:t.pageH,width:t.pageW}},[e("screen-header",{attrs:{title:"监控大屏(建议全屏观看)"}}),t._v(" "),e("div",{staticClass:"statistics-screen-content flex"},[e("div",{staticClass:"split-screen",attrs:{id:"statisticsScreen1"}},[e("split-screen-one",{attrs:{"loading-background":t.loadingBackground,"contrast-radio":t.contrastRadio}})],1),t._v(" "),e("div",{staticClass:"split-screen",attrs:{id:"statisticsScreen2"}},[e("split-screen-two",{attrs:{"loading-background":t.loadingBackground,"contrast-radio":t.contrastRadio}})],1),t._v(" "),e("div",{staticClass:"split-screen",attrs:{id:"statisticsScreen3"}},[e("split-screen-three",{attrs:{"loading-background":t.loadingBackground,"contrast-radio":t.contrastRadio}})],1)])],1)])},i=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"statistics-screen-1"},[e("div",{staticClass:"accpet-container flex"},[e("div",{staticClass:"map-container statistics-frame"},[e("span",{staticClass:"statistics-frame-title"},[t._v("事项消息分布")]),t._v(" "),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.map.loading,expression:"map.loading"}],staticClass:"statistics-frame-content",attrs:{"element-loading-background":"loadingBackground"}},[t.map.loading?e("empty",{attrs:{height:600*t.contrastRadio+"px"}}):[t.map.geoCoordMap?e("div",{staticClass:"chart-content"},[e("popup-msg-map",{attrs:{"geo-coord-map":t.map.geoCoordMap,"popup-msg":t.map.popupMsg,width:950*t.contrastRadio+"px",height:760*t.contrastRadio+"px"},on:{"msg-popup":t.reduceTempMsgs}})],1):e("empty",{attrs:{height:600*t.contrastRadio+"px"}})]],2)]),t._v(" "),e("div",{staticClass:"ranking-container statistics-frame"},[e("span",{staticClass:"statistics-frame-title"},[t._v("各地市用户使用情况")]),t._v(" "),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.ranking.loading,expression:"ranking.loading"}],staticClass:"statistics-frame-content",attrs:{"element-loading-background":"loadingBackground"}},[t.ranking.loading?e("empty",{attrs:{height:600*t.contrastRadio+"px"}}):[e("div",{staticClass:"chart-content"},[t.ranking.data.chartData.length?e("ranking-bar-chart",{attrs:{"class-name":"rankingChart","chart-data":t.ranking.data.chartData,axis:t.ranking.data.axis,series:t.ranking.data.series,sort:!0,height:620*t.contrastRadio+"px"}}):e("empty",{attrs:{height:620*t.contrastRadio+"px"}})],1)]],2)])]),t._v(" "),e("div",{staticClass:"msg-container statistics-frame"},[e("span",{staticClass:"statistics-frame-title"},[t._v("事项消息列表")]),t._v(" "),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.message.loading,expression:"message.loading"}],staticClass:"statistics-frame-content",attrs:{"element-loading-background":"loadingBackground"}},[t.message.loading?e("empty",{attrs:{height:290*t.contrastRadio+"px"}}):[t.message.list.length?e("ul",{staticClass:"msg-list-container"},t._l(t.message.list,(function(a,s){return e("li",{key:"msg"+s,ref:"msgItem",refInFor:!0,staticClass:"msg-list-item flex"},[e("div",{staticClass:"msg-list-item-left flex"},[e("span",{staticClass:"msg-list-item__badge"},[t._v(t._s(t.message.list.length-s))]),t._v(" "),e("span",{staticClass:"msg-list-item__name"},[e("i",[t._v("用户")]),t._v(" "),e("i",{staticClass:"account"},[t._v(t._s(a.operator))]),t._v(" "),e("i",[t._v("在")]),t._v(" "),e("i",{staticClass:"city"},[t._v(t._s(a.cityName))]),t._v(" "),e("i",[t._v(t._s(a.matter))]),t._v(" "),e("i",{staticClass:"system"},[t._v(t._s(a.appName))])])]),t._v(" "),e("span",{staticClass:"msg-list-item-right msg-list-item__time"},[t._v(t._s(a.actionTimeStr))])])})),0):e("empty",{attrs:{height:300*t.contrastRadio+"px"}})]],2)])])},r=[],o=(e("ac6a"),e("20d6"),e("75fc")),c=(e("7f7f"),e("c5f6"),e("9b56")),d=e("fd82"),l=e("2369"),m=e("e778"),u=e("ed08"),h=["XLONG家里蹲-OA办公系统","XLONG家里蹲-企业信息化系统","XLONG家里蹲-CMS系统","XLONG家里蹲-电商App","XLONG家里蹲-数据抓取软件","XLONG家里蹲-你画我猜软件"],g=["Lio.Huang","xLong1029","JunjiApp","XieNangMai","quanquan","PDD","Plus","Jhone"],v={name:"SplitScreenOne",components:{RankingBarChart:l["default"],PopupMsgMap:d["default"],Empty:c["default"]},props:{loadingBackground:{type:String,default:"loadingBackground"},contrastRadio:{type:Number,default:1}},data:function(){return{chartLoading:!1,map:{loading:!1,popupMsg:{},geoCoordMap:{}},ranking:{loading:!1,defaultChartData:[],data:{series:[{name:"受理数",property:"count"}],axis:{name:"地区",property:"name"},chartData:[]}},message:{loading:!1,list:[]},tempMsgs:[],msgTimer:null,countTag:0}},created:function(){this.init()},beforeDestroy:function(){this.clearTimer([this.rankingTimer,this.msgTimer])},methods:{init:function(){this.map.loading=!0,this.ranking.loading=!0,this.message.loading=!0,this.getMapData(),this.getRankingData(),this.getDefaultMsgData(),this.setTimer()},getMapData:function(){for(var t=this,a=0;a<m.length;a++)this.map.geoCoordMap[m[a].name]=m[a].coordinate;setTimeout((function(){return t.map.loading=!1}),500)},getRankingData:function(){var t=this;this.ranking.defaultChartData=m.map((function(t){return{name:t.name,count:Math.round(20*Math.random())}})),this.ranking.data.chartData=Object(o["a"])(this.ranking.defaultChartData),setTimeout((function(){return t.ranking.loading=!1}),500)},getDefaultMsgData:function(){for(var t=this,a=0;a<3;a++){var e=m[Math.round(Math.random()*(m.length-1))];this.message.list.push({operator:g[Math.round(Math.random()*(g.length-1))],cityCode:e.code,cityName:e.name,latitude:e.coordinate[1],longitude:e.coordinate[0],matter:"使用",appName:h[Math.round(Math.random()*(h.length-1))],actionTimeStr:"2020-01-08 08:00:00"})}setTimeout((function(){return t.message.loading=!1}),500)},receiveMessage:function(){var t=m[Math.round(Math.random()*(m.length-1))],a={operator:g[Math.round(Math.random()*(g.length-1))],cityCode:t.code,cityName:t.name,latitude:t.coordinate[1],longitude:t.coordinate[0],appName:h[Math.round(Math.random()*(h.length-1))],operationType:2,matter:"使用",actionTimeStr:Object(u["p"])(new Date,"YYYY-MM-DD HH:mm:ss","-",":")};this.countTag=1,this.tempMsgs.length<=10&&this.tempMsgs.push(a)},reduceTempMsgs:function(t){this.tempMsgs.length>0&&this.tempMsgs.shift()},setTimer:function(){var t=this;this.rankingTimer=setInterval((function(){if(t.countTag>10?(t.map.popupMsg={},t.countTag=1):t.countTag++,t.tempMsgs.length>0){t.countTag=1;var a=t.tempMsgs[0],e=$(".msg-list-item").eq(0);e.css({width:0}),e.animate({width:"100%"},1e3),t.message.list.unshift(a),t.map.popupMsg=a;var s=t.ranking.defaultChartData.findIndex((function(t){return t.name===a.cityName}));t.ranking.defaultChartData[s].count++,t.ranking.data.chartData=Object(o["a"])(t.ranking.defaultChartData)}}),3e3),this.msgTimer=setInterval((function(){t.receiveMessage()}),1e3)},clearTimer:function(t){t.forEach((function(t){return clearInterval(t)}))}}},p=v,f=(e("2c01"),e("2877")),y=Object(f["a"])(p,n,r,!1,null,"0b3ea877",null),C=y.exports,_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"statistics-screen-2",attrs:{id:"bgStars"}},[e("div",{staticClass:"building-container"},[e("div",{staticClass:"count-container"},[e("div",{staticClass:"systems"},[e("div",{staticClass:"count-card-wrapper left"},[e("div",{staticClass:"count-card-container"},[e("div",{staticClass:"count-card-content",style:{color:"#ff3333"}},[t._v(t._s(t.systemsCount.count))]),t._v(" "),e("div",{staticClass:"count-card-title"},[t._v(t._s(t.systemsCount.name))])])])]),t._v(" "),e("div",{staticClass:"company"},[e("div",{staticClass:"count-card-wrapper left"},[e("div",{staticClass:"count-card-container"},[e("div",{staticClass:"count-card-content",style:{color:"#2cf768"}},[t._v(t._s(t.companyCount.count))]),t._v(" "),e("div",{staticClass:"count-card-title"},[t._v(t._s(t.companyCount.name))])])])]),t._v(" "),e("div",{staticClass:"server"},[e("div",{staticClass:"count-card-wrapper right"},[e("div",{staticClass:"count-card-container"},[e("div",{staticClass:"count-card-content",style:{color:"#fed539"}},[t._v(t._s(t.serverCount.count))]),t._v(" "),e("div",{staticClass:"count-card-title"},[t._v(t._s(t.serverCount.name))])])])]),t._v(" "),e("div",{staticClass:"user"},[e("div",{staticClass:"count-card-wrapper right"},[e("div",{staticClass:"count-card-container"},[e("div",{staticClass:"count-card-content",style:{color:"#00fee9"}},[t._v(t._s(t.userCount.count))]),t._v(" "),e("div",{staticClass:"count-card-title"},[t._v(t._s(t.userCount.name))])])])])])]),t._v(" "),e("div",{staticClass:"company-container statistics-frame"},[e("span",{staticClass:"statistics-frame-title"},[t._v("服务企业数量")]),t._v(" "),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.companyNum.loading,expression:"companyNum.loading"}],staticClass:"statistics-frame-content",attrs:{"element-loading-background":"loadingBackground"}},[t.companyNum.loading?e("empty",{attrs:{height:250*t.contrastRadio+"px"}}):[e("div",{staticClass:"chart-content"},[t.companyNum.chartData.length?e("thermometer-bar-chart",{attrs:{"class-name":"monthChart","chart-data":t.companyNum.chartData,axis:t.companyNum.axis,series:t.companyNum.series,sort:!0,height:270*t.contrastRadio+"px"}}):e("empty",{attrs:{height:250*t.contrastRadio+"px"}})],1)]],2)]),t._v(" "),e("div",{attrs:{id:"stars"}}),t._v(" "),e("div",{attrs:{id:"stars2"}}),t._v(" "),e("div",{attrs:{id:"stars3"}})])},D=[],T=e("c35c"),b={name:"SplitScreenTwo",components:{ThermometerBarChart:T["default"]},props:{loadingBackground:{type:String,default:"loadingBackground"},contrastRadio:{type:Number,default:1}},data:function(){return{systemsCount:{name:"开发应用总数",count:55},companyCount:{name:"服务企业数量",count:0},serverCount:{name:"监控服务器数量",count:0},userCount:{name:"服务用户数量",count:0},companyNum:{loading:!1,series:[{name:"企业数量",property:"count"}],axis:{property:"name"},chartData:[]},requestTimer:null}},created:function(){this.init()},beforeDestroy:function(){this.clearTimer([this.requestTimer])},methods:{init:function(){this.companyNum.loading=!0,this.getStatisticsData(),this.setTimer()},getStatisticsData:function(){var t=this;this.systemsCount.count=55,this.companyCount.count=3004,this.serverCount.count=9,this.userCount.count=60293,this.companyNum.chartData=m.map((function(t){return{name:t.name,count:Math.round(10*Math.random())}})),setTimeout((function(){t.companyNum.loading=!1}),500)},setTimer:function(){var t=this;this.requestTimer=setInterval((function(){t.getStatisticsData()}),1e4)},clearTimer:function(t){t.forEach((function(t){return clearInterval(t)}))}}},S=b,R=(e("e1e1"),Object(f["a"])(S,_,D,!1,null,"55e0ed12",null)),k=R.exports,x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"statistics-screen-3 system-situation-layout flex"},[e("div",{staticClass:"system-situation-layout-left"},[e("div",{staticClass:"system-situation-layout-left__top flex"},[e("div",{staticClass:"pie-chart-container"},[e("div",{staticClass:"databse-container statistics-frame"},[e("span",{staticClass:"statistics-frame-title"},[t._v(t._s(t.databaseType.title))]),t._v(" "),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.databaseType.loading,expression:"databaseType.loading"}],staticClass:"statistics-frame-content",attrs:{"element-loading-background":"loadingBackground"}},[!t.databaseType.loading&&t.databaseType.chartData.length?[e("div",{staticClass:"chart-content"},[e("pole-chart",{attrs:{"class-name":"databaseType",title:t.databaseType.title,"chart-data":t.databaseType.chartData,carousel:!0,width:480*t.contrastRadio+"px",height:220*t.contrastRadio+"px"}})],1),t._v(" "),e("statistics-progress",{staticClass:"mt-10",attrs:{title:"国产率",rate:t.databaseType.isSafePersent}})]:e("empty",{attrs:{height:280*t.contrastRadio+"px"}})],2)])]),t._v(" "),e("div",{staticClass:"pie-chart-container"},[e("div",{staticClass:"statistics-frame"},[e("span",{staticClass:"statistics-frame-title"},[t._v(t._s(t.runtime.title))]),t._v(" "),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.runtime.loading,expression:"runtime.loading"}],staticClass:"statistics-frame-content",attrs:{"element-loading-background":"loadingBackground"}},[!t.runtime.loading&&t.runtime.chartData.length?[e("div",{staticClass:"chart-content"},[e("pole-chart",{attrs:{"class-name":"runtime","chart-data":t.runtime.chartData,carousel:!0,width:480*t.contrastRadio+"px",height:220*t.contrastRadio+"px",scale:t.contrastRadio}})],1),t._v(" "),e("statistics-progress",{staticClass:"mt-10",attrs:{title:"国产率",rate:t.runtime.isSafePersent}})]:e("empty",{attrs:{height:280*t.contrastRadio+"px"}})],2)])]),t._v(" "),e("div",{staticClass:"pie-chart-container"},[e("div",{staticClass:"statistics-frame"},[e("span",{staticClass:"statistics-frame-title"},[t._v(t._s(t.businessType.title))]),t._v(" "),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.businessType.loading,expression:"businessType.loading"}],staticClass:"statistics-frame-content",attrs:{"element-loading-background":"loadingBackground"}},[!t.businessType.loading&&t.businessType.chartData.length?[e("div",{staticClass:"chart-content"},[e("pie-chart",{attrs:{"class-name":"businessType","chart-data":t.businessType.chartData,carousel:!0,width:480*t.contrastRadio+"px",height:260*t.contrastRadio+"px",scale:t.contrastRadio}})],1)]:e("empty",{attrs:{height:280*t.contrastRadio+"px"}})],2)])]),t._v(" "),e("div",{staticClass:"pie-chart-container"},[e("div",{staticClass:"statistics-frame"},[e("span",{staticClass:"statistics-frame-title"},[t._v(t._s(t.serviceType.title))]),t._v(" "),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.serviceType.loading,expression:"serviceType.loading"}],staticClass:"statistics-frame-content",attrs:{"element-loading-background":"loadingBackground"}},[!t.serviceType.loading&&t.serviceType.chartData.length?[e("div",{staticClass:"chart-content"},[e("pie-chart",{attrs:{"class-name":"serviceType","chart-data":t.serviceType.chartData,carousel:!0,width:480*t.contrastRadio+"px",height:260*t.contrastRadio+"px",scale:t.contrastRadio}})],1)]:e("empty",{attrs:{height:280*t.contrastRadio+"px"}})],2)])])]),t._v(" "),e("div",{staticClass:"system-situation-layout-left__bottom"},[e("div",{staticClass:"server-use-container statistics-frame"},[e("span",{staticClass:"statistics-frame-title"},[t._v("服务器使用情况")]),t._v(" "),e("div",{staticClass:"statistics-tab"},t._l(t.serverUse.tabs,(function(a,s){return e("span",{key:"statistics-tab"+s,staticClass:"statistics-tab-item",class:{"is-active":t.serverUse.activeTab===a}},[t._v(t._s(a))])})),0),t._v(" "),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.serverUse.loading,expression:"serverUse.loading"}],staticClass:"statistics-frame-content",attrs:{"element-loading-background":"loadingBackground"}},[t.serverUse.loading?e("empty",{attrs:{height:"100%"}}):["CPU"===t.serverUse.activeTab?e("server-use-list",{attrs:{list:t.serverUse.data.cpuOrder,"active-tab":t.serverUse.activeTab}}):t._e(),t._v(" "),"RAM"===t.serverUse.activeTab?e("server-use-list",{attrs:{list:t.serverUse.data.ramOrder,"active-tab":t.serverUse.activeTab}}):t._e(),t._v(" "),"DISK"===t.serverUse.activeTab?e("server-use-list",{attrs:{list:t.serverUse.data.diskOrder,"active-tab":t.serverUse.activeTab}}):t._e()]],2)])])]),t._v(" "),e("div",{staticClass:"system-situation-layout-right"},[e("div",{staticClass:"system-use-container statistics-frame"},[e("span",{staticClass:"statistics-frame-title"},[t._v("应用使用情况")]),t._v(" "),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.SystemDev.month.loading||t.SystemDev.quarter.loading,expression:"SystemDev.month.loading || SystemDev.quarter.loading"}],staticClass:"statistics-frame-content",attrs:{"element-loading-background":"loadingBackground"}},[e("div",{staticClass:"system-use-quarter"},[e("div",{staticClass:"system-use-quarter__title flex"},[e("span",{staticClass:"name"},[t._v("季度统计")]),t._v(" "),e("span",[e("i",{staticClass:"yellow"},[t._v(t._s(t.SystemDev.quarter.pager.total))]),t._v("个应用\n            ")])]),t._v(" "),e("div",{staticClass:"system-use-quarter__content"},[t.SystemDev.quarter.loading?e("empty",{attrs:{height:"100%"}}):[t.SystemDev.quarter.data.chartData.length?e("gradual-bar-chart",{attrs:{"class-name":"quarterChart","chart-data":t.SystemDev.quarter.data.chartData,axis:t.SystemDev.quarter.data.axis,series:t.SystemDev.quarter.data.series,sort:!0,height:78*t.contrastRadio*t.SystemDev.quarter.data.chartData.length+"px"}}):e("empty",{attrs:{height:"100%"}})]],2)]),t._v(" "),e("div",{staticClass:"system-use-month"},[e("div",{staticClass:"system-use-month__title flex"},[e("span",{staticClass:"name"},[t._v("月度统计")]),t._v(" "),e("span",[e("i",{staticClass:"yellow"},[t._v(t._s(t.SystemDev.month.pager.total))]),t._v("个应用\n            ")])]),t._v(" "),e("div",{staticClass:"system-use-month__content"},[t.SystemDev.month.loading?e("empty",{attrs:{height:"100%"}}):[t.SystemDev.month.data.chartData.length?e("gradual-bar-chart",{attrs:{"class-name":"monthChart","chart-data":t.SystemDev.month.data.chartData,axis:t.SystemDev.month.data.axis,series:t.SystemDev.month.data.series,sort:!0,height:78*t.contrastRadio*t.SystemDev.month.data.chartData.length+"px"}}):e("empty",{attrs:{height:"100%"}})]],2)])])])])])},N=[],M=e("b85c"),w=e("fcf4"),U=e("df75"),O=e("5aa5"),q=["XLONG家里蹲-OA办公系统","XLONG家里蹲-企业信息化系统","XLONG家里蹲-CMS系统","XLONG家里蹲-电商App","XLONG家里蹲-数据抓取软件","XLONG家里蹲-你画我猜软件"],B={name:"SplitScreenThree",components:{StatisticsProgress:M["default"],PieChart:w["default"],PoleChart:U["default"],GradualBarChart:O["default"],Empty:c["default"]},props:{loadingBackground:{type:String,default:"loadingBackground"},contrastRadio:{type:Number,default:1}},data:function(){return{runtime:{loading:!1,title:"运行环境",isSafePersent:0,chartData:[]},databaseType:{loading:!1,title:"数据库类型",isSafePersent:0,chartData:[]},businessType:{loading:!1,title:"业务类型",chartData:[]},serviceType:{loading:!1,title:"服务类型",chartData:[]},serverUse:{loading:!1,activeTab:"CPU",tabs:["CPU","RAM","DISK"],data:{cpuOrder:[],ramOrder:[],diskOrder:[]}},SystemDev:{month:{loading:!1,data:{series:[{name:"使用次数",property:"useCount"}],axis:{name:"系统名称",property:"appName"},chartData:[]},pager:{pageNo:1,pageSize:10,total:0}},quarter:{loading:!1,data:{series:[{name:"使用次数",property:"useCount"}],axis:{name:"系统名称",property:"appName"},chartData:[]},pager:{pageNo:1,pageSize:6,total:0}}},requestTimer:null,tabTimer:null,SystemDevTimer:null}},created:function(){this.init()},beforeDestroy:function(){this.clearTimer([this.requestTimer,this.tabTimer,this.SystemDevTimer])},methods:{init:function(){this.runtime.loading=!0,this.databaseType.loading=!0,this.businessType.loading=!0,this.serviceType.loading=!0,this.serverUse.loading=!0,this.SystemDev.month.loading=!0,this.SystemDev.quarter.loading=!0,this.getStatisticsData(),this.getSystemDevData(),this.setTimer()},getStatisticsData:function(){var t=this;this.runtime.chartData=[{value:30,name:"Windows"},{value:5,name:"Linux"},{value:5,name:"iOS"},{value:15,name:"Android"}],this.databaseType.chartData=[{value:5,name:"达梦数据库"},{value:15,name:"Oracal"},{value:30,name:"SqlServer"}],this.databaseType.isSafePersent=9,this.businessType.chartData=[{value:10,name:"智慧城市项目"},{value:10,name:"小程序应用"},{value:20,name:"企业网站"},{value:5,name:"电商项目"},{value:5,name:"App应用"},{value:5,name:"H5场景应用"}],this.serviceType.chartData=[{value:60293,name:"个人服务"},{value:3004,name:"企业服务"},{value:20241,name:"其他业务服务"}],this.serverUse.data={cpuOrder:[{hostIP:"10.1.2.123",hostName:"测试应用1",cpuUsedRatio:.0044,ramUsedRatio:.7464,diskUsedRatio:.2596},{hostIP:"10.1.2.225",hostName:"测试应用2",cpuUsedRatio:7e-4,ramUsedRatio:.9449,diskUsedRatio:.7136},{hostIP:"10.1.2.215",hostName:"测试应用3",cpuUsedRatio:4e-4,ramUsedRatio:.2797,diskUsedRatio:.7122}],ramOrder:[{hostIP:"10.1.2.218",hostName:"测试应用4",cpuUsedRatio:1e-4,ramUsedRatio:.9727,diskUsedRatio:.4262},{hostIP:"10.1.2.212",hostName:"测试应用5",cpuUsedRatio:7e-4,ramUsedRatio:.9449,diskUsedRatio:.7136},{hostIP:"10.1.2.134",hostName:"测试应用6",cpuUsedRatio:0,ramUsedRatio:.9108,diskUsedRatio:.4133}],diskOrder:[{hostIP:"10.1.2.165",hostName:"测试应用7",cpuUsedRatio:0,ramUsedRatio:.5846,diskUsedRatio:.8579},{hostIP:"10.1.2.208",hostName:"测试应用8",cpuUsedRatio:3e-4,ramUsedRatio:.699,diskUsedRatio:.854},{hostIP:"10.1.2.156",hostName:"测试应用9",cpuUsedRatio:1e-4,ramUsedRatio:.8313,diskUsedRatio:.7305}]},setTimeout((function(){t.runtime.loading=!1,t.databaseType.loading=!1,t.businessType.loading=!1,t.serviceType.loading=!1,t.serverUse.loading=!1}),500)},getSystemDevData:function(){var t=this;this.SystemDev.month.data.chartData=[],this.SystemDev.quarter.data.chartData=[];for(var a=0;a<6;a++)this.SystemDev.month.data.chartData.push({appName:q[a],useCount:Math.round(50*Math.random())}),this.SystemDev.month.pager.total=this.SystemDev.month.pager.pageSize,this.SystemDev.quarter.data.chartData.push({appName:q[a],useCount:Math.round(50*Math.random())}),this.SystemDev.quarter.pager.total=this.SystemDev.quarter.pager.pageSize;setTimeout((function(){t.SystemDev.month.loading=!1,t.SystemDev.quarter.loading=!1}),500)},setTimer:function(){var t=this;this.requestTimer=setInterval((function(){t.getStatisticsData()}),6e4);var a=0;this.tabTimer=setInterval((function(){a++,a>=t.serverUse.tabs.length&&(a=0),t.serverUse.activeTab=t.serverUse.tabs[a]}),5e3),this.SystemDevTimer=setInterval((function(){t.getSystemDevData()}),5e3)},clearTimer:function(t){t.forEach((function(t){return clearInterval(t)}))}}},H=B,I=(e("8cfa"),Object(f["a"])(H,x,N,!1,null,"66c0195e",null)),P=I.exports,L=e("7407"),z={data:function(){return{pageH:0,pageW:0,design:{width:1909,height:1076},widthHeightRatio:1,minWidth:1400,minHidth:820,contrastRadio:1}},mounted:function(){this.$_initResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_resizeHandler:function(){this.widthHeightRatio=this.design.width/this.design.height;var t=document.body.clientWidth,a=document.body.clientHeight;this.pageH=a,t=t>this.design.width?this.design.width:t,a=a>this.design.height?this.design.height:a,t/a>this.widthHeightRatio?this.contrastRadio=a<this.minHidth?.76:a/this.design.height:this.contrastRadio=t<this.minWidth?.76:t/this.design.width,document.getElementsByTagName("html")[0].style.fontSize=100*this.contrastRadio+"px"}}},E={name:"StatisticsScreen",components:{SplitScreenOne:C,SplitScreenTwo:k,SplitScreenThree:P,ScreenHeader:L["default"]},mixins:[z],data:function(){return{loadingBackground:"rgba(0, 0, 0, 0.3)",design:{width:3500,height:1080}}},mounted:function(){this.$_resizeHandler(),this.$_initResizeEvent()},methods:{$_resizeHandler:function(){var t=this;this.widthHeightRatio=this.design.width/this.design.height;document.body.clientWidth;var a=document.body.clientHeight;this.contrastRadio=a/this.design.height,this.pageH="100%",this.pageW=a*this.widthHeightRatio+"px",document.getElementsByTagName("html")[0].style.fontSize=100*this.contrastRadio+"px",setTimeout((function(){t.$refs.statisticsScreen.scrollLeft=(t.$refs.screenContainer.offsetWidth-t.$refs.statisticsScreen.offsetWidth)/2}),100)}}},G=E,X=(e("8f5c"),Object(f["a"])(G,s,i,!1,null,null,null));a["default"]=X.exports},e1e1:function(t,a,e){"use strict";var s=e("86f5"),i=e.n(s);i.a},e778:function(t){t.exports=[{code:"451400",name:"崇左市",coordinate:[107.277482,22.501959]},{code:"451100",name:"贺州市",coordinate:[111.366656,24.357028]},{code:"450900",name:"玉林市",coordinate:[110.186377,22.440029]},{code:"451300",name:"来宾市",coordinate:[109.417387,23.852127]},{code:"450800",name:"贵港市",coordinate:[110.003191,23.306537]},{code:"450100",name:"南宁市",coordinate:[108.467414,23.055856]},{code:"451200",name:"河池市",coordinate:[107.845944,24.642313]},{code:"450600",name:"防城港市",coordinate:[108.014761,21.869759]},{code:"450400",name:"梧州市",coordinate:[110.994766,23.480033]},{code:"450200",name:"柳州市",coordinate:[109.375468,24.948002]},{code:"451000",name:"百色市",coordinate:[106.289292,23.985913]},{code:"450300",name:"桂林市",coordinate:[110.519005,25.354947]},{code:"450500",name:"北海市",coordinate:[109.341064,21.666854]},{code:"450700",name:"钦州市",coordinate:[109.019375,22.171606]}]},fb21:function(t,a,e){}}]);