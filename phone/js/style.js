//定义数据
var data = [
    {name : '0',value : 100,color:'#a5c2d5'},
    {name : '4',value : 200,color:'#cbab4f'},
    {name : '8',value : 300,color:'#76a871'},
    {name : '12',value : 400,color:'#76a871'},
    {name : '16',value : 500,color:'#a56f8f'},
    {name : '20',value : 600,color:'#c12c44'},
    {name : '24',value : 700,color:'#a56f8f'},
 ];
 $(function(){
  var chart = new iChart.Column2D({
    render : 'canvasDiv',//渲染的Dom目标,canvasDiv为Dom的ID
    data: data,//绑定数据
    title : '吨位表',//设置标题
    width : 330,//设置宽度，默认单位为px
    height : 280,//设置高度，默认单位为px
    shadow:true,//激活阴影
    shadow_color:'#c7c7c7',//设置阴影颜色
    coordinate:{//配置自定义坐标轴
      scale:[{//配置自定义值轴
         position:'left',//配置左值轴
         start_scale:0,//设置开始刻度为0
         end_scale:1000,//设置结束刻度为26
         scale_space:100,//设置刻度间距
         listeners:{//配置事件
          parseText:function(t,x,y){//设置解析值轴文本
            return {text:t}
          }
        }
      }]
    }
  });
  //调用绘图方法开始绘图
  chart.draw();
});


//定义数据
var data2 = [
  {name : '0',value : 50,color:'#a5c2d5'},
  {name : '4',value : 100,color:'#cbab4f'},
  {name : '8',value : 150,color:'#76a871'},
  {name : '12',value : 300,color:'#76a871'},
  {name : '16',value : 350,color:'#a56f8f'},
  {name : '20',value : 400,color:'#c12c44'},
  {name : '24',value : 450,color:'#a56f8f'},
 ];
 $(function(){
  var chart = new iChart.Column2D({
    render : 'canvasDiv2',//渲染的Dom目标,canvasDiv为Dom的ID
    data: data2,//绑定数据
    title : 'm³表',//设置标题
    width : 380,//设置宽度，默认单位为px
    height : 280,//设置高度，默认单位为px
    shadow:true,//激活阴影
    shadow_color:'#c7c7c7',//设置阴影颜色
    coordinate:{//配置自定义坐标轴
      scale:[{//配置自定义值轴
         position:'left',//配置左值轴
         start_scale:0,//设置开始刻度为0
         end_scale:1000,//设置结束刻度为26
         scale_space:100,//设置刻度间距
         listeners:{//配置事件
          parseText:function(t,x,y){//设置解析值轴文本
            return {text:t}
          }
        }
      }]
    }
  });
  //调用绘图方法开始绘图
  chart.draw();
});


var data3 = [
    {name : '1-11',value : 700,color:'#a5c2d5'},
    {name : '1-12',value : 900,color:'#cbab4f'},
    {name : '1-13',value : 860,color:'#76a871'},
    {name : '1-14',value : 800,color:'#76a871'},
    {name : '1-15',value : 600,color:'#a56f8f'},
    {name : '1-16',value : 760,color:'#c12c44'},
    {name : '1-17',value : 950,color:'#a56f8f'},
 ];
 $(function(){
  var chart = new iChart.Column2D({
    render : 'canvasDiv3',//渲染的Dom目标,canvasDiv为Dom的ID
    data: data3,//绑定数据
    title : '吨位表',//设置标题
    width : 380,//设置宽度，默认单位为px
    height : 280,//设置高度，默认单位为px
    shadow:true,//激活阴影
    shadow_color:'#c7c7c7',//设置阴影颜色
    coordinate:{//配置自定义坐标轴
      scale:[{//配置自定义值轴
         position:'left',//配置左值轴
         start_scale:0,//设置开始刻度为0
         end_scale:1000,//设置结束刻度为26
         scale_space:100,//设置刻度间距
         listeners:{//配置事件
          parseText:function(t,x,y){//设置解析值轴文本
            return {text:t}
          }
        }
      }]
    }
  });
  //调用绘图方法开始绘图
  chart.draw();
});

var data4 = [
    {name : '1-11',value : 333,color:'#a5c2d5'},
    {name : '1-12',value : 555,color:'#cbab4f'},
    {name : '1-13',value : 444,color:'#76a871'},
    {name : '1-14',value : 888,color:'#76a871'},
    {name : '1-15',value : 290,color:'#a56f8f'},
 ];
 $(function(){
  var chart = new iChart.Column2D({
    render : 'canvasDiv4',//渲染的Dom目标,canvasDiv为Dom的ID
    data: data4,//绑定数据
    title : 'm³表',//设置标题
    width : 380,//设置宽度，默认单位为px
    height : 280,//设置高度，默认单位为px
    shadow:true,//激活阴影
    shadow_color:'#c7c7c7',//设置阴影颜色
    coordinate:{//配置自定义坐标轴
      scale:[{//配置自定义值轴
         position:'left',//配置左值轴
         start_scale:0,//设置开始刻度为0
         end_scale:1000,//设置结束刻度为26
         scale_space:100,//设置刻度间距
         listeners:{//配置事件
          parseText:function(t,x,y){//设置解析值轴文本
            return {text:t}
          }
        }
      }]
    }
  });
  //调用绘图方法开始绘图
  chart.draw();
});

var data5 = [
  {name : '一周',value : 333,color:'#a5c2d5'},
  {name : '二周',value : 555,color:'#cbab4f'},
  {name : '三周',value : 444,color:'#76a871'},
  {name : '四周',value : 888,color:'#76a871'},
  {name : '五周',value : 290,color:'#a56f8f'},
 ];
 $(function(){
  var chart = new iChart.Column2D({
    render : 'canvasDiv5',//渲染的Dom目标,canvasDiv为Dom的ID
    data: data5,//绑定数据
    title : '吨位表',//设置标题
    width : 380,//设置宽度，默认单位为px
    height : 280,//设置高度，默认单位为px
    shadow:true,//激活阴影
    shadow_color:'#c7c7c7',//设置阴影颜色
    coordinate:{//配置自定义坐标轴
      scale:[{//配置自定义值轴
         position:'left',//配置左值轴
         start_scale:0,//设置开始刻度为0
         end_scale:1000,//设置结束刻度为26
         scale_space:100,//设置刻度间距
         listeners:{//配置事件
          parseText:function(t,x,y){//设置解析值轴文本
            return {text:t}
          }
        }
      }]
    }
  });
  //调用绘图方法开始绘图
  chart.draw();
});

var data6 = [
  {name : '一周',value : 254,color:'#a5c2d5'},
  {name : '二周',value : 320,color:'#cbab4f'},
  {name : '三周',value : 402,color:'#76a871'},
  {name : '四周',value : 670,color:'#76a871'},
  {name : '五周',value : 259,color:'#a56f8f'},
 ];
 $(function(){
  var chart = new iChart.Column2D({
    render : 'canvasDiv6',//渲染的Dom目标,canvasDiv为Dom的ID
    data: data6,//绑定数据
    title : 'm³表',//设置标题
    width : 380,//设置宽度，默认单位为px
    height : 280,//设置高度，默认单位为px
    shadow:true,//激活阴影
    shadow_color:'#c7c7c7',//设置阴影颜色
    coordinate:{//配置自定义坐标轴
      scale:[{//配置自定义值轴
         position:'left',//配置左值轴
         start_scale:0,//设置开始刻度为0
         end_scale:1000,//设置结束刻度为26
         scale_space:100,//设置刻度间距
         listeners:{//配置事件
          parseText:function(t,x,y){//设置解析值轴文本
            return {text:t}
          }
        }
      }]
    }
  });
  //调用绘图方法开始绘图
  chart.draw();
});

var data7 = [
    {name : '1-11',value : 700,color:'#a5c2d5'},
    {name : '1-12',value : 500,color:'#cbab4f'},
    {name : '1-13',value : 420,color:'#76a871'},
    {name : '1-14',value : 820,color:'#76a871'},
    {name : '1-15',value : 350,color:'#a56f8f'},
    {name : '1-16',value : 530,color:'#c12c44'},
    {name : '1-17',value : 950,color:'#a56f8f'},
 ];
 $(function(){
  var chart = new iChart.Column2D({
    render : 'canvasDiv7',//渲染的Dom目标,canvasDiv为Dom的ID
    data: data7,//绑定数据
    title : '吨位表',//设置标题
    width : 380,//设置宽度，默认单位为px
    height : 280,//设置高度，默认单位为px
    shadow:true,//激活阴影
    shadow_color:'#c7c7c7',//设置阴影颜色
    coordinate:{//配置自定义坐标轴
      scale:[{//配置自定义值轴
         position:'left',//配置左值轴
         start_scale:0,//设置开始刻度为0
         end_scale:1000,//设置结束刻度为26
         scale_space:100,//设置刻度间距
         listeners:{//配置事件
          parseText:function(t,x,y){//设置解析值轴文本
            return {text:t}
          }
        }
      }]
    }
  });
  //调用绘图方法开始绘图
  chart.draw();
});

var data8 = [
    {name : '1-11',value : 333,color:'#a5c2d5'},
    {name : '1-12',value : 555,color:'#cbab4f'},
    {name : '1-13',value : 444,color:'#76a871'},
    {name : '1-14',value : 888,color:'#76a871'},
    {name : '1-15',value : 290,color:'#a56f8f'},
    {name : '1-16',value : 357,color:'#c12c44'},
    {name : '1-17',value : 657,color:'#a56f8f'},
 ];
 $(function(){
  var chart = new iChart.Column2D({
    render : 'canvasDiv8',//渲染的Dom目标,canvasDiv为Dom的ID
    data: data8,//绑定数据
    title : 'm³表',//设置标题
    width : 380,//设置宽度，默认单位为px
    height : 280,//设置高度，默认单位为px
    shadow:true,//激活阴影
    shadow_color:'#c7c7c7',//设置阴影颜色
    coordinate:{//配置自定义坐标轴
      scale:[{//配置自定义值轴
         position:'left',//配置左值轴
         start_scale:0,//设置开始刻度为0
         end_scale:1000,//设置结束刻度为26
         scale_space:100,//设置刻度间距
         listeners:{//配置事件
          parseText:function(t,x,y){//设置解析值轴文本
            return {text:t}
          }
        }
      }]
    }
  });
  //调用绘图方法开始绘图
  chart.draw();
});
